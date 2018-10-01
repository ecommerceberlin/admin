import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DateField,
  ReferenceField,
  ChipField
} from 'react-admin';

import { WithEvent } from '../../components';

import ChangeAppScope from './actions/ChangeAppScope';
import ListFilters from './ListFilters';
import SelectAll from './actions/SelectAll';
import ActiveEvent from './ActiveEvent';

const CustomBulkActions = props => (
  <React.Fragment>
    <SelectAll {...props} />
  </React.Fragment>
);

const ViewList = props => (
  <WithEvent>
    {activeEventId => (
      <List
        actions={null}
        filters={<ListFilters />}
        bulkActionButtons={<CustomBulkActions />}
        {...props}
        perPage={200}
      >
        <Datagrid>
          <ActiveEvent source="name" />

          <TextField source="loc" />
          <DateField source="starts" showTime />

          <ReferenceField
            label="Items sold"
            reference="performance"
            source="id"
            linkType={false}
          >
            <ChipField source="amount" sortable={false} />
          </ReferenceField>

          <ChangeAppScope activeEventId={activeEventId} />

          <ShowButton label="Summary" />
        </Datagrid>
      </List>
    )}
  </WithEvent>
);

export default ViewList;
