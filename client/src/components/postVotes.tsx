import React, { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

function PostVotes(props: {score: number}) {
    let {score} = props;
    const [vote, setVote] = useState("");

    const upVoteHandler = (event:any) => {
        if(vote==="") {
            score += 1;
            setVote("up");
        } else if (vote==="up") {
            score -= 1;
            setVote("");
        } else if (vote==="down") {
            score += 2;
            setVote("up");
        }
    }

    const downVoteHandler = (event:any) => {
        if(vote==="") {
            score -= 1;
            setVote("down");
        } else if (vote==="down") {
            score += 1;
            setVote("");
        } else if (vote==="up") {
            score -= 2;
            setVote("down");
        }
    }
  return (
    <div className="votes">
        {vote!=="up"?
            <BiUpArrowAlt className="vote" size={40} onClick={upVoteHandler}/>:
            <BiUpArrowAlt className="vote" id="upVote" size={40} onClick={upVoteHandler}/>
        }
        <p>{score}</p>
        {vote!=="down"?
            <BiDownArrowAlt className="vote" size={40} onClick={downVoteHandler}/>:
            <BiDownArrowAlt className="vote" id="downVote" size={40} onClick={downVoteHandler}/>
        }
    </div>
  );
}

export default PostVotes;
