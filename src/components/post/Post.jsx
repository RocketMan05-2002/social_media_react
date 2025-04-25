import './post.css'
import { RxDotsVertical } from "react-icons/rx";



export default function Post({post}){

    const {profileImg, username, postDate, text, postImg, likeCount, commentCount} = post;

    return <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={profileImg} alt='person' className='postProfileImg' />
                    <span className='postUsername'>{username}</span>
                    <span className="postDate">{postDate}</span>
                </div>
                <div className="postTopRight">
                    <RxDotsVertical size={20} />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{text}</span>
                <img src={postImg} alt='post' className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src='/assets/like.png' alt='like' className='likeIcon' />
                    <img src='/assets/heart.png' alt='heart' className='likeIcon' />
                    <span className="postLikeCounter">{likeCount} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{commentCount} comments</span>
                </div>
            </div>
        </div>
    </div>
}