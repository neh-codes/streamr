import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import {useDispatch, useSelector} from "react-redux";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Header = () => {

    const[searchQuery , setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState("false");

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();


    useEffect(() => {
        const timer = setTimeout(()=> {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
            }
            
            }, 200);
        return() => {
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async () =>{
        console.log("API Call-"+ searchQuery);
        const data = await fetch (YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        
        dispatch(
            cacheResults({
                [searchQuery] : json[1]
            }))
    };


    const toggleMenuHandler = () =>{
        dispatch (toggleMenu());
    };


  return (
    
    <div className='sticky top-0 bg-white shadow-md'>
    <div className='grid grid-flow-col p-4'>
        <div className='flex col-span-2'>
            <img 
            onClick={() => toggleMenuHandler()}            
            className='cursor-pointer h-7' alt='menu' src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
            <a href="/"><img className='ml-2 h-7' alt='logo' src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png'/></a>
        </div>

        <div className='col-span-6 justify-center'>
        <div>
            <input className='border px-2 py-1 border-gray-400 rounded-l-full w-3/4' type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
            <button className='px-4 py-1  bg-slate-100 border border-gray-400 rounded-r-full'>&#x1F50E;&#xFE0E;</button>
            </div>
            
            {showSuggestions && (<div className='fixed bg-white w-[36rem] shadow-lg rounded'>
                <ul>
                {suggestions.map((s)=>(<li className='cursor-pointer p-2 rounded hover:bg-gray-100 border-b border-gray-100'>&#x1F50E;&#xFE0E; {s}</li>))}
                
                </ul>
            </div>)}
        </div>

        <div className='col-span-4 flex justify-end px-2'>
            <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
        </div>
    </div>
    </div>
   
  )
}

export default Header;