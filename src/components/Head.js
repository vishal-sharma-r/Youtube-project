import React from 'react'
import { BiSearch } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import {AiOutlineMenu} from  "react-icons/ai";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <AiOutlineMenu className="   mt-4 mx-4 hover:bg-gray-200 rounded-2xl cursor-pointer"onClick={()=> toggleMenuHandler()}/>
            <a href='/'>
            <img src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' alt='youtube logo' className='h-12'/>
            </a>
        </div>
        <div className='col-span-10 text-center pt-1 h-12'>
            <input type="text" className='w-1/2  border border-gray-400 p-2 rounded-l-full'/>
            <button className='border border-gray-400 pt-[0.65rem] pb-[0.85rem] rounded-r-full px-5  bg-gray-100'><BiSearch/></button>
        </div>
        <div className='col-span-1'>
            <img alt="userIcon" src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' className='h-[2.9rem] pl-2 pt-1'/>
        </div>
    </div>

  );
}

export default Head;