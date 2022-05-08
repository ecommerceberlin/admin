import React from 'react';
import CardActions from '@mui/material/CardActions';
import {makeStyles} from '@mui/styles'
import SelectAll from './actions/SelectAll';

const useStyles = makeStyles({
  root: {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
  }
});

const ShowActions = ({ basePath, id, resource }) => {
  const classes = useStyles()
  return (
    <CardActions classes={{ root: classes.root }}>
      <SelectAll basePath={basePath} groupId={id} />
    </CardActions>
  );
}

ShowActions.defaultProps = {
  id: 0
};

export default ShowActions
