import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from './ThemeContext';

// componente de autenticación
export const Auth = ({children}) => {
    const {user} = useContext(DataContext);
    if(!user){
        return <Navigate to="/"/>;
    }
    return children
}
