import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineCamera} from 'react-icons/hi2'

const Google = () => {
  return (
    // google container
    <div className='h-screen flex justify-center items-center flex-col'>

      {/* Input, search and camera container */}
      <div className='flex w-1/2 m-auto px-4 py-2 border-2 rounded-full items-center'>

        {/* Search container */}
        <div className='pr-1'>
          <AiOutlineSearch className='h-5 w-5'/>
        </div>
        
        {/* input */}
        <input type="text" className=' h-full mx-auto w-full focus:outline-none'/>
        
        {/* camera container */}
        <div className='px-1'>
          <HiOutlineCamera className='h-6 w-6'/>
        </div>
      </div>
    </div>
  )
}

export default Google