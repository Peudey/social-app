import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);
    const [loading, setloading] = useState(true);

    //Attempts to fetch 'user' from local storage, sets state using those values. Sets loading to false after fetching data
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        if(user != null) {
            setUserId(user.id);
            setUsername(user.username);
        }
        setloading(false);
    })

    //Call login on database. Stores information in localstorage as 'user'
    //@TODO Implement JWT 
    const login = async (params) => {
        let response = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        });
        let result = await response.json();
        if(response.ok){
            setUserId(result.id);
            setUsername(params.username);
            localStorage.setItem("user", JSON.stringify({id: result.id, username: params.username}));
        } else {
            console.log(result);
        }
        window.location.href = '/'
    }

    //Reset user info to null.
    //@TODO Implement JWT and release token 
    const logout = async () => {
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