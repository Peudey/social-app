import React, { useState } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import axios from 'axios';

function PostVotes(props: {score: number, id: number, vote:number}) {
    const[score, setScore] = useState(props.score);
    const [postVote, setVote] = useState<number|null>(props.vote);
    console.log(postVote);

    const upVoteHandler = (event:any) => {
        if(postVote===null) {
            setScore(score + 1);
            setVote(1);
            submitVote(1);
        } else if (postVote===1) {
            setScore(score - 1);
            setVote(null);
            removeVote();
        } else if (postVote===0) {
            setScore(score + 2);
            setVote(1);
            submitVote(1);
        }
    }

    const downVoteHandler = (event:any) => {
        if(postVote===null) {
            setScore(score - 1);
            setVote(0);
            submitVote(0);
        } else if (postVote===0) {
            setScore(score + 1);
            setVote(null);
            removeVote();
        } else if (postVote===1) {
            setScore(score - 2);
            setVote(0);
            submitVote(0);
        }
        
    }

    const submitVote = (vote:number) => {
        axios.post("http://localhost:4000/vote/add", {
                postId: props.id,
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
        {postVote===1?
            <BiUpArrowAlt className="vote" id="upVote" size={40} onClick={upVoteHandler}/>:
            <BiUpArrowAlt className="vote" size={40} onClick={upVoteHandler}/>
        }
        <p>{score}</p>
        {postVote===0?
            <BiDownArrowAlt className="vote" id="downVote" size={40} onClick={downVoteHandler}/>:
            <BiDownArrowAlt className="vote" size={40} onClick={downVoteHandler}/>
        }
    </div>
  );
}

export default PostVotes;
