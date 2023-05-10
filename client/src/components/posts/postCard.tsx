import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PostVotes from './postVotes';
import postTypes from './types';

const PostCard = (props:postTypes) => {
  let {username, body, id, title, score, subreddit, posted, vote} = props;

    return (
      <div className="postCard">
        <PostVotes score={score} id={id} vote={vote} key={vote}/>
        <div className="postBody">
            <span className='postTop'>
                <Link to={`/${subreddit}`}>{subreddit}</Link>
                <p>posted by </p>
                <Link to={`/user/${username}`}>{username}</Link>
                <p>on {new Date(posted).toLocaleDateString()}</p>
            </span>
            <Link to={`/${subreddit}/post/${id}`}><h2>{title}</h2></Link>
            <p>{body}</p>
        </div>
      </div>
    );
  }
  
  export default PostCard;