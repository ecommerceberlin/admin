import { useEffect } from 'react'
import { Aside, Table } from '../../../components'
import { useGet } from '../../../helpers'
import { useEventId } from '../../../contexts'
import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';






const ParticipantsAside = () => {

    const event_id = useEventId()
    const {data, checking, error} = useGet(`participant-stats?event_id=${event_id}`)
    const {not_going, going} = data

    return (<Aside>
    {/* <SavedQueriesList/> */}
    <FilterLiveSearch />


    <FilterList label="Role" icon={<MailIcon />}>
                <FilterListItem label="Yes" value={{ has_newsletter: true }} />
                <FilterListItem label="No" value={{ has_newsletter: false }} />
    </FilterList>




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