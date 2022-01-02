import React from 'react'
import { Link } from 'react-router-dom'

const LayOut = () => {
    return (
        <>
        <div className='navbar'>
        
               <h1> Kwitter</h1>
            
            <div>
                <ul>
                    <li><Link to="./LatestPosts">Latest Posts</Link></li>
                    <li><Link to="./Posts">All Posts</Link></li>
                    <li><Link to="./New">New</Link></li>
                </ul>
            </div>
        </div>
      
        </>
    )
}

export default LayOut
