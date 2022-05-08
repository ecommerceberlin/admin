import React, {useCallback} from 'react';
import { Button, showNotification } from 'react-admin';
import Icon from '@mui/icons-material/SupervisorAccount';
import { Admins } from '../../../components';



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
