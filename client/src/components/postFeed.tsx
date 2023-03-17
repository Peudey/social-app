import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from './postCard';
import postTypes from './types';

const PostFeed = () => {
    const[posts, setPosts] = useState<postTypes[]|undefined>();

    useEffect(()=>{ 
        axios.get(`http://localhost:4000/api/getposts`).then(res => {
            setPosts(res.data);
        });
    }, []);

    if(posts !== undefined) {
        return (
            <div>
                {posts.map(({author, body, id, title, score}) => (
                    <PostCard author={author} body={body} id={id} title={title} score={score}/>
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
