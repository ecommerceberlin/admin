import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { refreshView } from 'react-admin';

const WithEvent = (props) => {

  const active_event_id = useSelector(state => state.app.event && "id" in state.app.event ? state.app.event.id : 0)
  const active_group_id = useSelector(state => state.app.group && "id" in state.app.group ? state.app.group.id : 0)

  // const dispatch = useDispatch();

  return props.children(active_event_id)

}

export default WithEvent