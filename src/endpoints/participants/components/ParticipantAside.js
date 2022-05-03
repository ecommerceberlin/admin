import { useEffect } from 'react'
import { Aside } from '../../../components'
import { useGet } from '../../../api'

const ParticipantsAside = () => {


    const {data, checking, error} = useGet("participant-stats")

    return <Aside>asd</Aside>

}


export default ParticipantsAside