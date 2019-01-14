import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import get from 'lodash/get';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

import { changeCompanyAdmin } from '../../../redux';
import { showDialog, hideDialog } from '../../../redux';

import Admins from '../../../components/BulkActions/Admins';

const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
    cursor: 'pointer'
  },

  adminNotSet: {
    backgroundColor: '#cccccc'
  },

  adminSet: {
    backgroundColor: deepOrange[500]
  }
};

class SelectAdminField extends React.Component {
  onQuit = () => {
    this.props.hideDialog();
  };

  handleConfirm = id => {
    const { changeCompanyAdmin, record, basePath } = this.props;
    //this should be rather taken from REDUX....
    //in order to facilitate showDialog / onConfirm / error handling
    changeCompanyAdmin(record.id, { admin_id: id }, basePath);
    this.onQuit();
  };

  showAction = name => event => {
    const { showDialog, label, record } = this.props;

    showDialog({
      title: record.slug,
      content: (
        <div>
          <Admins onClick={this.handleConfirm} selected={record.admin_id} />
        </div>
      ),
      //onConfirm: this.handleConfirm,
      onClose: this.onQuit
    });
  };

  render() {
    const { classes, admins, record } = this.props;

    return (
      <Avatar
        className={classNames({
          [classes.avatar]: true,
          [classes.adminNotSet]: !record.admin_id,
          [classes.adminSet]: record.admin_id
        })}
        onClick={this.showAction()}
      >
        {record.admin_id ? get(admins.data[record.admin_id], 'initials') : ''}
      </Avatar>
    );
  }
}

SelectAdminField.defaultProps = {
  label: '',
  record: {},
  admins: {}
};

const enhance = compose(
  withStyles(styles),
  connect(
    state => ({ admins: state.admin.resources.admins }),
    { showDialog, hideDialog, changeCompanyAdmin }
  )
);

export default enhance(SelectAdminField);
