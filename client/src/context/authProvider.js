import React, { createContext, useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);
    const[loading, setloading] = useState(true);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        if(user != null) {
            setUserId(user.id);
            setUsername(user.username);
        }
        setloading(false);
    })

    const login = async (params) => {
        let response = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        });
        console.log("login attempt")
        let result = await response.json();
        console.log(response);
        console.log(result);
        if(response.ok){
            setUserId(result.id);
            setUsername(params.username);
            localStorage.setItem("user", JSON.stringify({id: result.id, username: params.username}));
        } else {
            console.log(result);
        }
        window.location.href = '/'
    }

    const logout = async () => {
        console.log("logout attempt");
        setUserId(null);
        setUsername(null);
        localStorage.removeItem("user");
        window.location.href = '/'
    }

    return(
        <AuthContext.Provider value={{userId, username, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}