import React from 'react'
import { Lista } from '../style/styledElements'
import { DataContext } from './ThemeContext'

export const Item = (props) => {
  
  return (
      <li>
          <Lista>
              <p>{props.clave}</p>
              <p>{props.nombre}</p>
              <p>{props.apellido}</p>
          </Lista>
      </li>
  )
}
