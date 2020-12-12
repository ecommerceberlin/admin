
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { useRedirect, useQuery} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import ActiveIcon from '@material-ui/icons/FiberManualRecord';
import {changeEvent, changeGroup, showDialog} from '../redux'
import {useApiContext} from '../api'
import find from 'lodash/find'
import { hideDialog } from '../redux';
// import { createSelector } from 'reselect'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
      
      select: {
        // color: "#fff"
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


    const classes = useStyles();
    const [group_id] = useApiContext();
    const dispatch = useDispatch();

    const { data, loading, error } = useQuery({ 
        type: 'getList',
        resource: 'groups',
        payload: { 
            pagination: { page: 1, perPage: 100 }, 
            sort: { field: 'active_event_id', order: 'DESC' }
        }
    });

    if(error){
        return  null
    }

    const handleChangeGroup = (e) => dispatch(changeGroup(find(data, {id: e.target.value})));

    return (

        <FormControl className={classes.formControl}>
        <InputLabel id="change-group-label">Group</InputLabel>
        <Select
            id="select-group"
            labelId="change-group-label"
            value={group_id}
            onChange={ handleChangeGroup }
            autoWidth={true}
            variant="outlined"
            className={classes.select}
            // renderValue={id => get(find(data, {id}), "name")}
        >
        {(data || []).map(({id, name}) => <MenuItem key={id} value={id}>{name}</MenuItem> )}
        </Select>
        </FormControl>)
    
}



const SelectEvent = (props) => {

    const classes = useStyles();
    const [group_id, event_id] = useApiContext();
    const dispatch = useDispatch();


    const { data, loading, error } = useQuery({ 
        type: 'getList',
        resource: 'events',
        payload: { 
            pagination: { page: 1, perPage: 100 }, 
            sort: { field: 'id', order: 'DESC' }
        }
    });

    if(!group_id || error){
        return null
    }
    
    const handleChangeEvent = (e) => {
        dispatch(changeEvent(find(data, {id: e.target.value})))
        dispatch(hideDialog());
    }

    const filteredData = (data || []).filter(event => event.group_id == group_id)

    return (
        <FormControl className={classes.formControl}>
        <InputLabel id="change-event-label">Event</InputLabel>
        <Select
            id="select-event"
            labelId="change-event-label"
            value={event_id}
            onChange={ handleChangeEvent }
            autoWidth={true}
            variant="outlined"
            className={classes.select}
        >
        {filteredData.map(({id, name, is_active}) => <MenuItem key={id} value={id}>{is_active && <ActiveIcon className={classes.icon}/>}{name}</MenuItem> )}
        </Select>
        </FormControl>)
    
}

const Configure = () => {

    const [group_id, event_id, group, event] = useApiContext();
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {

        if(!group_id || !event_id){
            handleDialog();
        }
    
    },[])

    // const Dialog = React.memo((props) => )

    const handleDialog = () => dispatch(showDialog({
        title: "Change group and event",
        content: <div><SelectGroup /> <SelectEvent /></div>
    }))

    
    return (<div className={classes.root}>
      {event.is_active && <ActiveIcon className={classes.icon}/>}
        <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
    >{event.name}</Typography> 
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


export default Configure;