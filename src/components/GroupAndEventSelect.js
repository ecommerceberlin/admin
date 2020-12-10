
import React, {useMemo} from 'react';
import { useGetList} from 'react-admin';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useSelector, useDispatch } from 'react-redux'
import get from 'lodash/get'
import {changeEvent, changeGroup} from '../redux'
import { createSelector } from 'reselect'


const useStyles = makeStyles((theme) => ({
      
}));


const makeNumOfTodosWithIsDoneSelector = () =>
  createSelector(
    state => state.todos,
    (_, isDone) => isDone,
    (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
  )

export const TodoCounterForIsDoneValue = ({ isDone }) => {
    const selectNumOfTodosWithIsDone = useMemo(
      makeNumOfTodosWithIsDoneSelector,
      []
    )
  
    const numOfTodosWithIsDoneValue = useSelector(state =>
      selectNumOfTodosWithIsDone(state, isDone)
    )
  
    return <div>{numOfTodosWithIsDoneValue}</div>

}



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

    return (<FormControl>
        <Select
            id="select-group"
            value={group_id}
            onChange={e => dispatch(changeGroup(e.target.value))}
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
    const dispatch = useDispatch();


    if(loading || error){
        return null
    }

    return (<FormControl>
        <Select
            id="select-event"
            value={event_id}
            onChange={e => dispatch(changeEvent(e.target.value))}
        >
        {ids.map(id => <MenuItem key={id} value={id}>{get(data[id], "name")}</MenuItem> )}
        </Select>
        </FormControl>)
    
}



const GroupAndEventSelect = (props) => (<div> <SelectGroup /> <SelectEvent /> </div>)


export default GroupAndEventSelect;