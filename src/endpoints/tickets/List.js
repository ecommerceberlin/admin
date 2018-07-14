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
  NumberField,
  ShowButton,
  DisabledInput,
  TextInput,
  SelectInput,
  Filter
} from 'react-admin';
import { ArrayField, SingleFieldList } from 'react-admin';

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

const TagsField = ({ record }) => (
  <ul>{record.tags.map(item => <li key={item.name}>{item.name}</li>)}</ul>
);
TagsField.defaultProps = { addLabel: true };

const ViewList = props => (
  <List
    {...props}
    perPage={100}
    filters={<Filters />}
    filter={{ event_id: 76 }}
  >
    <Datagrid>
      <TextField source="name" />
      <ChipField source="role" />

      <TagsField />

      {/* <ArrayField source="tags">
            <SingleFieldList>
            <ChipField source="name" />
            </SingleFieldList>
            </ArrayField> */}

      <DateField source="start" showTime />
      <DateField source="end" showTime />

      <TextField source="price" />
      <NumberField source="limit" />

      <ShowButton basePath="/purchases" />
    </Datagrid>
  </List>
);

export default ViewList;
