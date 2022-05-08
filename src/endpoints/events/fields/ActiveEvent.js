import React from 'react';
import { TextField } from 'react-admin';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(theme => (
  {
    active: {
      fontWeight: 700
    },
    notActive: {}
  }
)) 

const ActiveEvent = ({record, ...rest }) => {
  
  const classes = useStyles()
  
  return (
    <TextField
      className={record.is_active ? classes.active : classes.notActive}
      record={record}
      {...rest}
    />
  );
}

ActiveEvent.defaultProps = {
  addLabel: true
};

export default ActiveEvent;
