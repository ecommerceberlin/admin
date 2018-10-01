import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TextField,
  DateField
} from 'react-admin';

import { WithEvent } from '../../components';

const Title = ({ record }) => {
  return <span>{record ? `${record.name} events` : ''}</span>;
};

const ViewShow = props => (
  <WithEvent>
    {activeEventId => (
      <Show title={<Title />} {...props}>
        <SimpleShowLayout>
          <ArrayField source="events">
            <Datagrid>
              <TextField source="name" />
              <TextField source="loc" />
              <DateField source="starts" showTime />
              <DateField source="ends" showTime />
            </Datagrid>
          </ArrayField>
        </SimpleShowLayout>
      </Show>
    )}
  </WithEvent>
);

export default ViewShow;
