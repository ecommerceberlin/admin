import React from 'react';
import {
  List,
  Datagrid,
  NumberField,
  EditButton,
  ReferenceManyField
} from 'react-admin';

import BoothColorField from './fields/BoothColorField'
import { useApiContext } from '../../api';

const TicketGroupList = props => {

  const [group_id, event_id] = useApiContext()

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
