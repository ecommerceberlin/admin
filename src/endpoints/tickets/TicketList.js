import React from 'react';

import {
  List,
  Datagrid,
  EditButton
} from 'react-admin';

import { 
  DotField
} from '../../components';

import {
  TicketListActions,
  TicketListFilters,
  TicketListAside,
  TicketListBulkActions,
  TicketListQuickLookup
} from './components'

import {useApiContext } from '../../api'
// import TicketTags from './components/TicketTags';

import {SalesField, TicketNameField, TicketPriceField} from './fields'



const ViewList = props => {

  const [group_id, event_id] = useApiContext()
  return (
    
  <List
    {...props}
    actions={ <TicketListActions /> }
    perPage={100}
    filters={<TicketListFilters />}
    filter={{ event_id }}
    exporter={false}
    aside={<TicketListAside />}
    bulkActionButtons={ <TicketListBulkActions />}
    sort={{ field: 'start', order: 'DESC' }}
   
  >
  <Datagrid expand={<TicketListQuickLookup />}>

  <TicketNameField label="Name" />
  <TicketPriceField label="Price" />  
  <SalesField label="Sales" />

  <DotField label="Status" options={{
    red: (record) => record && record.status === 0,
    orange: (record) => record && record.status === 1,
    green: (record) => record && record.status === 2,
    blue: (record) => record && record.status === 3
  }} />
   
  <EditButton />
  </Datagrid>
  </List>
      
  );
} 

export default ViewList;
