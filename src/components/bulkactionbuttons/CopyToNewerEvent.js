
import * as React from "react";
import {
    useRefresh,
    useNotify,
    useUnselectAll,
    useGetList,
    useCreate,
} from 'react-admin';

import {useApiContext, useTickets} from '../../api'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Button from '../Button'
import {useDispatch} from 'react-redux'
import { showDialog } from "../../redux";
import { Table, Select } from "..";
import { CacheContext, useCache, useSetCache, GroupEventsContext, useGroupEvents } from "../../contexts";



const ModifyTicketGroupTicket = ({ids = []}) => {

    const [tickets, withGroupId] = useTickets(ids)
    const events = useGroupEvents()
    

    return <Table rows={withGroupId} columns={[
        {name: "name", render: "_name"},
        {name: "ticket_group_id", render: "ticket_group.name"},
      //  {name: "target", render: (item) => <Select cacheKey={} />}
    ]}/>
}


const CopyToNewerEvent = ({ selectedIds, basePath, resource, label="copy to newer event" }) => {
    
    const [group_id, event_id] = useApiContext();
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const dispatch = useDispatch()
    const [tickets, withGroupId] = useTickets(selectedIds)
    const events = useGroupEvents()
    const mappings = useCache("mappings", {})
    
    const shouldRemapTicketGroupId = withGroupId.length

    console.log( shouldRemapTicketGroupId )

    const {data, isLoading, error} = useGetList("events", {
        pagination: {page: 1, perPage: 500},
        sort: "id",
        order: "DESC",
        filter: {group_id}
    })
    


    console.log(data)

    const [create] = useCreate()


    const handleCopy = () => dispatch(showDialog({
        title: "Select Target Event",
        content: <div><ModifyTicketGroupTicket ids={selectedIds} /></div>
    }))


    // const [updateMany, { loading }] = useUpdateMany(
    //     resource,
    //     selectedIds,
    //     data,
    //     {
    //         onSuccess: () => {
    //             refresh();
    //             notify(`${resource} updated`);
    //             unselectAll(resource);
    //         },
    //         onFailure: error => notify('Error: items not updated', 'warning'),
    //     }
    // );

    return (
        <Button label={label} variant="text" disabled={loading || error } onClick={handleCopy} startIcon={<FileCopyIcon />} />
    );
};

const CopyToNewerEventWithCache = () => <GroupEventsContext><CacheContext><CopyToNewerEvent /> </CacheContext> </GroupEventsContext>


export default CopyToNewerEventWithCache ;