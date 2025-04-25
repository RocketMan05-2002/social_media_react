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

export const posts = [
    {
      id: 1,
      username: "Abhinay Shambharkar",
      profileImg: "/assets/person/1.jpeg",
      postDate: "5 mins ago",
      text: "Hey this is me after getting placed into Google",
      postImg: "/assets/post/1.png",
      likeCount: 32,
      commentCount: 9
    },
    {
      id: 2,
      username: "Sneha Ann",
      profileImg: "/assets/person/2.jpeg",
      postDate: "10 mins ago",
      text: "What a beautiful day to code!",
      postImg: "/assets/post/2.webp",
      likeCount: 45,
      commentCount: 12
    },
    {
      id: 3,
      username: "Haritha",
      profileImg: "/assets/person/3.jpeg",
      postDate: "1 hour ago",
      text: "Just finished my workout session!",
      postImg: "/assets/post/3.jpg",
      likeCount: 89,
      commentCount: 23
    },
    {
      id: 4,
      username: "Rahul Dev",
      profileImg: "/assets/person/4.jpeg",
      postDate: "30 mins ago",
      text: "Working on a new React project!",
      postImg: "/assets/post/4.jpeg",
      likeCount: 61,
      commentCount: 14
    },
    {
      id: 5,
      username: "Priya Raj",
      profileImg: "/assets/person/5.jpeg",
      postDate: "2 hours ago",
      text: "Frontend devs rise up 💻✨",
      postImg: "/assets/post/5.jpeg",
      likeCount: 78,
      commentCount: 19
    },
    {
      id: 6,
      username: "Karthik M",
      profileImg: "/assets/person/6.jpg",
      postDate: "15 mins ago",
      text: "Figma to React - loving the process!",
      postImg: "/assets/post/6.avif",
      likeCount: 50,
      commentCount: 11
    },
    {
      id: 7,
      username: "Deepika Sharma",
      profileImg: "/assets/person/7.avif",
      postDate: "Yesterday",
      text: "Calisthenics and coding, both feel like art.",
      postImg: "/assets/post/7.png",
      likeCount: 90,
      commentCount: 25
    },
    {
      id: 8,
      username: "Rohit V",
      profileImg: "/assets/person/8.jpg",
      postDate: "20 mins ago",
      text: "Deploying my app today 🚀",
      postImg: "/assets/post/8.png",
      likeCount: 38,
      commentCount: 6
    },
    {
      id: 9,
      username: "Shalini Nair",
      profileImg: "/assets/person/9.jpg",
      postDate: "3 hours ago",
      text: "Love the Tailwind vibes 🔥",
      postImg: "/assets/post/9.png",
      likeCount: 70,
      commentCount: 15
    },
    {
      id: 10,
      username: "Naveen Raj",
      profileImg: "/assets/person/10.jpg",
      postDate: "Just now",
      text: "Debugged a nasty issue today 🐞",
      postImg: "/assets/post/10.png",
      likeCount: 28,
      commentCount: 4
    },
    {
      id: 11,
      username: "Aarushi Patel",
      profileImg: "/assets/person/1.jpeg",
      postDate: "Yesterday",
      text: "Jesus is King 🙌",
      postImg: "/assets/post/1.png",
      likeCount: 84,
      commentCount: 29
    },
    {
      id: 12,
      username: "Yash Khurana",
      profileImg: "/assets/person/2.jpeg",
      postDate: "4 hours ago",
      text: "Learning Redux is tough but worth it!",
      postImg: "/assets/post/2.webp",
      likeCount: 55,
      commentCount: 17
    },
    {
      id: 13,
      username: "Meena K",
      profileImg: "/assets/person/3.jpeg",
      postDate: "5 hours ago",
      text: "React 19 is smooth!",
      postImg: "/assets/post/3.jpg",
      likeCount: 66,
      commentCount: 13
    },
    {
      id: 14,
      username: "Devraj Singh",
      profileImg: "/assets/person/4.jpeg",
      postDate: "10 mins ago",
      text: "Design → Develop → Deploy → Repeat 🔁",
      postImg: "/assets/post/4.jpeg",
      likeCount: 77,
      commentCount: 21
    },
    {
      id: 15,
      username: "Nisha T",
      profileImg: "/assets/person/5.jpeg",
      postDate: "7 mins ago",
      text: "VSCode is my happy place.",
      postImg: "/assets/post/5.jpeg",
      likeCount: 41,
      commentCount: 8
    },
    {
      id: 16,
      username: "Farhan K",
      profileImg: "/assets/person/6.jpg",
      postDate: "Yesterday",
      text: "Exploring Next.js and it's 🔥",
      postImg: "/assets/post/6.avif",
      likeCount: 88,
      commentCount: 18
    },
    {
      id: 17,
      username: "Ankita Das",
      profileImg: "/assets/person/7.avif",
      postDate: "1 hour ago",
      text: "Jira tasks done ✅ Time for a break",
      postImg: "/assets/post/7.png",
      likeCount: 54,
      commentCount: 10
    },
    {
      id: 18,
      username: "Vinay A",
      profileImg: "/assets/person/8.jpg",
      postDate: "20 mins ago",
      text: "Just fixed a production bug 😅",
      postImg: "/assets/post/8.png",
      likeCount: 73,
      commentCount: 16
    },
    {
      id: 19,
      username: "Sowmya R",
      profileImg: "/assets/person/9.jpg",
      postDate: "2 hours ago",
      text: "Started learning TypeScript today!",
      postImg: "/assets/post/9.png",
      likeCount: 67,
      commentCount: 22
    },
    {
      id: 20,
      username: "Vikram J",
      profileImg: "/assets/person/10.jpg",
      postDate: "3 mins ago",
      text: "Dark mode supremacy 🌚",
      postImg: "/assets/post/10.png",
      likeCount: 59,
      commentCount: 13
    }
  ];