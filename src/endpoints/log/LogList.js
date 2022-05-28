import React from 'react';

import {
List,
Datagrid,
EditButton,
TextField
} from 'react-admin';

import { useEventId } from '../../contexts';

const ViewList = props => {

  const event_id = useEventId()

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
