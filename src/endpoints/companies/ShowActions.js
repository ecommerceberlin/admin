import React from 'react';
import {
  EditButton,
  RefreshButton,
  ListButton,
  CardActions
} from 'react-admin';
import Button from '@material-ui/core/Button';

const cardActionStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const ShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} />
    {/* Add your custom actions */}
    <RefreshButton />
    <ListButton />
    <Button color="primary" onClick={null}>
      Custom Action
    </Button>
  </CardActions>
);

export default ShowActions;
