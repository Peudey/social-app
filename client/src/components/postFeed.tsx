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
                    <button className={sort===0?"active":""} onClick={()=>{if(sort!==0)setSort(0)}}>Hot</button>
                    <button className={sort===1?"active":""} onClick={()=>{if(sort!==1)setSort(1)}}>New</button>
                    <button className={sort===2?"active":""} onClick={()=>{if(sort!==2)setSort(2)}}>Day</button>
                    <button className={sort===3?"active":""} onClick={()=>{if(sort!==3)setSort(3)}}>Month</button>
                    <button className={sort===4?"active":""} onClick={()=>{if(sort!==4)setSort(4)}}>Year</button>
                </span>
                {posts.map(({username, body, id, title, score, subreddit, posted, vote}) => (
                    <PostCard username={username} body={body} id={id} title={title} score={score} subreddit={subreddit} posted={posted} vote={vote}/>
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
