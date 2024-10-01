import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import { pusherServer } from '@/app/libs/pusher';
import { decryptMessage } from "@/app/utils/AES";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { encryptedData, aesKey, image, conversationId } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // const decryptedData = decryptMessage(encryptedData, aesKey);
    // console.log("DecryptedData", decryptedData);

    const newMessage = await prisma.message.create({
      data: {
        body: encryptedData,
        image,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUser.id,
          },
        },
        seen: {
          connect: {
            id: currentUser.id,
          },
        },
        aesKey,
      },

      include: {
        sender: true,
        seen: true,
      },
    });
    // const newMessage = await prisma.message.create({
    //   data: {
    //     body: message,
    //     image,
    //     conversation: {
    //       connect: {
    //         id: conversationId,
    //       },
    //     },
    //     sender: {
    //       connect: {
    //         id: currentUser.id,
    //       },
    //     },
    //     seen: {
    //       connect: {
    //         id: currentUser.id,
    //       },
    //     },
    //   },
    //
    //   include: {
    //     sender: true,
    //     seen: true,
    //   },
    // });

    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          },
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            seen: true,
          },
        },
      },
    });

    //
    await pusherServer.trigger(conversationId, 'messages:new', newMessage);

    // get last message
    const lastMessage =
      updatedConversation.messages[updatedConversation.messages.length - 1];

    // send notification in chat sidebar to all users in the conversation
    updatedConversation.users.map((user) => {
      pusherServer.trigger(user.email!, 'conversation:update', {
        id: conversationId,
        messages: [lastMessage],
      });
    });

    return NextResponse.json(newMessage);
  } catch (error: any) {
    console.error("Error in API Route:", error); // Detailed error logging
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
