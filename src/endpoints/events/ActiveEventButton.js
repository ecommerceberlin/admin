// in src/comments/ApproveButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  showNotification as showNotificationAction,
  refreshView as refreshViewAction,
  GET_ONE
} from 'react-admin';
import { push as pushAction } from 'react-router-redux';
import dataProvider from '../../api/httpClient';

import { changeEvent } from '../../redux';

class ActiveEventButton extends Component {
  handleClick = () => {
    /*
        basePath,
        push
        record
        resource,
        showNotification
        */

    const {
      push,
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
        showNotification('Error: comment not approved', 'warning');
      });

    return;

    const updatedRecord = { ...record, is_approved: true };
    fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
      .then(() => {
        showNotification('Comment approved');
        //      push('/comments');
      })
      .catch(e => {
        console.error(e);
        showNotification('Error: comment not approved', 'warning');
      });
  };

  render() {
    return (
      <Button color="primary" onClick={this.handleClick}>
        Choose
      </Button>
    );
  }
}

ActiveEventButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func
};

export default connect(
  null,
  {
    showNotification: showNotificationAction,
    refreshView: refreshViewAction,
    push: pushAction,
    changeEvent: changeEvent
  }
)(ActiveEventButton);
