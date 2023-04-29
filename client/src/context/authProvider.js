import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(1);
    const [username, setUsername] = useState("peudey");

    return(
        <AuthContext.Provider value={{userId, username}}>
            {children}
        </AuthContext.Provider>
    )
}