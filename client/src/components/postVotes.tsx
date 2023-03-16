import React, { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

function PostVotes() {
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
  );
}

export default PostVotes;
