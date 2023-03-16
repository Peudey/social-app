import React from 'react';
import PostVotes from './postVotes';
import { Link, useParams } from 'react-router-dom';
import postTypes from './types';

const Post = () => {
    let {id} = useParams();

    let posts : postTypes[];
    posts = [
        {postAuthor:"author1", postBody:"body1", postId:"123", postTitle:"title1"},
        {postAuthor:"author2", postBody:"body2", postId:"124", postTitle:"title2"},
        {postAuthor:"author3", postBody:"body3", postId:"125", postTitle:"title3"},
        {postAuthor:"author4", postBody:"body4", postId:"126", postTitle:"title4"},
    ]
    if(id!==undefined && posts[parseInt(id)]) {
        let postAuthor = posts[parseInt(id)].postAuthor;
        let postBody = posts[parseInt(id)].postBody;
        let postTitle = posts[parseInt(id)].postTitle;
        return (
            <div className="post">
              <PostVotes />
              <div className="postBody">
                  <span className='postTop'>
                      <Link to="/subreddit">subreddit</Link>
                      <p>posted by </p>
                      <Link to="/author">{postAuthor}</Link>
                  </span>
                  <h2>{postTitle}</h2>
                  <p>{postBody}</p>
              </div>
            </div>
          );
    } else {
        return(<h3>page not found</h3>);
    }
  }
  
  export default Post;