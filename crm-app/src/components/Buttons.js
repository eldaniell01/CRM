import React from 'react'
import { Button } from '../style/styledElements'

export const Buttons = (props) => {
    const registrarUsuario=()=>{
        props.setCloseRegistro(prevState =>!prevState)
        
    }
    return (
        <Button type='button' onClick={registrarUsuario}>{props.text}</Button>
    )
}
