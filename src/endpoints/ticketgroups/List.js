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

import {activeEventId} from '../../api/app';

const TagsField = ({ record }) => (
  <ul>
    {record.tags.map(item => (
      <li key={item.name}>{item.name}</li>
    ))}
  </ul>
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
  <List {...props} perPage={100} filter={{ event_id: activeEventId() }}>
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
          tertiaryText={record => `${record.price} (${record.limit})`}
        />
      </ReferenceManyField>

      <EditButton />
    </Datagrid>
  </List>
);

export default ViewList;
