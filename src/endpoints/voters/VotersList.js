import React from 'react';
import { cloneElement } from 'react';

import {
  TopToolbar,
  ExportButton,
  List,
  Datagrid,
  TextField,
  DeleteButton,
  DateField
} from 'react-admin';

import { useGroupId } from '../../contexts';
// import TicketTags from './components/TicketTags';
import FilterByAppId from './filters/FilterByAppId'

const ListActions = (props) => (
  <TopToolbar>
      <ExportButton  maxResults="50000" />    
  </TopToolbar>
);


const ViewList = props => {


  const group_id = useGroupId()
  return (
    
  <List
    {...props}
    actions={ <ListActions /> }
    perPage={100}
    filters={ [<FilterByAppId label="Linkedin App" source="linkedin_client_id" alwaysOn />] }
    filter={{ group_id }}
   // exporter={false}
   // aside={<TicketListAside />}
   // bulkActionButtons={ <TicketListBulkActions />}
    sort={{ field: 'id', order: 'DESC' }}
   
  >
  <Datagrid>

  <DateField source="voted_at" showTime />
  <TextField source="account.email" />
  <TextField source="account.fname" />
  <TextField source="account.lname" />
  <TextField source="account.locale" />
  <TextField source="contestant.email" label="Voted on" />
  <DeleteButton />
  
  </Datagrid>
  </List>
      
  );
} 

export default ViewList;
