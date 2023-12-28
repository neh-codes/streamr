import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(()=>{
    const i = setInterval(()=>{


      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20),
      }))
    }, 2000);

    return () => clearInterval(i);
  }, [] );


  return (
    <>
    <div className='w-full h-[480px] p-2 mx-2 bg-slate-100 border border-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c,i)=>(
        <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}
        
    </div>
    <div className='w-full p-2 ml-2 rounded border border-gray-300'>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "Neha Keskar",
          message:liveMessage,
        })
        );
        setLiveMessage("");
        }}>
    <input className='w-[85%] px-2' type='text' value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value)}}></input>
    <button className='m-1 rounded px-4 py-2 bg-gray-100'>Send</button>
    </form>
    </div>
    
    </>
  )
}

export default LiveChat