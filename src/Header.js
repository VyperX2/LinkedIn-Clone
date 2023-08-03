import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
    <div className='header'>
      

      <div className="header__left">
        <svg
         xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></svg>

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>




      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://yt3.ggpht.com/djF7wFrdjQ5ySF-aw4HBx1AWH7aOM_ZeJpySJrN5rr8qNABNwOuzkTPURiLw_I7LpIX9nuqw1_g=s88-c-k-c0x00ffffff-no-rj" title="Me"/>
      </div>  
      
    </div>
  )
}

export default Header