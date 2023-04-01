import React, {useState} from 'react';

const CreatePost = () => { 
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [subreddit, setSubreddit] = useState("");


    const handleSubmit = async (e:any) => {
        e.preventDefault();

        let post = {
            title: title,
            body: body,
            sid: subreddit,
            aid: 1,
        }

        let response = await fetch("http://localhost:4000/post/submit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        });

        let result = await response.json();
        console.log(response);
        console.log(result);

        if(response.ok) {
            setTitle("");
            setBody(result);
            setSubreddit("");
        } else {
            console.log(result);
        }
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