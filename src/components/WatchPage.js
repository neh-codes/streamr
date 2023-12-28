import React, { useEffect } from 'react';
import { useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice";
import {useSearchParams} from "react-router-dom";
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';



const WatchPage = () => {
    const [searchParams]= useSearchParams();


    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    });
  return  (
    <div className='flex flex-col'>
  <div className='p-4 flex '>
    <div>
                    <iframe className='rounded-lg' width="853" height="480" src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
  <div className='w-full'>

<LiveChat/>
  </div>
  </div>
  <CommentsContainer/>
  </div>
    )
  
};

export default WatchPage;