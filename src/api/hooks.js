import {useSelector} from 'react-redux'


export const useApiContext = () => {

    const groupId = useSelector(state => state.app.group_id)
    const eventId = useSelector(state => state.app.event_id)

    return [groupId, eventId];

}