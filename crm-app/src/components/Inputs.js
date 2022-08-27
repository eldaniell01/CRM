import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Alert, CheckSuccessful, Groupinputs, Input, TitleLittle, Subgroup } from '../style/styledElements';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { DataContext } from './ThemeContext';

export const Inputs = (props) => {

const eventListener=(e)=>{
    changeState({...props.state, campo: e.target.value});
}

const validationText = ()=>{
    if(regularEx){
        if(regularEx.test(props.state.campo)){
            changeState({...props.state, valido:'true'})
        }else{
            changeState({...props.state, valido:'false'})
        }
    }
}
return (
    <Subgroup grid ={props.grid}>
        <TitleLittle color={props.color}>{props.Title}</TitleLittle>
        <Groupinputs background={props.background}>
            
            <Input
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                value={props.state.campo}
                onChange={eventListener}
                onKeyUp={validationText}
                onBlur={validationText}
                valido={props.state.valido}
                background={props.background}
            />
            <CheckSuccessful
                icon={props.state.valido ==='true'?icon:faCircleXmark}
                valido={props.state.valido}
            />
        </Groupinputs>
        <Alert valido={props.state.valido}>{props.error}</Alert>
    </Subgroup>
    
  )
}
