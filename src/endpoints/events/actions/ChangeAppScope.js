import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  showNotification as showNotificationAction,
  refreshView as refreshViewAction,
  GET_ONE
} from 'react-admin';
//import { push as pushAction } from 'react-router-redux';
import dataProvider from '../../../api/httpClient';

import { changeEvent } from '../../../redux';

class ChangeAppScopeForEvent extends Component {
  handleClick = () => {
    const {
      // push,
      record,
      showNotification,
      refreshView,
      changeEvent
    } = this.props;

    dataProvider(GET_ONE, 'events', { id: record.id })
      .then(({ data }) => {
        changeEvent(data);

        showNotification('Event changed!', 'info');

        refreshView();
      })
      .catch(e => {
        console.error(e);
        showNotification('Error when updating...', 'warning');
      });
  };

  render() {
    const { label, labelSelected, record, activeEventId } = this.props;

    if (!record || !'id' in record || !record.id) {
      return null;
    }

    return (
      <Button
        disabled={record.id === activeEventId ? true : false}
        variant={record.id === activeEventId ? 'raised' : 'flat'}
        color="primary"
        onClick={this.handleClick}
      >
        {record.id === activeEventId ? labelSelected : label}
      </Button>
    );
  }
}

ChangeAppScopeForEvent.defaultProps = {
  label: 'Select',
  labelSelected: 'Selected',
  activeEventId: 0
};

ChangeAppScopeForEvent.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
  activeEventId: PropTypes.number.isRequired
};

export default connect(
  null,
  {
    showNotification: showNotificationAction,
    refreshView: refreshViewAction,
    // push: pushAction,
    changeEvent: changeEvent
  }
)(ChangeAppScopeForEvent);
