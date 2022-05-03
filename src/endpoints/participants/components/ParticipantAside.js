import { useEffect } from 'react'
import { Aside, Table } from '../../../components'
import { useApiContext, useGet } from '../../../api'

const ParticipantsAside = () => {

    const [_, event_id] = useApiContext()
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
    {key: "Going", value: data.going },
    {key: "Not going", value: data.not_going },
    ]} />



    </Aside>)

}


export default ParticipantsAside