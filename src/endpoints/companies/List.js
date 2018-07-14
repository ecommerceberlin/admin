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
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

const ViewList = props => (
  <List {...props} bulkActions={false} perPage={50}>
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
