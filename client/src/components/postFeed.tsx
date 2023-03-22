import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from './postCard';
import postTypes from './types';

const PostFeed = () => {
    const[posts, setPosts] = useState<postTypes[]|undefined>();

    useEffect(()=>{ 
        axios.get(`http://localhost:4000/post/`).then(res => {
            setPosts(res.data);
        });
    }, []);

    if(posts !== undefined) {
        return (
            <div>
                {posts.map(({username, body, id, title, score, subreddit}) => (
                    <PostCard username={username} body={body} id={id} title={title} score={score} subreddit={subreddit}/>
                ))}
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
