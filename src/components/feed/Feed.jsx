import { useEffect,useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import axios from 'axios'


export default function Feed({username}) {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    if(username){
    fetch(`/posts/profile/${username}`,{
      method:'get',
      headers : { 
        'Content-Type': 'application/json'
       },
    })
    .then(res=>res.json())
    .then(res=>setPosts(res))
    }
    else{
      fetch('/posts/timeline/61c15b9ced4e2a27ca5625fc',{
        method:'get',
        headers : { 
          'Content-Type': 'application/json'
         },
      })
      .then(res=>res.json())
      .then(res=>setPosts(res))
    }
    
    // fetch('posts/timeline/61c15b9ced4e2a27ca5625fc',{
    //   method:'get',
    //   headers : { 
    //     'Content-Type': 'application/json'
    //    },
    // })
    
  },[username])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {(!username || username === user.username) && <Share />} */}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
