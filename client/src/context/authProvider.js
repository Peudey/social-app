import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [username, setUsername] = useState(null);

    return(
        <AuthContext.Provider value={{userId, username}}>
            {children}
        </AuthContext.Provider>
    )
}