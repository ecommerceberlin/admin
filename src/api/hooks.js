import React from 'react'
import {useGetList, DataProviderContext} from 'react-admin'
import { isString } from 'lodash'
import { useLocalStorage } from './app'





export const useGroupId = () => {

    const [group_id] = useLocalStorage("group_id", 0)
    return group_id
}

export const useEventId = () => {

  const [event_id] = useLocalStorage("event_id", 0)
  return event_id
}


export const useApiContext = () => {

  const group_id = useGroupId()
  const event_id = useEventId()

  return [group_id, event_id];

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


export const useGroupEvents = () => {

  

    return data

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