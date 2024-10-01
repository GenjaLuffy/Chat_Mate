import prisma from '@/app/libs/prismadb';
import {decryptMessage} from "@/app/utils/AES";

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return messages.map((message) => {
      const decryptedBody = message.body ? decryptMessage(message.body, message.aesKey || '') : '';
      return {
        ...message,
        body: decryptedBody,
      };
    });

  } catch (error: any) {
    return [];
  }
};

export default getMessages;
