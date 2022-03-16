import React from 'react';

import {
  List,
  Datagrid,
  EditButton
} from 'react-admin';

import { 
  DotField,
  CloneItemsButton
} from '../../components';

import {
  TicketListActions,
  TicketListFilters,
  TicketListAside,
  TicketListQuickLookup
} from './components'

import {useApiContext } from '../../api'
// import TicketTags from './components/TicketTags';

import {SalesField, TicketNameField, TicketPriceField} from './fields'


const BulkActions = (props) => (
  <React.Fragment>
    <CloneItemsButton {...props} />
  </React.Fragment>
)

const ViewList = props => {

  const [group_id, event_id] = useApiContext()
  return (
    
  <List
    {...props}
   // actions={ <TicketListActions /> }
    perPage={100}
    filters={ TicketListFilters }
    filter={{ event_id }}
    exporter={false}
    aside={<TicketListAside />}
    bulkActionButtons={ <BulkActions />}
    sort={{ field: 'start', order: 'DESC' }}
   
  >
  <Datagrid expand={<TicketListQuickLookup />}>

  <TicketNameField label="Name" />
  <TicketPriceField label="Price" />  
  <SalesField label="Sold" />

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
