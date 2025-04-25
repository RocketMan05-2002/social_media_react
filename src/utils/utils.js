// imports for sidebar navigation

import { MdRssFeed,MdMarkUnreadChatAlt,MdGroup,MdBookmark,MdEvent } from "react-icons/md";
import { FaPlayCircle,FaQuestionCircle,FaGraduationCap } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

// imports for share/create post

import { MdPermMedia} from "react-icons/md";
import { FaLocationDot, FaTag, FaFaceLaugh } from "react-icons/fa6";



export const sidebarLinks = [
    {
      id:1,
      icon: <MdRssFeed size={25}/>,
      name:"Feed"
    },
    {
        id:2,
        icon: <MdMarkUnreadChatAlt size={25}/>,
        name:"Chats"
    },
    {
        id:3,
        icon: <FaPlayCircle size={25}/>,
        name:"Videos"
    },
    {
        id:4,
        icon: <MdGroup size={25}/>,
        name:"Groups"
    },
    {
        id:5,
        icon: <MdBookmark size={25}/>,
        name:"Bookmarks"
    },
    {
        id:6,
        icon: <FaQuestionCircle size={25}/>,
        name:"Questions"
    },
    {
        id:7,
        icon: <PiSuitcaseSimpleBold size={25}/>,
        name:"Jobs"
    },
    {
        id:8,
        icon: <MdEvent size={25}/>,
        name:"Events"
    },
    {
        id:9,
        icon: <FaGraduationCap size={25}/>,
        name:"Courses"
    },
];

export const friends = [
    {
        id:2,
        profileSrc: "/assets/person/2.jpeg",
        name:"Aiihd" 
    },
    {
        id:3,
        profileSrc: "/assets/person/3.jpeg",
        name:"Bakjdbadnj aD  BKJDB" 
    },
    {
        id:4,
        profileSrc: "/assets/person/4.jpeg",
        name:"CSDKASK BD" 
    },
    {
        id:5,
        profileSrc: "/assets/person/5.jpeg",
        name:"D KDBBKK" 
    },
    {
        id:6,
        profileSrc: "/assets/person/6.jpg",
        name:"E SAKBAB" 
    },
    {
        id:7,
        profileSrc: "/assets/person/7.avif",
        name:"FBKB XABK BB" 
    },
    {
        id:8,
        profileSrc: "/assets/person/8.jpg",
        name:"GKX AK JBJ" 
    },
    {
        id:9,
        profileSrc: "/assets/person/9.jpg",
        name:"HHXJHA MA" 
    },
    {
        id:10,
        profileSrc: "/assets/person/10.jpg",
        name:"IKABJKBKXA B AKJ " 
    },
    
]

export const shareTags =[
    {
        id:1,
        icon: <MdPermMedia size={20} color="darkorange"/>,
        title:"Photo/Video"
    },
    {
        id:2,
        icon: <FaTag size={20} color="blue" />,
        title:"Tag Someone"
    },
    {
        id:3,
        icon: <FaLocationDot size={20} color="green" />,
        title:"Location"
    },
    {
        id:4,
        icon: <FaFaceLaugh size={20} color="red" />,
        title:"Feelings"
    },
]