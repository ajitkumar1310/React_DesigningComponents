import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children, initialLoggedInuser }) => {
    const [loggedInUser, setLoggedInUser] = useState(initialLoggedInuser);
    return (
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <div>
                {children}
            </div>
        </AuthContext.Provider>
    )
}

export { AuthProvider };