import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from './postCard';
import postTypes from './types';

const PostFeed = () => {
    const[posts, setPosts] = useState<postTypes[]|undefined>();
    const[page, setPage] = useState(0);
    const[sort, setSort] = useState(0);

    useEffect(()=>{ 
        populateFeed();
    }, [page, sort]);

    //takes in query 0 hot, 1 new, 2 day, 3 month, 4 year
    const populateFeed = () => {
        axios.get(`http://localhost:4000/post/${sort}/${page}`).then(res => {
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
                <span className='feedSort'>
                    <button onClick={()=>{if(sort!==0)setSort(0)}}>hot</button>
                    <button onClick={()=>{if(sort!==1)setSort(1)}}>new</button>
                    <button onClick={()=>{if(sort!==2)setSort(2)}}>day</button>
                    <button onClick={()=>{if(sort!==3)setSort(3)}}>month</button>
                    <button onClick={()=>{if(sort!==4)setSort(4)}}>year</button>
                </span>
                {posts.map(({username, body, id, title, score, subreddit, posted}) => (
                    <PostCard username={username} body={body} id={id} title={title} score={score} subreddit={subreddit} posted={posted}/>
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
