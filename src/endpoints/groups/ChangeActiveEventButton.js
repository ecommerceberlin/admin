// in src/comments/ApproveButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  showNotification as showNotificationAction,
  refreshView as refreshViewAction,
  UPDATE
} from 'react-admin';
//import { push as pushAction } from 'react-router-redux';
import dataProvider from '../../api/httpClient';

class ChangeActiveEventButton extends Component {
  handleClick = () => {
    /*
        basePath,
        push
        record
        resource,
        showNotification
        */

    const {
      //push,
      record,
      showNotification,
      refreshView,
      resource
    } = this.props;

    dataProvider(UPDATE, resource, {
      id: record.group_id,
      data: {
        active_event_id: record.id
      }
    })
      .then(({ data }) => {
        showNotification('Active event changed!', 'info');
        refreshView();
      })
      .catch(e => {
        console.error(e);
        showNotification('Error', 'warning');
      });

    // const updatedRecord = { ...record, is_approved: true };
    // fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
    //   .then(() => {
    //     showNotification('Comment approved');
    //     //      push('/comments');
    //   })
    //   .catch(e => {
    //     console.error(e);
    //     showNotification('Error: comment not approved', 'warning');
    //   });
  };

  render() {
    const { label, labelSelected, record } = this.props;

    const selected = !!+record.is_active;

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

ChangeActiveEventButton.defaultProps = {
  label: 'Set Active',
  labelSelected: 'Active'
};

ChangeActiveEventButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func
};

export default connect(
  null,
  {
    showNotification: showNotificationAction,
    refreshView: refreshViewAction
    //    push: pushAction,
  }
)(ChangeActiveEventButton);
