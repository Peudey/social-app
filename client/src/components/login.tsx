import React, {useState, useContext} from "react";
import { AuthContext } from '../context/authProvider';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const{login} = useContext(AuthContext);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        login({username:username, password:password})
    }

    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>username</p>
                    <input 
                        type='text'
                        id='username'
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </label>
                <label>
                    <p>password</p>
                    <input 
                        type='text'
                        id='password'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Login;