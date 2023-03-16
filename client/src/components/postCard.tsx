import React, { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

function Post() {
    const [voteCount, setVoteCount] = useState(1);
    const [vote, setVote] = useState("");

    const upVoteHandler = (event:any) => {
        if(vote==="") {
            setVoteCount(voteCount+1);
            setVote("up");
        } else if (vote==="up") {
            setVoteCount(voteCount-1);
            setVote("");
        } else if (vote==="down") {
            setVoteCount(voteCount+2);
            setVote("up");
        }
    }

    const downVoteHandler = (event:any) => {
        if(vote==="") {
            setVoteCount(voteCount-1);
            setVote("down");
        } else if (vote==="down") {
            setVoteCount(voteCount+1);
            setVote("");
        } else if (vote==="up") {
            setVoteCount(voteCount-2);
            setVote("down");
        }
    }

    return (
      <div className="postCard">
        <div className="votes">
            {vote!=="up"?
                <BiUpArrowAlt className="vote" size={40} onClick={upVoteHandler}/>:
                <BiUpArrowAlt className="vote" id="upVote" size={40} onClick={upVoteHandler}/>
            }
            <p>{voteCount}</p>
            {vote!=="down"?
                <BiDownArrowAlt className="vote" size={40} onClick={downVoteHandler}/>:
                <BiDownArrowAlt className="vote" id="downVote" size={40} onClick={downVoteHandler}/>
            }
        </div>
        <div className="postBody">
            <span className='postTop'>
                <a href="/">subreddit</a>
                <p>posted by </p>
                <a href="/">author</a>
            </span>
            <h2>post title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
  
  export default Post;