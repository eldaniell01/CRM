import React from 'react'
import { Dashboard } from './Dashboard'
import { Inputs } from './Inputs'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { DataContext } from './ThemeContext';
import { PagesUser } from '../style/styledElements';
export const Clientes = (props) => {
  const {input, setInput, regularExpr} = React.useContext(DataContext)
  return (
    <>
      <PagesUser>
        <Inputs
          Title ='Buscar Cliente'
          state={input}
          changeState={setInput}
          id='search'
          type='text'
          placeholder='Buscar Cliente'
          icon={faSearch}
          error="El campo esta vacio o es incorrecto"
          regularEx={regularExpr.search}
        />
      </PagesUser>
    </>
    
  )
}
