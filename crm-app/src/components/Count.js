import React from 'react'
import { DataContext } from './ThemeContext'

export const Count = () => {
    const {totalCliente} = React.useContext(DataContext)
    return (
        <h2> Hay {totalCliente} clientes </h2>
    )
}
