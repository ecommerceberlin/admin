import React from 'react';
import PropTypes from 'prop-types';
import ImageEye from '@mui/icons-material/RemoveRedEye';
import { stringify } from '../../helpers';
import { Button, Link } from 'react-admin';

const RelatedEvents = ({
  basePath = '',
  label = 'ra.action.show',
  record = {},
  ...rest
}) => (
  <Button
    component={Link}
    to={{
      pathname: 'events',
      search: stringify({ group_id: record.id } )
    }}
    label={label}
    {...rest}
  >
    <ImageEye />
  </Button>
);

RelatedEvents.propTypes = {
  basePath: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object
};

//const enhance =

export default RelatedEvents;
