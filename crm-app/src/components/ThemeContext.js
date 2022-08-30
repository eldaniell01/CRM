import React, {useState, useContext} from "react";
import { useHooks } from "./useHooks";

// componente encargado de enviar props a otros compoentes 
const DataContext = React.createContext()
function Provider (props){
    const{
        item: newCliente,
        saveCliente: saveC,
        loading,
        error
    }=useHooks('cliente1',[]);
    
    const [firtsname, changefirtsName] =useState({campo: '', valido: null});
    const [lastname, changeLastname] =useState({campo: '', valido: null});
    const [address, changeAddress] =useState({campo: '', valido: null});
    const [phone, changePhone] =useState({campo: '', valido: null});
    const [email, changeEmail] =useState({campo: '', valido: null});
    const [email2, changeEmail2] =useState({campo: '', valido: null});
    const [pass, changePass] =useState({campo: '', valido: null});
    const [pass2, changePass2] =useState({campo: '', valido: null});
    const [validation, changeValidation] =useState(false);
    const [formvalidation, changeFormvalidation] = useState(null);
    const [openRegistro, setCloseRegistro] = useState(false);
    const [input, setInput] = useState({campo: '', valido: null});
    const [stateSearch, setSearch] = React.useState('');
    const totalCliente = newCliente.length;
    
      
    var searchCliente =[];
    if(!stateSearch.length>0){
        searchCliente = newCliente;
    }else{
        searchCliente = newCliente.filter(cliente=>{
            const nombre = cliente.nombre.toLowerCase();
            const searchC = stateSearch.toLowerCase();
            return nombre.includes(searchC);
        });
    }
    //validación de sesión 
    const [user, setUser] = useState(true);
    const signIn = ()=>{
        setUser(true);
    }

    const signOut=()=>{
        setUser(false);
    }
    
    //Expresiones regulares 
    const regularExpr = {
        user: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
        password: /^.{10,25}$/,
        email: /^[a-z0-9_.+-]+@[gmail]+\.[com.]+$/,
        numPhone: /^\d{8,14}$/,
        search: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    }

    
    const onsumit=(e)=>{
        e.preventDefault(); 
    }

    const eventListener=(e, campo1)=>{
        setInput({...campo1, campo: e.target.value})
    }

    const todos=[
        {id: '1', nombre: 'Juan', apellido: 'perez', telefono: '12345678'}
      ];

    return (
        <DataContext.Provider value={{
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
            signOut,
            eventListener,
            input, 
            setInput,
            regularExpr,
            todos,
            searchCliente,
            totalCliente,
            setSearch,
            stateSearch,
            loading,
            error
        }}>
            {props.children} 
        </DataContext.Provider>
    )
}

export {DataContext, Provider}