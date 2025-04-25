import React from 'react'
import './share.css'
import { shareTags } from '../../utils/utils'

const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/8.jpg" alt='person' className='shareProfileImg' />
            <input className='shareInput' placeholder='whats on your mind brather?' />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
            <div className="shareOptions">
                {
                    shareTags.map((item)=>{
                        return <div className='shareOption' key={item.id}>
                            {item.icon}
                            <span className='shareOptionText'>{item.title}</span>
                        </div>
                    })
                }
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
