import React from "react";

const Login = () => {
    return (
        <div className="loginContainer">
            <form>
                <label>
                    <p>username</p>
                    <input 
                        type='text'
                        id='username'
                    />
                </label>
                <label>
                    <p>password</p>
                    <input 
                        type='text'
                        id='password'
                    />
                </label>
            </form>
        </div>
    )
}

export default Login;