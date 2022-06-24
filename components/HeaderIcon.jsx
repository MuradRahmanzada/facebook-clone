import React from 'react'

const HeaderIcon = ({Icon, active}) => {
  return (
    <div className='flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 hover:bg-gray-100 active:border-b-2 active:border-blue-500 group'>
        <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 ${active && "text-blue-500"} text-center sm:h-6 mx-auto`}/>
        
    </div>
  )
}

export default HeaderIcon