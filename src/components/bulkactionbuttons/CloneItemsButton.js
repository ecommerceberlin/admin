import Button from '../Button'
import { useRefresh, useNotify, useUnselectAll, useCreate, useGetList } from 'react-admin';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useEventId } from '../../contexts';
const CloneItemsButton = ({resource, basePath, selectedIds}) => {

    const event_id = useEventId()
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll(resource);

    const {data} = useGetList(resource, {
        pagination: {page: 1, perPage: 500},
        sort: "id",
        order: "DESC",
        filter: {event_id}
    })

    const [create] = useCreate();

    const handleAction = () => {
        selectedIds.forEach(ticket_id => {

            const source = data.find(item => item.id == ticket_id)

            if(source){
                create(resource, source, {
                    onSuccess: () => {
                        notify("common.actions.cloned")
                        refresh()
                        unselectAll()
                    },
                    onFailure: () => {
                        notify("common.error")
                    }
                })
            }else{
                notify("common.error")
            }
        
        });
    }

    return <Button label="clone" onClick={handleAction} variant="text" startIcon={<FileCopyIcon />} />


}

export default CloneItemsButton












/***
 * 
 * import * as React from "react";
import {
    Button,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';
import { VisibilityOff } from '@mui/icons-material';

const ResetViewsButton = ({ selectedIds }) => {
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const [updateMany, { loading }] = useUpdateMany(
        'posts',
        selectedIds,
        { views: 0 },
        {
            onSuccess: () => {
                refresh();
                notify('Posts updated');
                unselectAll('posts');
            },
            onFailure: error => notify('Error: posts not updated', 'warning'),
        }
    );

    return (
        <Button
            label="simple.action.resetViews"
            disabled={loading}
            onClick={updateMany}
        >
            <VisibilityOff />
        </Button>
    );
};

export default ResetViewsButton;

 */