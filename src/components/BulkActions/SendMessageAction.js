import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudCreate } from 'react-admin';
import MyDialog from '../MyDialog';
import EmailForm from '../EmailForm';
import Email from '@material-ui/icons/Email';

/* 

  PROPS

  resource: 
  basePath: 
  filterValues:
  selectedIds:

*/

class SendMessageAction extends Component {
  state = {
    dialog: false
  };

  handleDialogClose = () => {
    this.setState({ dialog: false });
  };

  handleConfirm = () => {
    const { basePath, crudCreate, resource, selectedIds } = this.props;
    crudCreate(
      'messages',
      { resource, ids: selectedIds, views: 0 },
      basePath,
      false
    );
    this.setState({ dialog: false });
    this.props.onExit();
  };

  showDialog = () => {
    this.setState({ dialog: true });
  };

  render() {
    console.log(this.props);

    const { label } = this.props;

    if (this.state.dialog) {
      return (
        <MyDialog
          fullWidth={true}
          isOpen={true}
          title={label}
          content={<EmailForm />}
          confirm="No dobra!"
          onConfirm={this.handleConfirm}
          onClose={this.handleDialogClose}
        />
      );
    }

    return (
      <Button label={label} onClick={this.showDialog}>
        <Email />
      </Button>
    );
  }
}

SendMessageAction.defaultProps = {
  onExit: function() {},
  label: 'actions.send_message'
};

export default connect(
  undefined,
  { crudCreate }
)(SendMessageAction);
