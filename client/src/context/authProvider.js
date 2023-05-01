import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("user")).id || null);
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem("user")).username || null);

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
    }

    return(
        <AuthContext.Provider value={{userId, username, login}}>
            {children}
        </AuthContext.Provider>
    )
}