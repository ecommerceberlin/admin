import React from 'react'
import { useLocalStorage } from '../api/app';
import get from 'lodash/get'
export const UserContextContainer = React.createContext({});


export const useToken = () => {
    const {token} = React.useContext(UserContextContainer)  
    return token
}

export const useUser = (path, replacement) => {
    const {profile} = React.useContext(UserContextContainer)  
    return get(profile, path, replacement)
}

export const useUserId = (path) => {
    const {profile} = React.useContext(UserContextContainer)  
    return get(profile, "id")
}

export const useCompany = (path = "id", replacement) => {
    const {profile} = React.useContext(UserContextContainer)  
    return get(profile, `company.${path}`, replacement); 
}

export const useLoginSuccess = () => {
    const {setToken} = React.useContext(UserContextContainer)  
    return React.useCallback((token) => setToken(token), [setToken])
}

export const useLogoutSuccess = () => {
    const {setProfile, setToken} = React.useContext(UserContextContainer)  
    return React.useCallback(() => {
        setToken("")
        setProfile({})
    }, [setProfile, setToken])
}


export const UserContext = ({children}) => {

    const [profile, setProfile] = useLocalStorage("profile", {});
    // const [permissions, setPermissions] = useLocalStorage("permissions", "")
    const [token, setToken] = useLocalStorage("token", "")

    const value = React.useMemo(()=> ({
        profile,
        setProfile,
        token,
        setToken 
    }), [profile, setProfile, token, setToken])
    return <UserContextContainer.Provider value={value}>{children}</UserContextContainer.Provider>
  }



