
import React from 'react'
import { useLocalStorage} from '../helpers'

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

export const useSetEventId = () => {
    const {setEventId} = React.useContext(GroupEventsContextContainer)
    return setEventId
}

export const useSetGroupId = () => {
    const {setGroupId} = React.useContext(GroupEventsContextContainer)
    return setGroupId
}

export const useGroupId = () => {

    const {group_id} = React.useContext(GroupEventsContextContainer)
    return group_id
}

export const useEventId = () => {
    const {event_id} = React.useContext(GroupEventsContextContainer)
    return event_id
}



