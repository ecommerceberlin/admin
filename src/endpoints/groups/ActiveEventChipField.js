import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChipField } from 'react-admin';
import activeEventId from '../../api/app';

const styles = {
  active: {
    backgroundColor: 'green',
    color: 'white'
  },

  not_active: {}
};

const ActiveEventChipField = ({ classes, record, ...rest }) => {
  return (
    <ChipField
      className={
        classes[activeEventId() === record.id ? 'active' : 'not_active']
      }
      record={record}
      {...rest}
    />
  );
};

export default withStyles(styles)(ActiveEventChipField);
