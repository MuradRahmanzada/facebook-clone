import Image from 'next/image'
import React from 'react'

const Contact = ({src, name}) => {
  return (
    <div className='flex items-center space-x-3 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <Image
        src={src}
        width={50}
        height={50}
        layout="fixed"
        objectFit='cover'
        className='rounded-full'
        />
        <p className='font-semibold'>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'/>
    </div>
  )
}

export default Contact