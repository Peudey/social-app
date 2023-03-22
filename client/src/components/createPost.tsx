import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CreatePost = () => { 
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [subreddit, setSubreddit] = useState("");

    return(
        <div className="createPost">
            <h2>Create Post</h2>
            <form>
                <input
                    id="title" 
                    type="text"
                    value={title}
                    placeholder="Post Title"
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input 
                    id="subreddit"
                    type="text"
                    value={subreddit}
                    placeholder="Subreddit"
                    onChange={(e)=>setSubreddit(e.target.value)}
                />
                <input 
                    id="body"
                    type="text"
                    value={body}
                    placeholder="Post Body"
                    onChange={(e)=>setBody(e.target.value)}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default CreatePost;