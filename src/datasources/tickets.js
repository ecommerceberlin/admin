

import { useEventId } from '../contexts'
import { useGetList } from 'react-admin';

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
