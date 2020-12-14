import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';
import { Confirm } from 'react-admin';
import Forward from '@material-ui/icons/Forward';

class SetStatusAction extends Component {
  handleDialogClose = () => {
    this.props.onExit();
  };

  handleConfirm = () => {
    const { basePath, crudUpdateMany, resource, selectedIds } = this.props;
    crudUpdateMany(resource, selectedIds, { views: 0 }, basePath);
    this.props.onExit();
  };

  showDialog = () => {};

  render() {
    return (
      <Button label="actions.change_status" onClick={this.showDialog}>
        <Forward />
      </Button>
    );

    return (
      <Confirm
        isOpen={true}
        title="Update View Count"
        content="Are you sure you want to reset the views for these items?"
        onConfirm={this.handleConfirm}
        onClose={this.handleDialogClose}
      />
    );
  }
}

export default connect(
  undefined,
  { crudUpdateMany }
)(SetStatusAction);
