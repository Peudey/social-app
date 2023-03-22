import React from 'react';
import { Link } from 'react-router-dom';
import PostVotes from './postVotes';
import postTypes from './types';

const PostCard = (props:postTypes) => {
    const {body, title, username, id, score, subreddit} = props;

    return (
      <div className="postCard">
        <PostVotes score={score}/>
        <div className="postBody">
            <span className='postTop'>
                <Link to={`/${subreddit}`}>{subreddit}</Link>
                <p>posted by </p>
                <Link to="/author">{username}</Link>
            </span>
            <Link to={`/${subreddit}/post/${id}`}><h2>{title}</h2></Link>
            <p>{body}</p>
        </div>
      </div>
    );
  }
  
  export default PostCard;