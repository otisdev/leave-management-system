import React from 'react'
import "./navbar.scss"
import styled from 'styled-components'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ChatBubbleOutlineOutlined,
   DarkModeOutlined, FullscreenExitOutlined,
    LanguageOutlined, ListOutlined,
     NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'

const Navbar = () => {

    const url = "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=170667a&w=0&h=ipUh1s5ULxhCBdm5LyFb5ISrUYZqEVTiu_HTX3qWM4Y="

  return (
    <div className="navbar">
    <div className="wrapper">
     <div className="search">
     <input type="text" placeholder='search...' />
     <SearchOutlined />
     </div>   
     <div className="items">
         <div className="item">
             <LanguageOutlined className="icon" /> 
         </div>
         <div className="item">
             <DarkModeOutlined className="icon" />

         </div>
         <div className="item">
             <FullscreenExitOutlined className="icon" />

         </div>
         <div className="item">
             <NotificationsNoneOutlined className="icon" />

         </div>
         <div className="item">
             <ChatBubbleOutlineOutlined className="icon" />
         </div>
         <div className="item">
             <img src={url}  className='avatar'/>
         </div>
     </div>
     </div> 
 </div>
  )
}

export default Navbar