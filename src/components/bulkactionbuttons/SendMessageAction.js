import React, { Component } from 'react';
import { Button, showNotification, useCreate } from 'react-admin';
import EmailForm from '../EmailForm';
import Email from '@mui/icons-material/Email';
/* 

  PROPS

  resource: 
  basePath: 
  filterValues:
  selectedIds:

*/

class SendMessageAction extends Component {
  onQuit = () => {
    this.props.hideDialog();
  };

  handleConfirm = () => {
    const {
      message,
      basePath,
      crudCreate,
      showNotification,
      resource,
      selectedIds
    } = this.props;

    //do not even show notification
    if (!message) {
      return;
    }

    const { subject, text, senderName, senderEmail } = message;

    if (subject.length < 10 || text.length < 10) {
      showNotification('Message too short!', 'warning');
      return;
    }

    // crudCreate(
    //   'messages',
    //   { resource, ids: selectedIds, ...message },
    //   basePath,
    //   false
    // );
  };

  showDialog = () => {
    const { label, showDialog } = this.props;

    showDialog({
      title: label,
      content: <EmailForm />,
      onConfirm: this.handleConfirm,
      onClose: this.onQuit
    });
  };

  render() {
    const { label } = this.props;

    return (
      <Button label={label} onClick={this.showDialog}>
        <Email />
      </Button>
    );
  }
}

SendMessageAction.defaultProps = {
  label: 'actions.send_message'
};

export default SendMessageAction