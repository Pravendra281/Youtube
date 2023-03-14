import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/Constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showsuggestions,setShowSuggestions]=useState(false);

  const searchCache= useSelector((store)=>store.search);
  const dispatch=useDispatch();

useEffect(()=>{
const timer= setTimeout(() => {
   if (searchCache[searchQuery]){
     setSuggestions(searchCache[searchQuery])
} else{
getSearchSuggestions();
}
},200);

return()=>{
clearTimeout(timer);
};
},[searchQuery]);

const getSearchSuggestions = async ()=>{
  const data= await fetch(YOUTUBE_SEARCH_API+ searchQuery)
  const json= await data.json();
  setSuggestions(json[1])

  dispatch(cacheResults({
    [searchQuery]:json[1],
  }));
}



const toggleMenuhandler=()=>{
  dispatch(toggleMenu())

}

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
       <img onClick={()=>toggleMenuhandler()}
       className='h-8 cursor-pointer' src="https://openclipart.org/image/800px/221605" alt="menu" />
      <a href='/'>
       <img 
       className='h-12 mx-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="youtube logo" /></a>
      </div>
      <div className="col-span-10 px-10">
      <div>
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" 
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-slate-200">🔍</button>
        </div>
        {showsuggestions && (<div className=" absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-slate-100 ">
          <ul>
          {suggestions.map((s)=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
          🔍{s}</li>)}
            
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU" alt="userimage" />
      </div>
    </div>
  )
}

export default Head
