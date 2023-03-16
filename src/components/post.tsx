import React, { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

function Post() {
    const [voteCount, setVoteCount] = useState(1);
    const [vote, setVote] = useState("");

    const upVoteHandler = (event:any) => {
        if(vote==="" || vote==="down") {
            setVoteCount(voteCount+1);
            setVote("up");
        } else if (vote==="up") {
            setVoteCount(voteCount-1);
            setVote("");
        }
    }

    const downVoteHandler = (event:any) => {
        if(vote==="" || vote==="up") {
            setVoteCount(voteCount-1);
            setVote("down");
        } else if (vote==="down") {
            setVoteCount(voteCount+1);
            setVote("");
        }
    }

    return (
      <div className="post">
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
            <h2>post title</h2>
            <p>post body</p>
        </div>
      </div>
    );
  }
  
  export default Post;