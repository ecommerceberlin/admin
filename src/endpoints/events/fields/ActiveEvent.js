import React from 'react';
import { TextField } from 'react-admin';

 

const ActiveEvent = ({record, ...rest }) => {
  
  return (
    <TextField
      sx={{
        fontWeight: record.is_active? 700: 300
      }}
      record={record}
      {...rest}
    />
  );
}

ActiveEvent.defaultProps = {
  addLabel: true
};

export default ActiveEvent;
