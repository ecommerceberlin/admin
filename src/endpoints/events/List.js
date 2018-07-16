import React from 'react';
import {
  BulkActions,
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  NumberField,
  ChipField,
  ShowButton,
  DisabledInput,
  TextInput,
  SelectInput
} from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import activeEventId from '../../api/app';
//import { statuses as styles } from '../../styles';
import { ReferenceField } from 'react-admin';
import { SetStatusAction, SendMessageAction } from '../../components';

import ActiveEventButton from './ActiveEventButton';

const CustomBulkActions = props => (
  <BulkActions {...props}>
    <SetStatusAction label="Change status" />
    <SendMessageAction label="Send e-mail message" />
  </BulkActions>
);

const styles = {
  active: {
    backgroundColor: 'green',
    color: 'white'
  },

  not_active: {}
};

const ColoredChipField = withStyles(styles)(({ classes, record, ...rest }) => {
  return (
    <ChipField
      className={
        classes[activeEventId() === record.id ? 'active' : 'not_active']
      }
      record={record}
      {...rest}
    />
  );
});

const ViewList = props => (
  <List
    //  bulkActions={<CustomBulkActions />}
    {...props}
    perPage={200}
    //  filters={<Filters />}
  >
    <Datagrid>
      <TextField source="id" />

      <ColoredChipField source="name" />

      <TextField source="loc" />

      <DateField source="starts" />

      <ActiveEventButton />

      {/* <ShowButton basePath="/purchases" /> */}
    </Datagrid>
  </List>
);

export default ViewList;
