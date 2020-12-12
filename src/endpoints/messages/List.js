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
import {
  SetStatusAction,
  SendMessageAction,
  WithEvent
} from '../../components';

import FilterByUserId from './FilterByUserId';

const Filters = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />

    <FilterByUserId alwaysOn />

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

const CustomBulkActions = props => (
  <React.Fragment>
    <SetStatusAction label="Change status" {...props} />
    <SendMessageAction label="Send e-mail message" {...props} />
  </React.Fragment>
);

const ViewList = props => (
  <WithEvent>
    {activeEventId => (
      <List
        {...props}
        perPage={100}
        filters={<Filters />}
        filter={{ event_id: activeEventId }}
        bulkActionButtons={<CustomBulkActions />}
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
          <ShowButton />
        </Datagrid>
      </List>
    )}
  </WithEvent>
);

export default ViewList;
