
import { useProfile } from "../contexts"

export const useUserGroups = () => {

    const profile = useProfile()

    const { data, isLoading, error } = useGetList("groups", { 
        pagination: { page: 1, perPage: 100 }, 
        sort: { field: 'active_event_id', order: 'DESC' }
    })

    return data

}