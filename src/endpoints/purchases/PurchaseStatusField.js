import React from 'react';
import { ChipField } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import { statuses as styles } from '../../styles';

const PurchaseStatusField = withStyles(styles)(
  ({ classes, record, ...rest }) => {
    return (
      <ChipField className={classes[record.status]} record={record} {...rest} />
    );
  }
);

export default PurchaseStatusField;
