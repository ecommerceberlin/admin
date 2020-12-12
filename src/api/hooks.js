import {useSelector} from 'react-redux'


export const useApiContext = () => {

    const event = useSelector(state => state.app.event)
    const group = useSelector(state => state.app.group)

    return [group? group.id : 0, event ? event.id: 0, group, event];

}