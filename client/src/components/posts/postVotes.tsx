import React, { useState, useContext } from 'react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { AuthContext } from '../../context/authProvider';

function PostVotes(props: {score: number, id: number, vote:number}) {
    const[score, setScore] = useState(props.score);
    const [postVote, setVote] = useState<number|null>(props.vote);
    const {userId} = useContext(AuthContext);
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

    const submitVote = async (vote:number) => {
        let voteBody = {
            postId: props.id,
            userId: userId,
            vote: vote,
        }

        let response = await fetch("http://localhost:4000/vote/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(voteBody)
        });
        let result = await response.json();
        console.log(result);
    }

    const removeVote = async () => {
        let voteBody = {
            postId: props.id,
            userId: userId,
        }

        let response = await fetch("http://localhost:4000/vote/remove", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(voteBody)
        });
        let result = await response.json();
        console.log(result);
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
