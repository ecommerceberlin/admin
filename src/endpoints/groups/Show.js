import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TextField,
  DateField,
  EditButton,
  ChipField
} from 'react-admin';

import Btn from './ActiveEventButton';

import ActiveEventChipField from './ActiveEventChipField';

const Title = ({ record }) => {
  return <span>{record ? `${record.name} events` : ''}</span>;
};

const ViewShow = props => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <ArrayField source="events">
        <Datagrid>
          <ActiveEventChipField source="name" />

          <TextField source="loc" />
          <DateField source="starts" showTime />
          <DateField source="ends" showTime />

          <Btn />
          <Btn label="Set active" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

export default ViewShow;
