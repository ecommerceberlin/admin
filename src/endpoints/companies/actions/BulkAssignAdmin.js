import React from 'react';
import { connect } from 'react-redux';
import { Button, showNotification } from 'react-admin';
import Icon from '@material-ui/icons/SupervisorAccount';
import { showDialog, hideDialog } from '../../../redux';

import Admins from '../../../components/BulkActions/Admins';
import { bulkChangeCompanyAdmin } from '../../../redux';

/* 

PROPS
==================================
basePath: "/companies"
filterValues: {present: true, featured: false, admin_id: 5}
label: "Assign an admin"
resource: "companies"
selectedIds: [1]

*/

class BulkAssignAdmin extends React.Component {
  onQuit = () => {
    const { hideDialog } = this.props;
    hideDialog();
  };

  handleConfirm = id => {
    const {
      basePath,
      bulkChangeCompanyAdmin,
      //   showNotification,
      selectedIds
    } = this.props;

    //we could filter selectedIds to change only what really differs?
    bulkChangeCompanyAdmin(selectedIds, { admin_id: id }, basePath);
    this.onQuit();
  };

  handleDialog = () => {
    const { label, showDialog, selectedIds } = this.props;

    showDialog({
      title: `${label} ${selectedIds.length} records`,
      content: (
        <div>
          <Admins onClick={this.handleConfirm} />
        </div>
      ),
      //onConfirm: this.handleConfirm,
      onClose: this.onQuit
    });
  };

  render() {
    const { label } = this.props;

    return (
      <Button label={label} onClick={this.handleDialog}>
        <Icon />
      </Button>
    );
  }
}

BulkAssignAdmin.defaultProps = {
  selectedIds: [],
  label: 'actions.send_message'
};

export default connect(
  null,
  { bulkChangeCompanyAdmin, showNotification, showDialog, hideDialog }
)(BulkAssignAdmin);
