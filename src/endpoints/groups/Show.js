import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TextField,
  DateField
} from 'react-admin';

import AppScopeButton from './AppScopeButton';
import ChangeActiveEventButton from './ChangeActiveEventButton';

const Title = ({ record }) => {
  return <span>{record ? `${record.name} events` : ''}</span>;
};

const ViewShow = props => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <ArrayField source="events">
        <Datagrid>
          <TextField source="name" />
          <TextField source="loc" />
          <DateField source="starts" showTime />
          <DateField source="ends" showTime />

          <AppScopeButton />
          <ChangeActiveEventButton />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

export default ViewShow;
