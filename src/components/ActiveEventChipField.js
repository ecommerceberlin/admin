import React from 'react';
import { withStyles } from '@mui/material/styles';
import { ChipField } from 'react-admin';
import { useApiContext} from '../api';

const styles = {
  active: {
    backgroundColor: 'green',
    color: 'white'
  },

  not_active: {}
};

const ActiveEventChipField = ({ classes, record, ...rest }) => {
  const [group_id, event_id] = useApiContext();
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

export default withStyles(styles)(ActiveEventChipField);
