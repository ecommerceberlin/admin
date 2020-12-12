import React from 'react';
import {
  List,
  Datagrid,
  ChipField,
  NumberField,
  EditButton,
  ReferenceManyField,
  SimpleList
} from 'react-admin';


import { useApiContext } from '../../api';

const BoothColorField = ({ record, ...rest }) => (
  <ChipField
    style={{
      backgroundColor: record.booth.bgcolor,
      color: record.booth.fontcolor
    }}
    record={record}
    {...rest}
  />
);
BoothColorField.defaultProps = { addLabel: true };

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
        <NumberField source="tickets" />
        <NumberField source="available" />

        <EditButton />
      </Datagrid>
    </List>
  );


}

export default TicketGroupList;
