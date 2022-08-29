import React from 'react';
import ReactDOM from 'react-dom';
import { FormR } from '../style/styledElements';

// componente de registro

export const ModalR = ({children}) => {
  return ReactDOM.createPortal(
    <FormR>
        {children}
    </FormR>,
    document.getElementById('signIn')
  );
}
