
import { useToken } from "../contexts"
import {useGetList} from 'react-admin'

export const useUserGroups = () => {

    const token = useToken()

    const { data, isLoading, error } = useGetList("groups", { 
        pagination: { page: 1, perPage: 100 }, 
        sort: { field: 'active_event_id', order: 'DESC' }
    }, {
        enabled: Boolean(token)
    })

    return data

}