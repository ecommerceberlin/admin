import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import get from 'lodash/get';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

import { changeCompanyAdmin } from '../../redux';

const styles = {
  adminNotSet: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#cccccc',
    cursor: 'pointer'
  },

  adminSet: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
    cursor: 'pointer'
  }
};

class SelectAdminField extends React.Component {
  state = {
    control: 'chip',
    admin_id: 0
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.admin_id && props.record.admin_id) {
      return {
        control: state.control,
        admin_id: props.record.admin_id
      };
    }

    return null;
  }

  handleClick = name => event => {
    this.setState({ control: 'select' });
  };

  handleClose = name => event => {
    this.setState({
      control: 'chip'
    });
  };

  handleStatusChange = name => event => {
    const { changeCompanyAdmin, record, admins, basePath } = this.props;

    this.setState(
      {
        //control : "chip",
        admin_id: event.target.value
      },
      function() {
        const { admin_id } = this.state;

        changeCompanyAdmin(record.id, { admin_id: admin_id }, basePath);
      }
    );
  };

  select() {
    const { classes, admins } = this.props;
    const { admin_id } = this.state;

    return (
      <Select
        value={admin_id}
        onChange={this.handleStatusChange()}
        onClose={this.handleClose()}
        open={true}
      >
        {admins.list.ids.map(id => (
          <MenuItem key={id} value={id}>
            {`${get(admins.data[id], 'fname')} ${get(
              admins.data[id],
              'lname'
            )}`}
          </MenuItem>
        ))}
      </Select>
    );
  }

  chip() {
    const { classes, admins } = this.props;
    const { admin_id } = this.state;

    if (!admin_id) {
      return (
        <Avatar className={classes.adminNotSet} onClick={this.handleClick()} />
      );
    }

    return (
      <Avatar className={classes.adminSet} onClick={this.handleClick()}>
        {get(admins.data[admin_id], 'initials')}
      </Avatar>
    );
  }

  render() {
    const { control } = this.state;
    return this[control]();
  }
}

SelectAdminField.defaultProps = {
  record: {},
  admins: {}
};

const enhance = compose(
  withStyles(styles),
  connect(
    state => ({ admins: state.admin.resources.admins }),
    { changeCompanyAdmin }
  )
);

export default enhance(SelectAdminField);
