
import React, {useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import ActiveIcon from '@mui/icons-material/FiberManualRecord';
import {useEventId, useGroupId} from '../api'
import Typography from '@mui/material/Typography';
import { 
    useSetModal, 
    useUserGroups, 
    useChangeGroupOrEvent, 
    useCurrentEvent, 
    useGroupEvents,
    useCloseModal
} from '../contexts';
import MySelect from './MySelect';

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
          display: 'flex',
          alignItems: 'center'
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
    const {setGroupId} = useChangeGroupOrEvent()
    const group_id = useGroupId()

    if(!data){
        return null
    }

    return (<MySelect label="Select Group" value={group_id} onChange={setGroupId} options={data} />)
    
}



const SelectEvent = () => {

    const {setEventId} = useChangeGroupOrEvent()
    const data = useGroupEvents()
    const event_id = useEventId()
    const group_id = useGroupId()
    const closeModal = useCloseModal()

    if(!group_id || !data){
        return null
    }

    const handleEventChange = React.useCallback((newEventId)=>{
        if(newEventId > 0){
            setEventId(newEventId)
            closeModal()
        }
    }, [setEventId, closeModal])
    
    return (<MySelect label="Select Event" value={event_id} onChange={handleEventChange} options={data} />)

}


const CurrentSelection = () => {

    const data = useCurrentEvent()
    const classes = useStyles();

    if(!data){
        return null
    }
    
    return (<div>{data.is_active && <ActiveIcon className={classes.icon}/>}
        <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
    >{data.name}</Typography> 
    </div>)
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
    
    {event_id? <CurrentSelection />: null}
    
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