
import React from 'react'
import {useGetList} from 'react-admin'
import {useApiContext} from '../api'


export const GroupEventsContextContainer = React.createContext({});


export const GroupEventsContext = ({children}) => {

    const [group_id, event_id] = useApiContext();
    
    const {data, isLoading, isError} = useGetList("events", {
        pagination: {page: 1, perPage: 500},
        sort: "id",
        order: "DESC",
        filter: {group_id}
    })

    const value = React.useMemo(() => ({
        data
    }), [data])

    return <GroupEventsContextContainer.Provider value={value}>{children}</GroupEventsContextContainer.Provider>
}


export const useGroupEvents = () => {

    const context = React.useContext(GroupEventsContextContainer)
    return context

}
