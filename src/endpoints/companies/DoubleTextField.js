import React from 'react';
import { FunctionField } from 'react-admin';
import {makeStyles} from '@mui/styles'
import get from 'lodash/get';

const useStyles = makeStyles({
  primary: {
    display: 'block',
    fontSize: '0.92rem'
  },
  secondary: {
    display: 'block',
    color: '#888888'
  }
});

const DoubleTextField = ({ primary, secondary, ...rest }) => {
  const classes = useStyles()
  return (
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
}


export default DoubleTextField
