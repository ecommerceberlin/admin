import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshView } from 'react-admin';

const WithEvent = (props) => {

  const active_event_id = useSelector(state => state.app.event_id)
  const active_group_id = useSelector(state => state.app.group_id)

  const dispatch = useDispatch();

  return props.children(active_event_id)

}

export default WithEvent