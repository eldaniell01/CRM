import React, {useState, useContext} from "react";

// componente encargado de enviar props a otros compoentes 
const DataContext = React.createContext()
function Provider (props){
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
        numPhone: /^\d{8,14}$/

    }

    
    const onsumit=(e)=>{
        e.preventDefault();
        
    }
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
            signOut
            
        }}>
            {props.children} 
        </DataContext.Provider>
    )
}

export {DataContext, Provider}