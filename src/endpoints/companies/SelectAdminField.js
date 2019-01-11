import React from 'react';
import { connect } from 'react-redux';
import { showNotification, refreshView, UPDATE } from 'react-admin';

import compose from 'recompose/compose';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/Edit';

import dataProvider from '../../api/httpClient';
import deepOrange from '@material-ui/core/colors/deepOrange';

import { changeCompanyAdmin } from '../../redux';

const styles = {
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  }
};

const admins = [
  { id: '1', name: 'AZ' },
  { id: '2', name: 'JP' },
  { id: '3', name: 'MZ' },
  { id: '4', name: 'MT' }
];

class SelectAdminField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      control: 'chip',
      admin_id: this.props.record.admin_id
    };
  }

  handleClick = name => event => {
    this.setState({ control: 'select' });
  };

  handleStatusChange = name => event => {
    const { changeCompanyAdmin, resource, record, basePath } = this.props;

    this.setState(
      {
        //control : "chip",
        admin_id: event.target.value
      },
      function() {
        const { admin_id } = this.state;

        changeCompanyAdmin(record.id, admin_id, basePath);
      }
    );
  };

  handleClose = name => event => {
    this.setState({
      control: 'chip'
    });
  };

  select() {
    const { classes, record, source, ...rest } = this.props;
    const { admin_id } = this.state;

    return (
      <Select
        value={admin_id}
        onChange={this.handleStatusChange()}
        onClose={this.handleClose()}
        open={true}
      >
        {admins
          .filter(({ id }) => record.admin_id != id)
          .map(({ id, name }) => (
            <MenuItem
              classes={{
                root: classes[id]
              }}
              key={id}
              value={id}
            >
              {name}
            </MenuItem>
          ))}
      </Select>
    );
  }

  chip() {
    const { classes, record, source, ...rest } = this.props;
    const { status } = this.state;

    // console.log("new status", status);

    // label={record[source]}

    return (
      <Avatar className={classes.orangeAvatar} onClick={this.handleClick()}>
        AZ
      </Avatar>
    );
  }

  render() {
    const { control } = this.state;

    return this[control]();
  }
}

const enhance = compose(
  withStyles(styles),
  connect(
    null,
    { changeCompanyAdmin }
  )
);

export default enhance(SelectAdminField);
