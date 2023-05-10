import React, { useEffect, useState } from 'react';
import commentTypes from './types';
import { Link, useParams } from 'react-router-dom';

const Comment = (props:commentTypes) => {
    const[showChildren, setShown] = useState(true);
    const {username, id, pid, cid, body, children} = props;

    const clickhandler = () => {
        setShown(!showChildren);
    }

    return (
        <div className="parentComment">
            <div className="comment">
                <div className="commentBody">
                    <span className='commentTop' onClick={clickhandler}>
                        <p>posted by </p>
                        <Link to={`/user/${username}`}>{username}</Link>
                    </span>
                    <p className={showChildren?'shown':'hidden'}>{body}</p>
                </div>
            </div>
            <ul className={showChildren?'shown':'hidden'}>
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