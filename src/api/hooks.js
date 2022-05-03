import React from 'react'
import {useSelector} from 'react-redux'
import {useQueryWithStore, DataProviderContext} from 'react-admin'
import { isString } from 'lodash'


export const useApiContext = () => {

    const event = useSelector(state => state.app.event)
    const group = useSelector(state => state.app.group)

    return [group? group.id : 0, event ? event.id: 0, group, event];

}



export const useTickets = (ids=[]) => {

    const [group_id, event_id] = useApiContext();

    const {data} = useQueryWithStore({
        type: "getList",
        resource: "tickets",
        payload: {
            pagination: {page: 1, perPage: 500},
            sort: "id",
            order: "DESC",
            filter: {event_id}
        }
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