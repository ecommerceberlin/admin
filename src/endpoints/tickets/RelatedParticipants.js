import React from 'react';
import PropTypes from 'prop-types';
import ImageEye from '@material-ui/icons/RemoveRedEye';
import { Link } from 'react-router-dom';
//import { linkToRecord } from 'ra-core';
import { stringify } from 'query-string';

import { Button } from 'react-admin';

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
      search: stringify({ filter: JSON.stringify({ ticket_id: record.id }) })
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
