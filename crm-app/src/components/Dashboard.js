import React from 'react'
import { NavPages } from './NavPages'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { Clientes } from './Clientes'
import { Proyectos } from './Proyectos';
import { Reuniones } from './Reuniones';
import { Contactos } from './Contactos';
import { Button, GroupNav, UserIcon } from '../style/styledElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

// rutas 
export const Dashboard = () => {
  
  return (
    <>
    {/* navegacion de rutas */}
      <NavPages>
        <div>
          <UserIcon icon={faUser} />
        </div>
        <GroupNav>
          <ul>
            <li>
              <Link to="clientes">Clientes</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="proyectos">Proyectos</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="reuniones">Reuniones</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="contactos">Contactos</Link>
            </li>
          </ul>
        </GroupNav>
        <ul>
          <li>
            <Link to="/">Cerrar Sesion</Link>
          </li>
        </ul> 
      </NavPages>
      
      <Routes>
        <Route path="clientes" element={<Clientes></Clientes>}/>
        <Route path="proyectos" element={<Proyectos></Proyectos>}/>
        <Route path="reuniones" element={<Reuniones></Reuniones>}/>
        <Route path="contactos" element={<Contactos></Contactos>}/>
      </Routes>
    </>

  )
}
