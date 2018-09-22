import React from 'react';
import { connect } from 'react-redux';

import {
  showNotification as showNotificationAction,
  refreshView as refreshViewAction,
  UPDATE
} from 'react-admin';
import Switch from '@material-ui/core/Switch';
import dataProvider from '../../api/httpClient';

class Flagswitch extends React.Component {
  constructor(props) {
    super(props);
    const { record, source, checkedValue } = this.props;
    this.state = { status: record[source] == checkedValue ? true : false };
  }

  handleChange = name => event => {
    const {
      record,
      resource,
      source,
      showNotification,
      refreshView,
      checkedValue,
      unCheckedValue
    } = this.props;

    this.setState({
      status: event.target.checked
    });

    dataProvider(UPDATE, resource, {
      id: record.id,
      data: { [source]: event.target.checked ? checkedValue : unCheckedValue }
    })
      .then(({ data }) => {
        showNotification('changed', 'info');
        // refreshView();
      })
      .catch(e => {
        console.error(e);
        showNotification('Error: ', 'warning');
      });
  };

  render() {
    const { status } = this.state;
    const { checkedValue } = this.props;

    return (
      <Switch
        checked={status ? true : false}
        onChange={this.handleChange()}
        value={checkedValue}
      />
    );
  }
}

Flagswitch.defaultProps = {
  addLabel: true,
  checkedValue: '1',
  unCheckedValue: '0'
};

export default connect(
  null,
  {
    showNotification: showNotificationAction,
    refreshView: refreshViewAction
  }
)(Flagswitch);
