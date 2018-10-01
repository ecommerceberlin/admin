import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import SelectAll from './actions/SelectAll';

const styles = {
  root: {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
  }
};

const ShowActions = ({ basePath, id, classes, resource }) => (
  <CardActions classes={{ root: classes.root }}>
    <SelectAll basePath={basePath} groupId={id} />
  </CardActions>
);

ShowActions.defaultProps = {
  id: 0
};

export default withStyles(styles)(ShowActions);
