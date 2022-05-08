import React from 'react';
import PropTypes from 'prop-types';
import ImageEye from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
//import { linkToRecord } from 'ra-core';
import { stringify } from 'qs';

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
      search: stringify(
        { filter: JSON.stringify({ ticket_id: record.id }) },
        { strictNullHandling: true }
      )
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
