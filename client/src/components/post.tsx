import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostVotes from './postVotes';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
    const[post, setPost] = useState<any|undefined>();
    let {id} = useParams();

    useEffect(()=>{ 
        axios.get(`http://localhost:4000/post/${id}`).then(res => {
            setPost(res.data[0]);
        });
    }, []);

    if(id!==undefined && post !== undefined) {
        return (
            <div className="post">
              <PostVotes score={post.score} id={parseInt(id)}/>
              <div className="postBody">
                  <span className='postTop'>
                      <Link to={`/${post.subreddit}`}>{post.subreddit}</Link>
                      <p>posted by </p>
                      <Link to="/author">{post.username}</Link>
                  </span>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
              </div>
            </div>
          );
    } else {
        return(<h3>page not found</h3>);
    }
  }
  
  export default Post;