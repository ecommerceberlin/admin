import React from 'react';
import { ImageField, TextField } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import get from 'lodash/get';

const styles = {
  logotype: {
    border: '1px solid #eaeaea',
    margin: 2,
    textAlign: 'center',
    '& img': {
      maxWidth: 200,
      maxHeight: 45
    }
  },
  name: {
    border: '1px solid #eaeaea',
    margin: 2,
    textAlign: 'center',
    fontWeigth: 900,
    minHeight: 45
  }
};

const ConditionalField = ({ classes, record, sources, ...rest }) => {
  if (!record || !sources || !sources.length) return null;

  let source = sources.find(function(item) {
    return get(record, item, '').length;
  });

  if (source) {
    const val = get(record, source);

    if (val.indexOf('http') > -1) {
      return (
        <ImageField
          source={source}
          record={record}
          className={classes.logotype}
          {...rest}
        />
      );
    } else {
      return (
        <TextField
          source={source}
          record={record}
          className={classes.name}
          {...rest}
        />
      );
    }
  }

  return null;
};

ConditionalField.defaultProps = { addLabel: true };

export default withStyles(styles)(ConditionalField);
