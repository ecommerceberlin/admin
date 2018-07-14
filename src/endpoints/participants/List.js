import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  ChipField,
  ShowButton,
  DisabledInput,
  TextInput,
  SelectInput,
  Filter
} from 'react-admin';
import { ReferenceArrayField, SingleFieldList } from 'react-admin';

const Filters = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />

    <SelectInput
      source="tag"
      choices={[
        { id: 'programming', name: 'Programming' },
        { id: 'lifestyle', name: 'Lifestyle' },
        { id: 'photography', name: 'Photography' }
      ]}
    />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    perPage={100}
    filters={<Filters />}
    filter={{ event_id: 76 }}
  >
    <Datagrid>
      <TextField source="email" />
      <TextField source="status" />

      <ReferenceArrayField
        label="Roles"
        reference="tickets"
        source="ticket_ids"
      >
        <SingleFieldList>
          <ChipField source="role" />
        </SingleFieldList>
      </ReferenceArrayField>

      <DateField source="created_at" showTime />
      <TextField source="amount" />
      <ShowButton basePath="/purchases" />
    </Datagrid>
  </List>
);

export default ViewList;
