import React from 'react';
import PropTypes from 'prop-types';
import ImageEye from '@mui/icons-material/RemoveRedEye';
import { stringify } from '../../../helpers';
import { Button, Link } from 'react-admin';

const ShowButton = ({
  basePath = '',
  label = 'ra.action.show',
  record = {},
  ...rest
}) => (
  <Button
    component={Link}
    to={{
      pathname: 'participants',
      search: stringify({ ticket_id: record.id })
    }}
    label={label}
    {...rest}
  >
    <ImageEye />
  </Button>
);

ShowButton.propTypes = {
  basePath: PropTypes.string,
  label: PropTypes.string,
  record: PropTypes.object
};

//const enhance =

export default ShowButton;
