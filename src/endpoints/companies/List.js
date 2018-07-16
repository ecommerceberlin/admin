import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  BooleanField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from 'react-admin';

import activeEventId from '../../api/app';

const ViewList = props => (
  <List
    {...props}
    filter={{ event_id: activeEventId() }}
    bulkActions={false}
    perPage={100}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="profile.name" />
      <BooleanField source="featured" />
      <TextField source="average_note" />
      <TextField source="lang" />
      <EditButton basePath="/companies" />
    </Datagrid>
  </List>
);

export default ViewList;
