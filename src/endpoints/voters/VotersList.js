import React from 'react';
import { cloneElement } from 'react';

import {
  TopToolbar,
  ExportButton,
  List,
  Datagrid,
  TextField,
  EditButton,
  DateField
} from 'react-admin';

import {useApiContext } from '../../api'
// import TicketTags from './components/TicketTags';

const ListActions = (props) => (
  <TopToolbar>
      
      <ExportButton  maxResults="50000" />
     
    
  </TopToolbar>
);


const ViewList = props => {

  const [group_id, event_id] = useApiContext()
  return (
    
  <List
    {...props}
    actions={ <ListActions /> }
    perPage={100}
  //  filters={ TicketListFilters }
    filter={{ group_id }}
   // exporter={false}
   // aside={<TicketListAside />}
   // bulkActionButtons={ <TicketListBulkActions />}
    sort={{ field: 'start', order: 'DESC' }}
   
  >
  <Datagrid>

  <DateField source="voted_at" showTime />
  <TextField source="account.email" />
  <TextField source="account.fname" />
  <TextField source="account.lname" />
  <TextField source="account.locale" />
  <TextField source="contestant.email" label="Voted on" />

  </Datagrid>
  </List>
      
  );
} 

export default ViewList;
