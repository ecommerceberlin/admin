
import React from 'react'
import { useTheme, defaultTheme } from "react-admin"
import { useLocalStorage } from '../helpers'


const ThemeSaver = () => {

    const [theme, setTheme]= useTheme()
    const [store, setStore] = useLocalStorage("theme", undefined)

    const {palette: {mode}} = theme

    console.log({theme, store, mode})

    React.useEffect(()=>{

        console

        if(store){
            // setTheme(store)
        }

        if(theme){
            // setStore(theme)
        }


    }, [theme])



    React.useEffect(()=>{

        console

        if(store){
            // setTheme(store)
        }

        if(theme){
            // setStore(theme)
        }


    }, [store])


    return null

}

export default ThemeSaver