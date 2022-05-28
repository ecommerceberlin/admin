
import React from 'react'
import { useLocalStorage} from '../api'
import { useGetOne, useGetList} from 'react-admin'

export const GroupEventsContextContainer = React.createContext({});


export const GroupEventsContext = ({children}) => {

    const [group_id, setGroupId] = useLocalStorage("group_id")
    const [event_id, setEventId] = useLocalStorage("event_id")

    const value = React.useMemo(() => ({
        setGroupId,
        setEventId,
        group_id,
        event_id
    }), [setGroupId, setEventId, group_id, event_id])

    return <GroupEventsContextContainer.Provider value={value}>{children}</GroupEventsContextContainer.Provider>
}


export const useChangeGroupOrEvent = () => {

    const context = React.useContext(GroupEventsContextContainer)
    return context

}

export const useGroupEvents = () => {

    const group_id = useGroupId()

    const {data, isLoading, error} = useGetList("events", {
        pagination: {page: 1, perPage: 500},
        sort: "id",
        order: "DESC",
        filter: {group_id}
    })

    return isLoading || error? null: data
}




export const useGroupId = () => {

    const {group_id} = React.useContext(GroupEventsContextContainer)


    // const [group_id] = useLocalStorage("group_id", 0)
    return group_id
}

export const useEventId = () => {

    const {event_id} = React.useContext(GroupEventsContextContainer)

//   const [event_id] = useLocalStorage("event_id", 0)
  return event_id
}



export const useCurrentEvent = () => {

    const event_id = useEventId()

    const {data, isLoading, error} = useGetOne("events", {id: event_id})

    return isLoading || error? null: data

}