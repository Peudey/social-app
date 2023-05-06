import React, { useEffect, useState } from 'react';
import commentTypes from './types';
import { Link, useParams } from 'react-router-dom';

const Comment = (props:commentTypes) => {
    const {username, body} = props;
        return (
            <div className="comment">
              <div className="commentBody">
                  <span className='commentTop'>
                      <p>posted by </p>
                      <Link to={`/user/${username}`}>{username}</Link>
                  </span>
                  <p>{body}</p>
              </div>
            </div>
          );
  }
  
  export default Comment;