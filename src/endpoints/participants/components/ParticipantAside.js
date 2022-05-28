import { useEffect } from 'react'
import { Aside, Table } from '../../../components'
import { useGet } from '../../../datasources'
import { useEventId } from '../../../contexts'

const ParticipantsAside = () => {

    const event_id = useEventId()
    const {data, checking, error} = useGet(`participant-stats?event_id=${event_id}`)
    const {not_going, going} = data

    return (<Aside>

    <Table 
    minWidth={300}
    columns={[
        {name: "metrics", render: (item)=> <strong>{item.key}</strong>},
        {name: "value", render: (item)=> item.value},
    ]}
    rows={[
        {key: "Visitors", value: data.total },
        {key: "Going", value: data.going },
        {key: "Not going", value: data.not_going },
    ]} />



    </Aside>)

}


export default ParticipantsAside