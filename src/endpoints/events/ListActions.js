import React from 'react';
import CardActions from '@mui/material/CardActions';
import SelectAll from './actions/SelectAll';


const ShowActions = ({ basePath, id, resource }) => {
  return (
    <CardActions sx={{
      "& .root": {
        zIndex: 2,
        display: 'inline-block',
        float: 'right'
      }
    }}>
      <SelectAll basePath={basePath} groupId={id} />
    </CardActions>
  );
}

ShowActions.defaultProps = {
  id: 0
};

export default ShowActions
