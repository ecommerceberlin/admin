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
  Filter,
  ReferenceManyField,
  SimpleList
} from 'react-admin';

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

const ViewList = props => (
  <List
    {...props}
    perPage={100}
    filters={<Filters />}
    filter={{ event_id: 76 }}
  >
    <Datagrid>
      <BoothColorField source="name" />
      <TagsField source="tags" />
      <NumberField source="limit" />

      <ReferenceManyField
        label="Assigned tickets"
        reference="tickets"
        target="ticket_group_id"
      >
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `${record.start} - ${record.end}`}
          tertiaryText={record =>
            `Limit: ${record.limit} Price: ${record.price}`
          }
        />
      </ReferenceManyField>

      <ShowButton basePath="/purchases" />
    </Datagrid>
  </List>
);

export default ViewList;
