import { useEffect } from 'react'
import { Aside, MyTypography, Table } from '../../../components'
import { useGet } from '../../../helpers'
import { useEventId } from '../../../contexts'
import { ReferenceInput, SelectInput, SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';
import {useTicketGroups} from '../../../datasources'



const TicketGroups = () => {
    const ticketgroups = useTicketGroups()

    if(!ticketgroups){
        return null
    }

    return (
        <FilterList label="Ticket Group">
        {ticketgroups.map(({id, name}) =>  <FilterListItem key={id} label={name} value={{ ticket_group_id: id }} />)}
        </FilterList>
    )
}




const ParticipantsAside = () => {

    const event_id = useEventId()
    const {data, checking, error} = useGet(`participant-stats?event_id=${event_id}`)
    const {not_going, going} = data

    return (<Aside>
    <SavedQueriesList/>
    <FilterLiveSearch />

    <TicketGroups />
    

    <MyTypography variant="overline" label="stats" />
        

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