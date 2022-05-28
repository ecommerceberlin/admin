import React from 'react';
import {makeStyles} from '@mui/styles'
import { ChipField } from 'react-admin';
import { useEventId } from '../contexts';

const useStyles = makeStyles({
  active: {
    backgroundColor: 'green',
    color: 'white'
  },

  not_active: {}
});

const ActiveEventChipField = ({record, ...rest }) => {

  const event_id = useEventId()
  const classes = useStyles()
  
   return (
    <ChipField
      className={
        classes[event_id === record.id ? 'active' : 'not_active']
      }
      record={record}
      {...rest}
    />
  );
};

export default ActiveEventChipField
