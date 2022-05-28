
import React, {useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';

import { 
    useEventId, 
    useGroupId,
    useSetModal,  
    useSetEventId,
    useSetGroupId, 
    useCloseModal
} from '../contexts';
import MySelect from './MySelect';
import { 
    useUserGroups, 
    useGroupEvents,
} from '../datasources';

const useStyles = makeStyles((theme) => ({
      
      select: {
        // color: "#fff",
        minWidth: 200,
      },

      icon: {
          fontSize: "1em",
          fill: "lightgreen",
          position: "relative",
          top: 2,
          marginRight: 10
      },

      root: {
        //   display: 'flex',
        //   alignItems: 'center'
      },

      title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },

      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}));

const SelectGroup = () => {

    const data = useUserGroups();
    const setGroupId = useSetGroupId()
    const group_id = useGroupId()

    if(!data){
        return null
    }

    return (<MySelect label="Select Group" value={group_id} onChange={setGroupId} options={data} />)
    
}



const SelectEvent = () => {

    const setEventId = useSetEventId()
    const data = useGroupEvents()
    const event_id = useEventId()
    const group_id = useGroupId()
    const closeModal = useCloseModal()

    const handleEventChange = React.useCallback((newEventId)=>{
        if(newEventId > 0){
            setEventId(newEventId)
            closeModal()
        }
    }, [setEventId, closeModal])
    
    if(!group_id || !data){
        return null
    }

    return (<MySelect label="Select Event" value={event_id} onChange={handleEventChange} options={data} />)

}





const GroupAndEventSelect = () => {

    const group_id = useGroupId()
    const event_id = useEventId()
    const modal = useSetModal()
    const classes = useStyles();

    useEffect(() => {

        if(!group_id || !event_id){
            handleDialog();
        }
    
    }, [group_id, event_id])

    const handleDialog = () => modal("Change group and event", <Box sx={{m:2}}><SelectGroup /> <SelectEvent /></Box>) 

    return (<div className={classes.root}>
      
    <IconButton 
        color="inherit" 
        aria-label="manage events" 
        component="div" 
        onClick={handleDialog}
    >
    <SettingsIcon />
    </IconButton>

    </div>)
}



export default GroupAndEventSelect;