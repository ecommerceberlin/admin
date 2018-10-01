import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

import { WithEvent } from '../../components';

import ActiveEvent from './ActiveEvent';
import RelatedEvents from './RelatedEvents';

const CustomBulkActions = props => (
  <React.Fragment>
    <div>nothing here...</div>
  </React.Fragment>
);

const ViewList = props => (
  <WithEvent>
    {activeEventId => (
      <List
        actions={null}
        bulkActionButtons={<CustomBulkActions />}
        {...props}
        perPage={200}
        //filters={<Filters />}
      >
        <Datagrid>
          <TextField source="id" />

          <TextField source="name" />

          <ActiveEvent
            label="Active event"
            source="active_event.name"
            activeEventId={activeEventId}
          />

          <RelatedEvents label="Show events" />

          <ShowButton label="Details" />
        </Datagrid>
      </List>
    )}
  </WithEvent>
);

export default ViewList;
