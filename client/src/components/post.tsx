import React from 'react';
import PostVotes from './postVotes';
import { Link } from 'react-router-dom';

function Post() {
    return (
      <div className="post">
        <PostVotes />
        <div className="postBody">
            <span className='postTop'>
                <Link to="/subreddit">subreddit</Link>
                <p>posted by </p>
                <Link to="/author">subreddit</Link>
            </span>
            <Link to="/subreddit/post">Post Title</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
  
  export default Post;