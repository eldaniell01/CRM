import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//mensajes 
const Colors ={
    successful: '#238C2A',
    error: '#A60303',
}

//colores de bordes 
const Border = {
    border: '#187FD9'
}

// colores cursor 
const Cursor ={
    cursor: '#63CAF2'
}

//tipografía 
const Font = {
    text: 'DM Sans',
    size1: '1em',
    size2: '1.6em',
    weight: '500'
}


// formulario de login
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 15px;
    @media(max-width:600px){
        grid-template-columns: 1fr;
    }
    ${props => props.grid === 'true'&& css`
        display: grid;
        flex-direction: column;
        align-items: center;
        grid-template-columns: 1fr 1fr;;
    `}
`;

const TitleBig = styled.label`
    display: block;
    padding: 10px;
    cursor: pointer;
    font-size: ${Font.size2} ;
    
`;

const TitleLittle = styled.label`
    display: block;
    padding: 10px;
    cursor: pointer;
    font-size: ${Font.size1};
    ${props => props.color === 'true'&& css`
        color: white;
    `}
`;

const Groupbutton =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    @media(max-width:600px){
        grid-column: span 1;
    }
`;



// grupos de inputs con validaciones 
const Groupinputs = styled.div`
    position: relative;
    z-index: 90;
`;

const Subgroup = styled.div`
    ${props => props.grid === 'true'&& css`
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-column: span 2;
    `}
`;

const Input = styled.input`
    width: 100%;
    background-color: transparent ;
    font-family: ${Font.text};
    font-size: ${Font.size1};
    font-weight: ${Font.weight};
    border: 0;
    height: 50px;
    line-height: 50px;
    padding: 0 40px 0 10px;
    transition: 0.5s ease all;
    border: 3px solid transparent;
    border-radius: 5px;
    grid-column: span 2;
    &:focus{
        
        outline: none;
        box-shadow: 0px 5px 25px rgba(163,163,163,0.4); 
    }
    ${props => props.valido === 'false' && css`
        border: 3px solid ${Colors.error};
    `}
    ${props => props.valido === 'true' && css`
        border: 3px solid ${Colors.successful};
    `}
    ${props => props.background === 'true'&& css`
        background-color: #FFFFFF;
    `}
    
    
`;

const Alert = styled.p`
    font-size: 12px;
    margin-bottom: 0px;
    color: ${Colors.error};
    display: none;
    transition: 0.5s;

    ${props => props.valido ==='true' && css`
        color: ${Colors.successful}
        
    `}
    ${props => props.valido === 'false' && css`
        color: ${Colors.error};
        display: block;
    `}

`;

// icono
const CheckSuccessful = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    transition: 0.5s;
    display: none;
    ${props=>props.valido === 'true'&&css`
        display: block;
        opacity: 1;
        color: ${Colors.successful};
    `}
    ${props=>props.valido === 'false'&&css`
        display: block;
        opacity: 1;
        color: ${Colors.error};
    `}
`;

// botones
const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 100%;
    font-family: ${Font.text};
    font-size: ${Font.size1};
    background: #F2CDAC;
    font-weight: 400;
    font-size: 1em;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover{
        background:  #F2E3D5;
        box-shadow: 0px 5px 25px rgba(163,163,163,0.6);
    }
`;




//check de validacion de formulario
const CheckValue =  styled.div`

`;


//formulario de registro
const FormR = styled.div`
    background:  rgba(76, 74, 89, .8);
    position: fixed;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

`;



//Navegacion 
const Navs = styled.nav`
    position: absolute;
    width: 100%;
    z-index: 50;
    height: 60px;
    background: #FFFFFF;
    display: grid;
    grid-template-columns: 1fr 60% 1fr;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #000000;
`;

const GroupNav = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    height: 100%;
    text-align: center;
    align-items: center;
    text-decoration: none;
`;

const UserIcon = styled(FontAwesomeIcon)`
    width: 25px;
    height: 25px;
`;


export {Input, TitleBig, TitleLittle, Groupinputs, Form, CheckSuccessful, Button, Alert, FormR, Subgroup, Navs, GroupNav, UserIcon};

