import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineCamera} from 'react-icons/hi2'
import profile from '../../src/profile.jpg'
import {GrApps} from 'react-icons/gr'

const Google = () => {
  return (
    // google container
    <div className='h-screen flex justify-center items-center flex-col'>

        {/* profile and links container */}
        <div className='absolute top-0 text-sm right-0 pr-2 pt-4 flex space-x-3 items-center'>
          <div className='space-x-3 pr-3'>
            <a href='#' className='hover:underline'>Gmail</a>
            <a href='#' className='hover:underline'>Images</a>
          </div>
          <div>
            <GrApps className='w-6 h-6'/>
          </div>
          <div className='w-10 h-10'>
            <img src={profile} alt='' className='rounded-full w-8 h-8'/>
          </div>
        </div>

      {/* Input, search and camera container */}
      <div className='flex w-1/2 px-4 h-30 py-2 border-2 rounded-full items-center'>

        {/* Search container */}
        <div className='pr-1'>
          <AiOutlineSearch className='h-5 w-5'/>
        </div>

        {/* input */}
        <input type="text" className=' h-full mx-auto w-11/12 focus:outline-none' placeholder='placeholder text focus:outline-none'/>
        
        {/* camera container */}
        <div className='px-1'>
          <HiOutlineCamera className='h-6 w-6'/>
        </div>
        
      </div>
      <div assName='w-1/2 pt-3'>
        <button className='m-5 bg-gray-200 rounded-sm p-2'>Google Search</button>
        <button className=' bg-gray-200 rounded-sm p-2'>I'm Feeling Lucky</button>
      </div>
    </div>
  )
}

export default Google