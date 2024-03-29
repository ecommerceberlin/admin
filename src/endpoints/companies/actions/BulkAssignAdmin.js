import React, {useCallback} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, showNotification } from 'react-admin';
import Icon from '@material-ui/icons/SupervisorAccount';
import { showDialog, hideDialog } from '../../../redux';

import { Admins } from '../../../components';
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

const BulkAssignAdmin = ({ basePath, selectedIds= [], label='actions.send_message'}) => {

  const dispatch = useDispatch()

  const handleConfirm = useCallback(id => {

    //we could filter selectedIds to change only what really differs?
    dispatch(bulkChangeCompanyAdmin(selectedIds, { admin_id: id }, basePath));
    dispatch(hideDialog())
  });
  
  const handleDialog = () => dispatch(showDialog({
      title: `${label} ${selectedIds.length} records`,
      content: (
        <div>
          <Admins onClick={handleConfirm} />
        </div>
      ),
      //onConfirm: this.handleConfirm,
      onClose: () => dispatch(hideDialog())
  }));
  
  return (
    <Button label={label} onClick={handleDialog}>
      <Icon />
    </Button>
  );

} 

export default BulkAssignAdmin


// connect(
//   null,
//   { bulkChangeCompanyAdmin, showNotification, showDialog, hideDialog }
// )();
