import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage'

const LiveChat = () => {
 const [liveMessage,setLiveMessage] = useState("")
   const dispatch =useDispatch(); 
   const ChatMessages = useSelector(store=>store.chat.message)
useEffect(()=>{
const i = setInterval(()=>{
//Api polling
// console.log("API-polling")
dispatch(addMessages({
    name:generateRandomName(),
    message: makeRandomMessage(25) + "🚀"
}))
},2000);

return ()=>clearInterval(i)
},[])

  return (
<>
    <div className=' ml-2 p-2 w-full h-[500px] border border-black bg-slate-100  overflow-y-scroll  flex flex-col-reverse rounded-lg'>
    <div>
      {ChatMessages.map((c,i)=>(<ChatMessage key={i} name={c.name} message={c.message}/>))}</div>
    </div>

 <form className='w-full p-2 ml-2 border border-black ' onSubmit={(e)=>{e.preventDefault();
  dispatch(addMessages({
    name:"Pravendra singh",
    message:liveMessage,
  })
 );setLiveMessage("");
 }}>
        <input className='px-2 w-72' type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} /><button className='px-2 mx-2 bg-green-300'>Send</button>
      </form>
</>
  )
}

export default LiveChat
