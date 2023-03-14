import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
     <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU" alt="userimage" />
     <span className='font-bold px-2'>{name}</span>
     <span className='m-2'>{message}</span>
    </div>
  )
}

export default ChatMessage
