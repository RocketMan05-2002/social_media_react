import React from 'react'
import './topbar.css'
import { IoIosSearch,IoIosNotifications } from "react-icons/io";
import { IoPersonCircleSharp,IoChatboxEllipses } from "react-icons/io5";


const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>Soshull</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <IoIosSearch className='searchIcon' />
                <input placeholder='search for friends,posts or any video' className='searchInput' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <IoPersonCircleSharp size={25} />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <IoChatboxEllipses size={25} />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <IoIosNotifications size={25} />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src='/assets/person/8.jpg' alt='' className='topbarImg' />
        </div>
    </div>
  )
}

export default Topbar
