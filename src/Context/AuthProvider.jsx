// AuthProvider.js
import { useState, useEffect } from 'react';
import { get_localstorage, set_localstorage } from '../Utilities/localStorage';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        set_localstorage();
        const curr_data = get_localstorage();
        // console.log(curr_data);
        setUserData(curr_data);
    }, []);

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};