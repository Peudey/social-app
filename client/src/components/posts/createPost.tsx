import React, {useState} from 'react';
import axios from 'axios';

const CreatePost = () => { 
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [subreddit, setSubreddit] = useState("");


    const handleSubmit = async (e:any) => {
        e.preventDefault();

        axios.post("http://localhost:4000/post/submit", {
                title: title,
                body: body,
                sid: subreddit,
                aid: 1,
            }
        ).then ((response) => {
            console.log(response);
            if(response.status === 200) {
                setTitle("");
                setBody(response.data);
                setSubreddit("");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }


    return(
        <div className="createPost">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
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