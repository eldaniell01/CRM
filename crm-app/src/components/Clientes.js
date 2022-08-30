import React from 'react'
import { Dashboard } from './Dashboard'
import { Inputs } from './Inputs'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { DataContext } from './ThemeContext';
import { PagesUser } from '../style/styledElements';
import { List } from './List';
import { Item } from './Item';
import { SearchCliente } from './Search';
export const Clientes = (props) => {
  const {loading, error, searchCliente, todos} = React.useContext(DataContext);


  return (
    <>
      <PagesUser>
        <SearchCliente
           Title ='Buscar Cliente'
           id='search'
           type='text'
           placeholder='Buscar Cliente'
           icon={faSearch}
        />
      
        
        <List>
          {error &&<p>hay un error...</p>}
          {loading &&<p>se esta cargando</p>}
          {searchCliente.map(client=>(
            <Item
              key={client.id}
              clave={client.id}
              nombre={client.nombre}
              apellido={client.apellido}
            />

          ))}
        </List>
      </PagesUser>
    </>
    
  )
}
