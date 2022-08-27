import React from 'react'
import { Button } from '../style/styledElements'

export const Buttons = (props) => {
    const registrarUsuario=()=>{
        props.setCloseRegistro(prevState =>!prevState)
        console.log('haciendo click')
    }
    return (
        <Button type='button' onClick={registrarUsuario}>{props.text}</Button>
    )
}
