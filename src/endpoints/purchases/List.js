import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  NumberField,
  ChipField,
  ShowButton,
  TextInput,
  SelectInput,
  Filter
} from 'react-admin';

import { statuses } from '../../api/app';
import { ReferenceField } from 'react-admin';
import {
  SetStatusAction,
  SendMessageAction,
} from '../../components';
import PurchaseStatusField from './PurchaseStatusField';
import { useEventId } from '../../api';

const Filters = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />

    <SelectInput source="status" choices={statuses} alwaysOn />
  </Filter>
);

const CustomBulkActions = props => (
  <React.Fragment>
    <SetStatusAction label="Change status" {...props} />
    <SendMessageAction label="Send e-mail message" {...props} />
  </React.Fragment>
);

const ShowParticipantButton = ({ record, basePath, ...rest }) => (
  <ShowButton
    {...rest}
    basePath="/participants"
    record={{ ...record, id: record.participant_id }}
  />
);

const ViewList = props => {

  const activeEventId = useEventId()
  
  return (
    <List
    bulkActionButtons={<CustomBulkActions />}
    {...props}
    perPage={50}
    filters={<Filters />}
    filter={{ event_id: activeEventId }}
    exporter={false}
  >
    <Datagrid>
      <PurchaseStatusField source="status" />
  
      <TextField source="email" />
  
      <DateField source="created_at" showTime />
  
      <NumberField source="amount" textAlign="right" />
  
      <ReferenceField
        label="Company"
        reference="companies"
        source="company_id"
        linkType="show"
      >
        <ChipField source="slug" sortable={false} />
      </ReferenceField>
  
      <ShowParticipantButton />
    </Datagrid>
  </List>
  );

}

export default ViewList;
