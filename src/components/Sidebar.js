import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen) return null;


  return (
    <div className='w-[12%] pb-5 px-5 shadow-lg'>
        <div className='fixed w-[11%] h-screen overflow-y-scroll'>
        <ul className='pt-5'>
           <li><Link to= "/">Home </Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
       { /**/}
       <ul>
           <li><Link to= "/">Home </Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <ul>
           <li><Link to= "/">Home </Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar