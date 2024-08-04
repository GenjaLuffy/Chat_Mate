import React from 'react'
import Image from 'next/image'

function info() {
  return (
    <div className="w-80 bg-white shadow-lg">


      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg">Contact Info</h2>
        <button className="text-white">X</button>
      </div>


      <div className="p-4 flex flex-col items-center">
        <div>
            <Image className="w-40 h-24 rounded-full flex items-center justify-center mb-2"
            src="/defult.png" alt="User" width={100} height={100}/>
        </div>
        <div className="text-xl font-semibold">SAM</div>
      </div>


      <div className="px-4">
        <h3 className="text-gray-600 font-semibold mb-1">About:</h3>
        <p className="text-gray-600 mb-4">This is about the Contact persons info.</p>
      </div>



      <div className="px-4">
        <h3 className="text-gray-600 font-semibold mb-1">Media</h3>
        <div className="grid grid-cols-3 gap-2">
            <div className="w-full h-20 bg-gray-300 flex items-center justify-center">
            <Image src="/gallery.png" alt="gallery" width={100} height={100}/>
            </div>
        </div>
      </div>


      <div className="mt-4">
        <button className="w-full flex items-center justify-center text-left text-red-500 py-2 px-4 hover:bg-gray-100">
          Delete Message
        </button>
        <button className="w-full flex items-center justify-center text-left py-2 px-4 hover:bg-gray-100">
          Block
        </button>
      </div>
    </div>
  )
}

export default info
