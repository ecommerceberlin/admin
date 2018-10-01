import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TextField,
  DateField,
  ListButton
} from 'react-admin';

import CardActions from '@material-ui/core/CardActions';
import { WithEvent } from '../../components';
import ChangeActiveEventButton from './actions/ChangeActiveEventButton';

const Title = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

const Actions = ({ basePath, ...props }) => (
  <CardActions>
    <ListButton basePath={basePath} />
    {/* <ChangeActiveEventButton {...props} /> */}
  </CardActions>
);

const ViewShow = props => (
  <WithEvent>
    {activeEventId => (
      <Show
        title={<Title />}
        actions={<Actions activeEventId={activeEventId} />}
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
    )}
  </WithEvent>
);

export default ViewShow;
