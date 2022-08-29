import React from 'react'
import { Button } from '../style/styledElements'

// componente de botones

export const Buttons = (props) => {
    const registrarUsuario=()=>{
        props.setCloseRegistro(prevState =>!prevState)
        
    }
    return (
        <Button type='button' onClick={registrarUsuario}>{props.text}</Button>
    )
}
