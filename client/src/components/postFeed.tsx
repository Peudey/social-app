import React from 'react';
import PostCard from './postCard';
import postTypes from './types';

function PostFeed() {
    let posts : postTypes[];
    posts = [
        {postAuthor:"author1", postBody:"body1", postId:"0", postTitle:"title1"},
        {postAuthor:"author2", postBody:"body2", postId:"1", postTitle:"title2"},
        {postAuthor:"author3", postBody:"body3", postId:"2", postTitle:"title3"},
        {postAuthor:"author4", postBody:"body4", postId:"3", postTitle:"title4"},
      ]

  return (
    <div>
        {posts.map(({postAuthor, postBody, postId, postTitle}) => (
            <PostCard postAuthor={postAuthor} postBody={postBody} postId={postId} postTitle={postTitle} />
        ))}
    </div>
  );
}

export default PostFeed;
