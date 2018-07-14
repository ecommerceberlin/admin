import React, { Component } from 'react';
import { connect } from 'react-redux';
import { crudUpdateMany } from 'react-admin';
import Confirm from './Confirm';
import EmailForm from './EmailForm'

class SendMessageAction extends Component {

  handleDialogClose = () => {
      this.props.onExit();
  };

  handleConfirm = () => {
      const { basePath, crudUpdateMany, resource, selectedIds } = this.props;
      crudUpdateMany(resource, selectedIds, { views: 0 }, basePath);
      this.props.onExit();
  };

  render() {
      return (
          <Confirm
              fullWidth={true}
              isOpen={true}
              title="Update View Count"
              content={
                <EmailForm />
              }
              confirm="No dobra!"
              onConfirm={this.handleConfirm}
              onClose={this.handleDialogClose}
          >
            <EmailForm />
          </Confirm>
      );
  }
}

export default connect(undefined, { crudUpdateMany })(SendMessageAction);
