import React from 'react'
import { toggleMenu } from '../utils/appSlice';
import {useDispatch} from "react-redux";


const Header = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () =>{
        dispatch (toggleMenu());
    };


  return (
    
    <div className='sticky top-0 bg-white'>
    <div className='grid grid-flow-col p-4 shadow-lg'>
        <div className='flex col-span-2'>
            <img 
            onClick={() => toggleMenuHandler()}            
            className='cursor-pointer h-7' alt='menu' src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
            <a href="/"><img className='ml-2 h-7' alt='logo' src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png'/></a>
        </div>

        <div className='col-span-6 flex justify-center'>
            <input className='border border-gray-400 rounded-l-full w-3/4' type='text'/>
            <button className='px-4 bg-slate-100 border border-gray-400 rounded-r-full'><img
              className="w-[20px]"
              alt="search-icon"
              src="https://img.icons8.com/?size=512&id=132&format=png"
            /></button>
        </div>

        <div className='col-span-4 flex justify-end px-2'>
            <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
        </div>
    </div>
    </div>
   
  )
}

export default Header;