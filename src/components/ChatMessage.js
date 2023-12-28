import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow p-2'>
      <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
     <div className='ml-2'>
      <span className='font-bold'>{name} </span> 
      <span >{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage