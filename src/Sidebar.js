import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser)

  const recentItem = (topic) => {
      return (
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
      )
  }



	return (
		<div className="sidebar">
			<div className="sidebar__top">
        <img src="https://library.ucsd.edu/zoomify/bb/04/bb04105527/TileGroup0/2-1-1.jpg" alt="" />
        <Avatar src={user.user.photoUrl} className="sidebar__avatar" > {user.user.email[0]} </Avatar>
        <h2> {user.user.displayName} </h2>
        <h4>{user.user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
          </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
		</div>
	);
}

export default Sidebar;
