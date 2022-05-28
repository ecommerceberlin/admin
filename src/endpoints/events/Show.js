import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TextField,
  DateField,
  ListButton,
  TopToolbar,
  EditButton
} from 'react-admin';

import ChangeActiveEventButton from './actions/ChangeActiveEventButton';

const Title = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

const Actions = ({ basePath, data, resource, ...props }) => {
  return (
    <TopToolbar>
      <EditButton basePath={basePath} record={data} />
      <ListButton basePath={basePath} />
      <ChangeActiveEventButton record={data} />
    </TopToolbar>
  );
}

const ViewShow = props => {

  
  return (
     
        <Show
          title={<Title />}
          actions={<Actions />}
          {...props}
        >
          <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="loc" />
            <TextField source="starts" showTime />
            <TextField source="ends" showTime />
  
            {/* <ArrayField source="events">
            <Datagrid>
  
            </Datagrid>
          </ArrayField> */}
          </SimpleShowLayout>
        </Show>
  );
}

export default ViewShow;
