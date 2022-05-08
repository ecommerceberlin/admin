import React from 'react';
import {makeStyles} from '@mui/styles'
import { ChipField } from 'react-admin';
import { useApiContext} from '../api';

const useStyles = makeStyles({
  active: {
    backgroundColor: 'green',
    color: 'white'
  },

  not_active: {}
});

const ActiveEventChipField = ({record, ...rest }) => {
  const [group_id, event_id] = useApiContext();
  const classes = useStyles()
  
   return (
    <ChipField
      className={
        classes[event_id() === record.id ? 'active' : 'not_active']
      }
      record={record}
      {...rest}
    />
  );
};

export default ActiveEventChipField
