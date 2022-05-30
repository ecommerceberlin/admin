

import { useGroupId, useEventId } from "../contexts"
import { useGetList, useGetOne } from "react-admin"


export const useGroupEvents = () => {

    const group_id = useGroupId()

    const {data, isLoading, error} = useGetList("events", {
        pagination: {page: 1, perPage: 500},
        sort: { field: 'id', order: 'DESC' },
        filter: {group_id}
    }, {
        enabled: Boolean(group_id)
    })

    return isLoading || error? null: data
}


export const useCurrentEvent = () => {

    const event_id = useEventId()

    const {data, isLoading, error} = useGetOne("events", {id: event_id}, {
        enabled: Boolean(event_id)
    })

    return isLoading || error? null: data

}