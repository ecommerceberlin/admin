import React from 'react';
import { FunctionField } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import get from 'lodash/get';

const styles = {
  primary: {
    display: 'block',
    fontSize: '0.92rem'
  },
  secondary: {
    display: 'block',
    color: '#888888'
  }
};

const DoubleTextField = ({ classes, primary, secondary, ...rest }) => (
  <FunctionField
    {...rest}
    className={classes.name}
    render={record => (
      <React.Fragment>
        <span className={classes.primary}>{get(record, primary)}</span>
        <span className={classes.secondary}>{get(record, secondary)}</span>
      </React.Fragment>
    )}
  />
);

DoubleTextField.defaultProps = {
  addLabel: true
};

export default withStyles(styles)(DoubleTextField);
