import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from './postCard';
import postTypes from './types';

const PostFeed = () => {
    const[posts, setPosts] = useState<postTypes[]|undefined>();
    const[page, setPage] = useState(0);

    useEffect(()=>{ 
        populateFeed();
    }, [page]);

    const populateFeed = () => {
        axios.get(`http://localhost:4000/post/page/${page}`).then(res => {
            setPosts(res.data);
        });
    }

    const nextHandler = () => {
        setPage(page+1);
    }

    const prevHandler = () => {
        if (page !== 0) {
            setPage(page-1);
        }
    }

    if(posts !== undefined) {
        return (
            <div>
                {posts.map(({username, body, id, title, score, subreddit}) => (
                    <PostCard username={username} body={body} id={id} title={title} score={score} subreddit={subreddit}/>
                ))}
                <button onClick={(nextHandler)}>next</button>
                <button onClick={(prevHandler)}>prev</button>
            </div>
        );
    } else {
        return(
        <div>
            Unable to load feed
        </div>
        )
    }
}

export default PostFeed;
