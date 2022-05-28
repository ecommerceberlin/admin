import React from 'react';
import {
  List,
  Datagrid,
  NumberField,
  EditButton,
  ReferenceManyField
} from 'react-admin';

import BoothColorField from './fields/BoothColorField'
import { useEventId } from '../../contexts'; 


const TicketGroupList = props => {

  const event_id = useEventId()

  return (
    <List 
      perPage={100}
      filter={{ event_id }} 
      exporter={false}
      bulkActionButtons={false}
      sort={{ field: 'name', order: 'ASC' }}
      {...props} 
    >
      <Datagrid expand={<div/>}>
        <BoothColorField source="name" />
        
        <NumberField source="limit" />
        <NumberField source="tickets" label="Assigned"/>
        <NumberField source="available" />

        <EditButton />
      </Datagrid>
    </List>
  );


}

export default TicketGroupList;
