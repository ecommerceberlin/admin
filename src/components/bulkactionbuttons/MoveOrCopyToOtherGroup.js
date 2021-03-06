
import * as React from "react";
import {
    Button,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
} from 'react-admin';

import {useApiContext} from '../../api'
import { VisibilityOff } from '@material-ui/icons';

const MoveOrCopyToOtherGroup = ({ selectedIds, label, data, basePath, filterValues, Icon, resource }) => {
    
    const [group_id, event_id] = useApiContext();
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();

    const [updateMany, { loading }] = useUpdateMany(
        resource,
        selectedIds,
        data,
        {
            onSuccess: () => {
                refresh();
                notify(`${resource} updated`);
                unselectAll(resource);
            },
            onFailure: error => notify('Error: items not updated', 'warning'),
        }
    );

    return (
        <Button
            label={label}
            disabled={loading}
            onClick={updateMany}
        >
            {/* <Icon /> */}
        </Button>
    );
};

MoveOrCopyToOtherGroup.defaultProps = {
    label: "Publish",
    data: {
        is_published : 1
    },
    Icon: <VisibilityOff />
}

export default MoveOrCopyToOtherGroup;