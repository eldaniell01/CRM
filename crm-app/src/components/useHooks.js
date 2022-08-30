import React from 'react'

export const useHooks = (itemName, initialValue) => {
    const [loading, setLoading]=React.useState(true);
    const [error, setError]= React.useState(false);
    const [item, setItem]=React.useState(initialValue);
    React.useEffect(()=>{
        setTimeout(()=>{
            try{
                /*
                    se carga el localStorage
                    luego se revisa si existe un localStorage 
                    por ultimo se se carga los registros de lo contrario muestra error
                */
                const localStorageClientes = localStorage.getItem(itemName);
                let setClientes;
                if(!localStorageClientes){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    setClientes=initialValue;
                }else{
                    setClientes=JSON.parse(localStorageClientes)
                }
                setItem(setClientes);
                setLoading(false);
            }catch(error){
                setError(error)
            }
        },3000);
    });

    /*
        se guarda el cliente en el localstorage 
        y se carga en la lista
        se muestra un error sino se guarda
    */
    const saveCliente = (newCliente)=>{
        try{
            const setCliente = JSON.stringify(newCliente); 
            localStorage.setItem(itemName, setCliente);
            setItem(newCliente)
        }catch(error){
            setError(error)
        }
    }
    return {
        item,
        saveCliente,
        loading,
        error
    }
}
