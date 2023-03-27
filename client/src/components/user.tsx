import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    let {username} = useParams();

    return (
        <div>
            <h2>{username}</h2>
        </div>
    )
}
export default User;