import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  ChipField,
  ShowButton,
  DeleteButton,
  FunctionField
} from 'react-admin';

import { ReferenceArrayField, SingleFieldList } from 'react-admin';
import {
  SetStatusAction,
  SendMessageAction,
  WithEvent
} from '../../components';
import ListFilters from './ListFilters';

const CustomBulkActions = props => (
  <React.Fragment>
    <SetStatusAction label="Change status" {...props} />
    <SendMessageAction label="Send e-mail message" {...props} />
  </React.Fragment>
);

const ViewList = props => (
  <WithEvent>
    {activeEventId => (
      <List
        {...props}
        perPage={100}
        filters={<ListFilters />}
        filter={{ event_id: activeEventId }}
        bulkActionButtons={<CustomBulkActions />}
      >
        <Datagrid>
          <TextField source="email" />
          <DateField source="created_at" showTime />
          <TextField source="status" />

          <ReferenceArrayField
            label="Roles"
            reference="tickets"
            source="ticket_ids"
          >
            <SingleFieldList>
              <FunctionField
                render={record =>
                  record.role ? (
                    <ChipField source="role" record={record} />
                  ) : (
                    <span />
                  )
                }
              />
            </SingleFieldList>
          </ReferenceArrayField>

          <TextField source="lang" />
          <ShowButton />
          <DeleteButton />
        </Datagrid>
      </List>
    )}
  </WithEvent>
);

export default ViewList;
