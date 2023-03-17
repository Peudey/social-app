import React from 'react';
import { Link } from 'react-router-dom';
import PostVotes from './postVotes';
import postTypes from './types';

const PostCard = (props:postTypes) => {
    const {postBody, postTitle, postAuthor, postId} = props;
    
    return (
      <div className="postCard">
        <PostVotes score={1}/>
        <div className="postBody">
            <span className='postTop'>
                <Link to="/subreddit">subreddit</Link>
                <p>posted by </p>
                <Link to="/author">{postAuthor}</Link>
            </span>
            <Link to={`/subreddit/post/${postId}`}>{postTitle}</Link>
            <p>{postBody}</p>
        </div>
      </div>
    );
  }
  
  export default PostCard;