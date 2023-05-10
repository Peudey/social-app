import React, { useEffect, useState } from 'react';
import PostVotes from './postVotes';
import Comment from '../comments/comment';
import { Link, useParams } from 'react-router-dom';
import commentTypes from '../comments/types';

const Post = () => {
    const[post, setPost] = useState<any|undefined>();
    const[comments, setComments] = useState<commentTypes[]>();
    let {id} = useParams();

    useEffect(()=> { 
        getPost();
        getComments();
    }, []);

    async function getPost() {
        let res = await fetch(`http://localhost:4000/post/${id}`);
        let json = await res.json();
        setPost(json[0]);
    }

    async function getComments() {
        let res = await fetch(`http://localhost:4000/comment/post/${id}`);
        let json = await res.json();
        if(json) {
            let commentsWithChildren = json.map((comment:commentTypes) => ({
                ...comment,
                children: []
            }));
            commentsWithChildren.forEach((element:commentTypes) => {
                element.children = commentsWithChildren.filter((child:commentTypes) => child.cid && child.cid == element.id)
            });
            json = commentsWithChildren.filter((element:commentTypes) => element.cid === null);
        }
        setComments(json);
    }

    let commentFormat;
    if(comments && comments.length > 0) {
        commentFormat = comments.map(({username, body, id, pid, cid, children}) => (
            <Comment body={body} id={id} username={username} pid={pid} cid={cid} children={children} key={id}/>
        ))
    } else {
        commentFormat = <div className='comment'><p>Be the first to comment!</p></div>
    }

    if(id!==undefined && post !== undefined) {
        return (
            <div className="post">
                <div className='postContent'>
                    <PostVotes score={post.score} vote={post.vote} id={parseInt(id)}/>
                    <div className="postBody">
                        <span className='postTop'>
                            <Link to={`/${post.subreddit}`}>{post.subreddit}</Link>
                            <p>posted by </p>
                            <Link to={`/user/${post.username}`}>{post.username}</Link>
                        </span>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
              <div className='comments'>
                {commentFormat}
            </div>
            </div>
          );
    } else {
        return(<h3>page not found</h3>);
    }
  }
  
  export default Post;