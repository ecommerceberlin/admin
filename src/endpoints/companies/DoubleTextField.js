import React from 'react';
import { FunctionField } from 'react-admin';
import get from 'lodash/get';



const DoubleTextField = ({ primary, secondary, ...rest }) => {
  return (
    <FunctionField
      {...rest}
      className={classes.name}
      render={record => (
        <React.Fragment>
          <Box component="span" sx={{
              display: 'block',
              fontSize: '0.92rem'
          }}>{get(record, primary)}</Box>
          <Box component="span" sx={{
            display: 'block',
            color: '#888888'
          }}>{get(record, secondary)}</Box>
        </React.Fragment>
      )}
    />
  );
}


export default DoubleTextField
