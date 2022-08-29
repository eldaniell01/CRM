import React from 'react';
import { Button, Form, TitleBig } from '../style/styledElements';
import { Inputs } from './Inputs';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { DataContext, Provider } from './ThemeContext';
import { ModalR } from './ModalR';
import { Buttons } from './Buttons';
import { Link } from "react-router-dom";


// componente login
export const AppUI = () => {
  const {
    onsumit,
    regularExpr,
    pass,
    changePass,
    firtsname,
    changefirtsName,
    lastname,
    changeLastname,
    email,
    changeEmail,
    email2,
    changeEmail2,
    pass2,
    changePass2,
    openRegistro,
    setCloseRegistro,
    user,
    signIn,
    signOut
  } = React.useContext(DataContext);

  
  return (
    <main>
        <TitleBig>
        <center>INICIAR SESIÓN</center>
        </TitleBig>
        <Form action="" onSubmit={onsumit}>
            <Inputs
                Title ='Usuario o Email'
                state={email}
                changeState={changeEmail}
                id='usuario'
                type='text'
                placeholder='example@example.com'
                icon={faCircleCheck}
                error="El campo esta vacio o es incorrecto"
                regularEx={regularExpr.email}
            />

            <Inputs
                Title ='Contraseña'
                state={pass}
                changeState={changePass}
                id='password'
                type='password'
                placeholder='********'
                icon={faCircleCheck}
                error="El campo esta vacio o es incorrecto"
                regularEx={regularExpr.password}
            />
            {!!openRegistro &&(
              <ModalR>
              <Form grid='true' onSubmit={onsumit}>
              <Inputs
                  Title ='Nombre'
                  state={firtsname}
                  changeState={changefirtsName}
                  id='firtname'
                  type='text'
                  placeholder='example@example.com'
                  icon={faCircleCheck}
                  error="El campo esta vacio o es incorrecto"
                  regularEx={regularExpr.user}
                  background='true'
                  color='true'
                />
                <Inputs
                  Title ='Apellido'
                  state={lastname}
                  changeState={changeLastname}
                  id='lastname'
                  type='text'
                  placeholder='example@example.com'
                  icon={faCircleCheck}
                  error="El campo esta vacio o es incorrecto"
                  regularEx={regularExpr.user}
                  background='true'
                  color='true'
                />
                <Inputs
                  Title ='Email'
                  state={email2}
                  changeState={changeEmail2}
                  id='email'
                  type='text'
                  placeholder='example@example.com'
                  icon={faCircleCheck}
                  error="El campo esta vacio o es incorrecto"
                  regularEx={regularExpr.email}
                  background='true'
                  color='true'
                  grid='true'
                />
                <Inputs
                  Title ='Contraseña'
                  state={pass}
                  changeState={changePass}
                  id='password1'
                  type='password'
                  placeholder='*****'
                  icon={faCircleCheck}
                  error="El campo esta vacio o es incorrecto"
                  regularEx={regularExpr.password}
                  background='true'
                  color='true'
                />
                <Inputs
                  Title ='Contraseña'
                  state={pass2}
                  changeState={changePass2}
                  id='password2'
                  type='password'
                  placeholder='*****'
                  icon={faCircleCheck}
                  error="El campo esta vacio o es incorrecto"
                  regularEx={regularExpr.password}
                  background='true'
                  color='true'
                />

                <Buttons
                  setCloseRegistro={setCloseRegistro}
                  text="Registrarse"
                />
                <Buttons
                  setCloseRegistro={setCloseRegistro}
                  text="Cancelar"
                />
              </Form>
            </ModalR>
            )}
            {user?(
                <Link to="/home">
                  <Button>Iniciar Sesión</Button>
                </Link>
              ):(
                <Link to="/">
                  <Button>Iniciar Sesión</Button>
                </Link>
              )
            }
            
            <Buttons
              setCloseRegistro={setCloseRegistro}
              text="Registrarse"
            />

        </Form>
    </main>
  )
}

