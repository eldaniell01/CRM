import React from 'react'

export const useHooks = (inicial, final) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItems] = React.useState(final);
    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 2000)
    })
  return {
    loading,
    error,
    item
  }
}
