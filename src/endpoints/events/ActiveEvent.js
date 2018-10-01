import React from 'react';
import { TextField } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  active: {
    fontWeight: 700
  },
  notActive: {}
};

const ActiveEvent = ({ classes, record, ...rest }) => (
  <TextField
    className={record.is_active ? classes.active : classes.notActive}
    record={record}
    {...rest}
  />
);

ActiveEvent.defaultProps = {
  addLabel: true
};

export default withStyles(styles)(ActiveEvent);
