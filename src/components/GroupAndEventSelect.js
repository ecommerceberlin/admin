
import React, {useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useGetList, useRedirect} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import ActiveIcon from '@material-ui/icons/FiberManualRecord';
import get from 'lodash/get'





import {changeEvent, changeGroup} from '../redux'

// import { createSelector } from 'reselect'
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
      
      select: {
        color: "#fff"
      },

      icon: {
          fontSize: "1em",
          fill: "lightgreen",
          position: "relative",
          top: 2,
          marginRight: 10
      }
}));


// const makeNumOfTodosWithIsDoneSelector = () =>
//   createSelector(
//     state => state.todos,
//     (_, isDone) => isDone,
//     (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
//   )

// export const TodoCounterForIsDoneValue = ({ isDone }) => {
//     const selectNumOfTodosWithIsDone = useMemo(
//       makeNumOfTodosWithIsDoneSelector,
//       []
//     )
  
//     const numOfTodosWithIsDoneValue = useSelector(state =>
//       selectNumOfTodosWithIsDone(state, isDone)
//     )
  
//     return <div>{numOfTodosWithIsDoneValue}</div>

// }



const SelectGroup = (props) => {

    const { data, ids, loading, error } = useGetList(
        'groups',
        { page: 1, perPage: 100 },
        { field: 'active_event_id', order: 'DESC' }
    );

    const classes = useStyles();
    const group_id = useSelector(state => state.app.group_id)
    const dispatch = useDispatch();


    if(loading || error){
        return null
    }

    const handleChangeGroup = (e) => {

        const id = e.target.value
        const active_event_id = get(data[id], "active_event_id", 0);

        dispatch(changeGroup(id, active_event_id));
    }

    return (<FormControl>
        <Select
            id="select-group"
            value={group_id}
            onChange={ handleChangeGroup }
            autoWidth={true}
            variant="outlined"
            className={classes.select}
            renderValue={value => get(data[value], "name")}
        >
        {ids.map(id => <MenuItem key={id} value={id}>{get(data[id], "name")}</MenuItem> )}
        </Select>
        </FormControl>)
    
}



const SelectEvent = (props) => {

    const { data, ids, loading, error } = useGetList(
        'events',
        { page: 1, perPage: 100 },
        { field: 'id', order: 'DESC' }
    );

    const classes = useStyles();
    const event_id = useSelector(state => state.app.event_id)
    const group_id = useSelector(state => state.app.group_id)
    const dispatch = useDispatch();

    const filteredIds = ids.filter(id => data[id].group_id == group_id)

    const handleChangeEvent = (e) => {
        const id = e.target.value;
        dispatch(changeEvent(id))
    }
        
    if(!group_id || loading || error){
        return null
    }

    return (<FormControl>
        <Select
            id="select-event"
            value={event_id}
            onChange={ handleChangeEvent }
            autoWidth={true}
            variant="outlined"
            className={classes.select}
        >
        {filteredIds.map(id => <MenuItem key={id} value={id}>{get(data[id], "is_active") && <ActiveIcon className={classes.icon}/>}{get(data[id], "name")}</MenuItem> )}
        </Select>
        </FormControl>)
    
}

const Configure = () => {
    
    const redirect = useRedirect();
    
    return (<IconButton color="inherit" aria-label="manage events" component="div" onClick={() => redirect("/events")}><SettingsIcon /></IconButton>)
}

const GroupAndEventSelect = (props) => (<div> <SelectGroup /> <SelectEvent /> <Configure /> </div>)

export default GroupAndEventSelect;