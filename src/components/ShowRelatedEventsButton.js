import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import get from 'lodash/get';
import { stringify } from 'qs';

import Button from '@mui/material/Button';

/*

basePath
limits
locale
record
resource
translate

*/
const ShowRelatedEventsButton = ({
  basePath = '',
  limits,
  locale,
  record = {},
  resource,
  translate
}) =>
  get(limits, resource, true) ? (
    <Button
      color="primary"
      //    icon={<Icon />}
      containerElement={
        <Link
          to={{
            pathname: `/events/create`,
            search: stringify({ participant_id: record.id })
            //search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
          }}
        />
      }
    >
      {translate('resources.visitors.actions.invite')}
    </Button>
  ) : (
    <Button
      disabled
      //    icon={<Icon />}
    >
      {translate('resources.visitors.actions.invite')}
    </Button>
  );

ShowRelatedEventsButton.defaultProps = {
  // limit : false,
  // subtitle : false
};

const mapStateToProps = state => ({
  limits: state.resourcelimit
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    null
  )
);

export default enhance(ShowRelatedEventsButton);
