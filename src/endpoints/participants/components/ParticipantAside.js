import { useEffect } from 'react'
import { Aside } from '../../../components'
import { useApiContext, useGet } from '../../../api'

const ParticipantsAside = () => {

    const [_, event_id] = useApiContext()
    const {data, checking, error} = useGet(`participant-stats?event_id=${event_id}`)
    const {not_going, going} = data

    return (<Aside>
       Going {going} <br/>
       Not going {not_going}
    </Aside>)

}


export default ParticipantsAside