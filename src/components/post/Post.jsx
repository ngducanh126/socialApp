import "./post.css";
import { MoreVert } from '@mui/icons-material';
import { Users } from "../../dummyData";
import { useState,useEffect } from "react";
import axios from "axios";
import {format} from'timeago.js'
import {Link} from 'react-router-dom'
export default function Post({ post }) {

  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user,setUser]=useState({})
  const PF=process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(()=>{
    fetch(`/users/${post.userId}`,{
      method:'get',
      headers : { 
        'Content-Type': 'application/json'
       },
    })
    .then((res)=>res.json())
    .then(res=>setUser(res))
    
    
  },[post.userId])

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: '61c15b9ced4e2a27ca5625fc' });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
 
  // const likeHandler = () => {
    
  //   const data={userId:'61c15b9ced4e2a27ca5625fc'}
  //   fetch(`posts/${post._id}/like`,{
  //     method:'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //   })
  // };
  // const viewPost=()=>{
  //   fetch(`posts/${post._id}`)
  //   .then(res=>res.json())
  //   .then(res=>console.log(res))
  // }
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
            <img
              className="postProfileImg"
              // src={PF+Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              src={user.profilePicture || PF+'person/noAvatar.png'}
              alt=""
            />
            </Link>

            <span className="postUsername">
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
              {user.username}

            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
