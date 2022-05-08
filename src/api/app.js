import React from 'react'
import {lsGet, lsSet} from '../helpers'


export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      return lsGet(key, initialValue)
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);      
      lsSet(key, valueToStore)
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}



export const statuses = [
  { id: 'all', name: 'ALL' },
  { id: 'new', name: 'NEW' },
  { id: 'hold', name: 'HOLD' },
  { id: 'ok', name: 'OK' },
  { id: 'cancelled', name: 'CANCELLED' }
];

export const roles = [
  "visitor", 
  "exhibitor", 
  "presenter", 
  "contestant",
  "contestant_person", 
  "contestant_company",
  "representative",
  "juror",
  "party",
  "service_external",
  "service_internal",
  "asset",
  "flag"
];


export const hasValidRole = (role) => roles.includes(role)

export const rolesObject = roles.map(role => ({id: role, name: role}))
  
export const resizeCloudinaryImage = (url, width = 600, height = 600, format = "jpg") => {
  //check if not already resized!
  if (url && /cloudinary/.test(url) && /image\/upload\/v[0-9]+/.test(url)) {
    return url.replace(/\.svg$/i, `.${format}`).replace("image/upload/", `image/upload/w_${width},h_${height},c_limit,f_auto/`);
  }

  return url; //do nothing!
}