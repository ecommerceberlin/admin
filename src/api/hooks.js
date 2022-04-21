import {useSelector} from 'react-redux'
import {useQueryWithStore} from 'react-admin'

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