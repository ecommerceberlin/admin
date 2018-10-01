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

/*

basePath: "/groups"
classes: {root: "ShowActions-root-53"}
data: undefined
hasCreate: false
hasEdit: false
hasList: true
hasShow: true
history: {length: 50, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
id: "23"
location: {pathname: "/groups/23/show", search: "", hash: "", state: undefined}
match: {path: "/groups/:id/show", url: "/groups/23/show", isExact: true, params: {…}}
options: {label: "Events"}
permissions: null
resource: "groups"

*/

class SelectAll extends Component {
  handleClick = () => {
    const { groupId, showNotification, refreshView, changeEvent } = this.props;

    alert(groupId);

    return;

    dataProvider(GET_ONE, 'groups', { groupId })
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
    const { label, labelSelected, groupId } = this.props;

    return (
      <Button
        //disabled={record.id === activeEventId ? true : false}
        //variant={record.id === activeEventId ? 'raised' : 'flat'}
        color="primary"
        onClick={this.handleClick}
      >
        {label}
      </Button>
    );
  }
}

SelectAll.defaultProps = {
  label: 'Select All',
  labelSelected: 'Selected',
  groupId: 0
};

SelectAll.propTypes = {
  showNotification: PropTypes.func,
  refreshView: PropTypes.func
  //  groupId : PropTypes.number.isRequired
};

export default connect(
  null,
  {
    showNotification: showNotificationAction,
    refreshView: refreshViewAction,
    // push: pushAction,
    changeEvent: changeEvent
  }
)(SelectAll);
