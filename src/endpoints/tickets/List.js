import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  ChipField,
  FunctionField,
  NumberField,
  EditButton
} from 'react-admin';

import RelatedParticipants from './RelatedParticipants';
import Filters from './Filters';
import TicketTags from './TicketTags';

import { WithEvent } from '../../components';

const ViewList = props => (
  <WithEvent>
    {activeEventId => (
      <List
        {...props}
        perPage={100}
        filters={<Filters />}
        filter={{ event_id: activeEventId }}
      >
        <Datagrid>
          <TextField source="name" />

          <FunctionField
            label="role"
            render={record =>
              record.role ? (
                <ChipField record={record} source="role" />
              ) : (
                <span>not set</span>
              )
            }
          />

          <TicketTags source="tags" />

          {/* <ArrayField source="tags">
              <SingleFieldList>
              <ChipField source="name" />
              </SingleFieldList>
              </ArrayField> */}

          <DateField source="start" showTime />
          <DateField source="end" showTime />

          <TextField source="price" />
          <NumberField source="limit" />

          <RelatedParticipants label="Show Participants" />
          <EditButton />
        </Datagrid>
      </List>
    )}
  </WithEvent>
);

export default ViewList;
