import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TextField,
  DateField
} from 'react-admin';

import { useEventId } from '../../contexts';

const Title = ({ record }) => {
  return <span>{record ? `${record.name} events` : ''}</span>;
};

const ViewShow = props => {

  const activeEventId = useEventId()

  return (
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
  </Show>);

}

export default ViewShow;
