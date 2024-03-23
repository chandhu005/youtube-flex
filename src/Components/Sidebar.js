import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  //early return pattern

  if(isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'><Link to="/">Home</Link></li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Shorts</li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Videos</li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Live</li>
       
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Music</li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Sports</li>
        <li className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Gaming</li>
        <li className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Movies</li>
       
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Music</li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Sports</li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Gaming</li>
        <li  className='hover:text-xl hover:bg-gray-100 cursor-pointer  hover:text-purple-500'>Movies</li>
       
      </ul>
      
    </div>
  )
}

export default Sidebar