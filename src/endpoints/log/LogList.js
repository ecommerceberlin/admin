import React from 'react';

import {
List,
Datagrid,
EditButton,
TextField
} from 'react-admin';

import {useApiContext } from '../../api'

const ViewList = props => {

  const [group_id, event_id] = useApiContext()

  return (<List
  {...props}
  //  actions={ <TicketListActions /> }
  perPage={100}
  // filters={<TicketListFilters />}
  filter={{ event_id }}
  exporter={false}
  //  aside={<TicketListAside />}
  // bulkActionButtons={ <TicketListBulkActions />}
  sort={{ field: 'start', order: 'DESC' }}

  >
  <Datagrid 
  //expand={<TicketListQuickLookup />}
  >

  <TextField source="xxx" />

  </Datagrid>
  </List>);

} 

export default ViewList;
