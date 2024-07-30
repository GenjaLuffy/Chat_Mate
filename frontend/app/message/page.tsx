import React from 'react'
import Image from 'next/image'
function MessageUI() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-96 bg-gray-200 flex flex-col">
          <div className="bg-blue-400 h-16 flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <div className='rounded-full'>
               <Image src="/defult.png" alt="User" width={100} height={100}/>
               </div>
              </div>
            </div>
            <div className="text-white">...</div>
          </div>
          <div className="p-4 border-b border-gray-300">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-300"
              >
               <div className='rounded-full'>
               <Image src="/defult.png" alt="User" width={100} height={100}/>
               </div>
                <div>
                  <div className="font-bold text-[20px]">Sam</div>
                  <div className="text-black-600">Hello</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-white">
          {/* <p>Select a conversation</p>   */}
        </div>
      </div>
    </div>
  );
}
export default MessageUI;
