import React from 'react';
import { TextField, ChipField } from 'react-admin';

const ActiveEvent = ({ activeEventId, classes, record, ...rest }) => {
  return record.active_event.id == activeEventId ? (
    <ChipField record={record} {...rest} />
  ) : (
    <TextField record={record} {...rest} />
  );
};

ActiveEvent.defaultProps = {
  addLabel: true
};

export default ActiveEvent;
