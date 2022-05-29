
import React, {useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import ActiveIcon from '@mui/icons-material/FiberManualRecord';

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

    return (<MySelect 
        label="Select Event" 
        value={event_id} 
        onChange={handleEventChange} 
        options={data} 
        decorate={(record)=> record && record.is_active ? <ActiveIcon sx={{color: "lightgreen", mr: 1}} />: null}/>)

}


const GroupAndEventSelect = () => {

    const group_id = useGroupId()
    const event_id = useEventId()
    const modal = useSetModal()


    useEffect(() => {

        if(!group_id || !event_id){
            handleDialog();
        }
    
    }, [group_id, event_id])

    const handleDialog = () => modal("Change group and event", <Box sx={{m:2}}><SelectGroup /> <SelectEvent /></Box>) 

    return ( 
      
    <IconButton 
        color="inherit" 
        aria-label="manage events" 
        component="div" 
        onClick={handleDialog}
    >
    <SettingsIcon />
    </IconButton>

   )
}



export default GroupAndEventSelect;