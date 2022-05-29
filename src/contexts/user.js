import React, {useEffect} from 'react'
import { lsGet } from '../helpers';

export const UserContextContainer = React.createContext({});


export const useToken = () => {
    const {token} = React.useContext(UserContextContainer)  
    return token
}

export const useLogoutSuccess = () => {
    const {setToken} = React.useContext(UserContextContainer)  
    return React.useCallback(() => setToken(""), [setToken])
}

export const useProfile = () => {

    const {profile} = React.useContext(UserContextContainer)  
    return profile
}


export const UserContext = ({children}) => {

    const [profile, setProfile] = React.useState({})
    const [token, setToken] = React.useState("")

    React.useEffect(()=>{

        window.addEventListener("storage/profile", function(){  
            const profile = lsGet("profile")
            if(profile){
                setProfile(profile)
                console.log("storage/profile", profile);
            }
           
        });

        window.addEventListener("storage/token", function(){  
            const token = lsGet("token")
            if(token){
                setToken(token)
                console.log("storage/token", token);
            }else{
                setToken("")
                setProfile({})
            }
           
        });

        return () => {
            window.removeEventListener("storage/profile");
            window.removeEventListener("storage/token");
        }
    }, [setProfile, setToken])

    const value = React.useMemo(()=> ({
        token,
        profile
    }), [profile, token])
    return <UserContextContainer.Provider value={value}>{children}</UserContextContainer.Provider>
  }



