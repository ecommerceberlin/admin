import React from 'react'
import {useGetList, DataProviderContext} from 'react-admin'
import { isString } from 'lodash'
import { useEventId } from '../contexts'
import {lsGet, lsSet} from './index'


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


export const hasValidRole = (role) => roles.includes(role)

export const rolesObject = roles.map(role => ({id: role, name: role}))
  
export const resizeCloudinaryImage = (url, width = 600, height = 600, format = "jpg") => {
  //check if not already resized!
  if (url && /cloudinary/.test(url) && /image\/upload\/v[0-9]+/.test(url)) {
    return url.replace(/\.svg$/i, `.${format}`).replace("image/upload/", `image/upload/w_${width},h_${height},c_limit,f_auto/`);
  }

  return url; //do nothing!
}


export const useTickets = (ids=[]) => {

    const event_id = useEventId();

    const {data} = useGetList("tickets", {
      pagination: {page: 1, perPage: 500},
      sort: "id",
      order: "DESC",
      filter: {event_id}
    })

    const filtered = (data || []).filter(item => ids.includes(item.id))
    const withTicketGroupId = filtered.filter(item => item.ticket_group_id > 0)

    return [filtered, withTicketGroupId]

}



export const useGet = (path, usePublicApi=false) => {


    const [data, setData] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const dataProvider = React.useContext(DataProviderContext);
  
    React.useEffect(()=>{
  
      let isCancelled = false;
  
      if(path && isString(path)){
        dataProvider.get(path, usePublicApi).then(({data}) => {
          if(!isCancelled){
            setLoading(false)
            setData(data)
          }
        }).catch(error => {
          if(!isCancelled){
            setLoading(false)
            setError(error)
          }
        })
      }
  
      return () => {
        isCancelled = true;
      };
  
    }, [path, usePublicApi])
  
    return {data, loading, error}
  
  }