import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  NumberField,
  ChipField,
  ShowButton,
  DisabledInput,
  TextInput,
  SelectInput,
  Filter
} from 'react-admin';

import { activeEventId, statuses } from '../../api/app';
import { ReferenceField } from 'react-admin';
import { SetStatusAction, SendMessageAction } from '../../components';
import PurchaseStatusField from './PurchaseStatusField';

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

const ViewList = props => (
  <List
    bulkActionButtons={<CustomBulkActions />}
    {...props}
    perPage={50}
    filters={<Filters />}
    filter={{ event_id: activeEventId() }}
  >
    <Datagrid>
      <PurchaseStatusField source="status" />

      <TextField source="email" />

      <DateField source="created_at" showTime />

      <NumberField source="amount" textAlign="right" />

      <ReferenceField label="Company" reference="companies" source="company_id">
        <ChipField source="slug" sortable={false} />
      </ReferenceField>

      <ShowParticipantButton />
    </Datagrid>
  </List>
);

export default ViewList;
