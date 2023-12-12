import React, {useState, useEffect, useCallback} from "react";
import {
    Button,
    useUpdateMany,
    useRefresh,
    useNotify,
    useUnselectAll,
    // defaultTheme
} from 'react-admin';

import { VisibilityOff } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import MuiButton from '@mui/material/Button';


const FlagButtons = ({data, onClick, resource}) => {


    return <div>{data.map(flag => <Grid container spacing={3} key={flag} justify="flex-end" alignItems="center"><Grid item sx={{

    }}>{flag}</Grid>
        <Grid item> 
        <MuiButton onClick={()=>onClick(flag, 0)} sx={{
            backgroundColor: 'darkorange',
            color: "white"
        }}>Off</MuiButton>
        <MuiButton onClick={()=>onClick(flag, 1)} sx={{
             backgroundColor: 'lightgreen',
             color: "white"
        }}>On</MuiButton>
       </Grid></Grid>
    )}</div>
}


const MassChangeFlags = ({ selectedIds, label, data, basePath, filterValues, Icon, resource }) => {
    
    const [flag, setFlag] = useState(null);
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();


    const setFlagCallback = useCallback((newflag, value) => setFlag({[newflag]: value}))

    useEffect(()=>{
        if(flag){
            updateMany();
            dispatch(hideDialog());
        }
    }, [flag])

    const [updateMany, { loading }] = useUpdateMany(
        resource,
        selectedIds,
        flag,
        {
            onSuccess: () => {
                refresh();
                notify(`${resource} updated`);
                unselectAll(resource);
            },
            onFailure: error => notify('Error: items not updated', 'warning'),
        }
    );

    const handleDialog = () =>  dispatch(showDialog({
        title: `Change visibility of ${selectedIds.length} item${selectedIds.length>1? `s`: ``}...`,
        content: <FlagButtons data={data} onClick={ setFlagCallback } />,
    }))

    return (
        <Button
            label={label}
            disabled={loading}
            onClick={handleDialog}
        >
            {/* <Icon /> */}
        </Button>
    );
};

MassChangeFlags.defaultProps = {
    label: "Publish",
    data: {
        is_published : 1
    },
    Icon: <VisibilityOff />
}

export default MassChangeFlags;