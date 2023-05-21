import React, {useState, useEffect, useContext} from 'react';
import PostCard from './postCard';
import postTypes from './types';
import { AuthContext } from '../../context/authProvider';

const PostFeed = () => {
    const[posts, setPosts] = useState<postTypes[]|undefined>();
    const[page, setPage] = useState(0);
    const[sort, setSort] = useState(0);
    let {userId, loading} = useContext(AuthContext);

    useEffect(()=> { 
        if(!loading) {populateFeed();}
    }, [page, sort, userId]);

    //takes in query 0 hot, 1 new, 2 day, 3 month, 4 year
    async function populateFeed() {
        let res = await fetch(`http://localhost:4000/post/${sort}/${page}/${userId}`);
        let json = await res.json();
        setPosts([...json]);
        console.log(json, userId);
    }
    
    const nextHandler = () => {
        setPage(page+1);
    }

    const prevHandler = () => {
        if (page !== 0) {
            setPage(page-1);
        }
    }

    let postFeed = posts?.map(({username, body, id, title, score, subreddit, posted, vote}) => (
        <PostCard username={username} body={body} id={id} title={title} score={score} subreddit={subreddit} posted={posted} vote={vote} key={id}/>
    ))
    if(loading){return(<p>loading</p>)}
    if(posts !== undefined && !loading) {
        return (
            <div className='postFeed'>
                <span className='feedSort'>
                    <button className={sort===0?"active":""} onClick={()=>{if(sort!==0)setSort(0)}}>Hot</button>
                    <button className={sort===1?"active":""} onClick={()=>{if(sort!==1)setSort(1)}}>New</button>
                    <button className={sort===2?"active":""} onClick={()=>{if(sort!==2)setSort(2)}}>Day</button>
                    <button className={sort===3?"active":""} onClick={()=>{if(sort!==3)setSort(3)}}>Month</button>
                    <button className={sort===4?"active":""} onClick={()=>{if(sort!==4)setSort(4)}}>Year</button>
                </span>
                {postFeed}
                {posts.length===10 && <button onClick={(nextHandler)}>next</button>}
                {page!==0 && <button onClick={(prevHandler)}>prev</button>}
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
