import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 ">
     <h1 className="font-bold">Favourite</h1>
      <ul>
        <li><Link to="/">🏠Home</Link></li>
        <li>🎥Shorts</li>
        <li>🎥Videos</li>
        <li>😊Live</li>
        <li>🏏Cricket</li>
      </ul>
      <h1 className="font-bold pt-5">Watchlater</h1>
      <ul>
        <li>Movies</li>
        <li>Cricket</li>
        <li>Games</li>
        <li>Songs</li>
        <li>Soccer</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Movies</li>
        <li>Cricket</li>
        <li>Games</li>
        <li>Songs</li>
        <li>Soccer</li>
      </ul>
    </div>
  )
}

export default Sidebar
