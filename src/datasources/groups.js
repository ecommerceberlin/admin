
import { useToken, useGroupId } from "../contexts"
import {useGetList, useGetOne} from 'react-admin'

export const useUserGroups = () => {

    const token = useToken()

    console.log(token)

    const { data, isLoading, error } = useGetList("groups", { 
        pagination: { page: 1, perPage: 100 }, 
        sort: { field: 'active_event_id', order: 'DESC' }
    }, {
        enabled: Boolean(token)
    })

    return data

}

export const useCurrentGroup = () => {

    const group_id = useGroupId()

    const {data, isLoading, error} = useGetOne("groups", {id: group_id}, {
        enabled: Boolean(group_id)
    })

    return isLoading || error? null: data

}


export const useCurrentHost = () => {

    const group = useCurrentGroup()

    return group? group.host : ""

}