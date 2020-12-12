import * as React from 'react';
import { Fragment } from 'react';
// import Button from '@material-ui/core/Button';
import { Button, BulkDeleteButton } from 'react-admin';

/**
 * https://marmelab.com/react-admin/List.html#bulkactionbuttons
 * 
 */
const TicketListBulkActions = ({resource, basePath, filterValues, selectedIds}) => (
    <Fragment>
        {/* <ResetViewsButton label="Reset Views" {...props} /> */}
        {/* default bulk delete action */}
        {/* <BulkDeleteButton {...props} /> */}
        <Button label="Hmmm" />
    </Fragment>
);


export default TicketListBulkActions



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
import { VisibilityOff } from '@material-ui/icons';

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