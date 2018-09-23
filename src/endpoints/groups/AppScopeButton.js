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
import dataProvider from '../../api/httpClient';

import { changeEvent } from '../../redux';

class ActiveEventButton extends Component {
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
    const { label, labelSelected, record, activeEvent } = this.props;

    const selected = 'id' in activeEvent && record.id == activeEvent.id;

    return (
      <Button
        disabled={selected}
        variant={selected ? 'raised' : 'outlined'}
        color="primary"
        onClick={this.handleClick}
      >
        {selected ? labelSelected : label}
      </Button>
    );
  }
}

ActiveEventButton.defaultProps = {
  label: 'Select',
  labelSelected: 'Selected'
};

ActiveEventButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func
};

export default connect(
  state => ({ activeEvent: state.app.event }),
  {
    showNotification: showNotificationAction,
    refreshView: refreshViewAction,
    // push: pushAction,
    changeEvent: changeEvent
  }
)(ActiveEventButton);
