import React, { useEffect, useState } from 'react';
import commentTypes from './types';
import { Link, useParams } from 'react-router-dom';

const Comment = (props:commentTypes) => {
    const {username, id, pid, cid, body, children} = props;
        return (
            <div className="parentComment">
                <div className="comment">
                    <div className="commentBody">
                        <span className='commentTop'>
                            <p>posted by </p>
                            <Link to={`/user/${username}`}>{username}</Link>
                        </span>
                        <p>{body}</p>
                    </div>
                </div>
                <ul>
                    {children.map(({username, body, id, pid, cid, children}) => (
                            <li key={id}>
                                <Comment body={body} id={id} username={username} pid={pid} cid={cid} children={children}/>
                            </li>
                    ))}
                </ul>
            </div>
          );
  }
  
  export default Comment;