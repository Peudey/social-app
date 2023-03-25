import React, { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import axios from 'axios';

function PostVotes(props: {score: number, id: number}) {
    const[score, setScore] = useState(props.score);
    const [vote, setVote] = useState("");

    const upVoteHandler = (event:any) => {
        if(vote==="") {
            setScore(score + 1);
            setVote("up");
            submitVote(1);
        } else if (vote==="up") {
            setScore(score - 1);
            setVote("");
            removeVote();
        } else if (vote==="down") {
            setScore(score + 2);
            setVote("up");
            submitVote(1);
        }
    }

    const downVoteHandler = (event:any) => {
        if(vote==="") {
            setScore(score - 1);
            setVote("down");
            submitVote(0);
        } else if (vote==="down") {
            setScore(score + 1);
            setVote("");
            removeVote();
        } else if (vote==="up") {
            setScore(score - 2);
            setVote("down");
            submitVote(0);
        }
        
    }

    const submitVote = (vote:number) => {
        axios.post("http://localhost:4000/vote/add", {
                postId: props.id,
                commentId: null,
                userId: 1,
                vote: vote,
            }).then ((response) => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    }

    const removeVote = () => {
        axios.post("http://localhost:4000/vote/remove", {
                pid: props.id,
                cid: null,
                uid: 1,
            }).then ((response) => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
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
