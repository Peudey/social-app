import React from 'react';
import { Link } from 'react-router-dom';
import PostVotes from './postVotes';
import postTypes from './types';

const PostCard = (props:postTypes) => {
    const {body, title, author, id, score} = props;

    return (
      <div className="postCard">
        <PostVotes score={score}/>
        <div className="postBody">
            <span className='postTop'>
                <Link to="/subreddit">subreddit</Link>
                <p>posted by </p>
                <Link to="/author">{author}</Link>
            </span>
            <Link to={`/subreddit/post/${id}`}>{title}</Link>
            <p>{body}</p>
        </div>
      </div>
    );
  }
  
  export default PostCard;