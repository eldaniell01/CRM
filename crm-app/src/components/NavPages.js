import React from 'react'

import { NavLink, Link, Routes, Route } from "react-router-dom";
import { Navs } from '../style/styledElements';
import { Clientes } from './Clientes';
import { Dashboard } from './Dashboard';
export const NavPages = ({children}) => {
  return (
    <>
    <Navs>
        {children}
    </Navs>
    
    </>
    
    
  )
}
