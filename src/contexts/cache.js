
import React from 'react'
export const CacheContextContainer = React.createContext({});


export const CacheContext = ({children}) => {

    const [items, setItems] = React.useState({})

    const set = React.useCallback((item, value) => setItems({...items, [item]: value}), [items, setItems])

    const value = React.useMemo(()=>({
        set,
        items
    }), [set, items])

    return <CacheContextContainer.Provider value={value}>{children}</CacheContextContainer.Provider>
}


export const useSetCache = () => {

    const {set} = React.useContext(CacheContextContainer)
    return set

}

export const useCache = (name, replacement = undefined) => {

    const {items} = React.useContext(CacheContextContainer)
    return items && name in items? items[name] : replacement

}
