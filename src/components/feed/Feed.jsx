import Share from '../share/Share'
import './feed.css'
import Post from '../post/Post'
import { posts } from '../../utils/utils'

export default function Feed(){
    return <div className='feed'>
        <div className="feedWrapper">
            <Share />
            {
                posts.map((p)=>{
                    return <Post key={p.id} post={p} />
                })
            }
        </div>
    </div>
}