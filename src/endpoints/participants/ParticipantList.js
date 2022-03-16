import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  ChipField,
  ShowButton,
  DeleteButton,
  FunctionField,
  TextInput, 
  SelectInput, 
  Filter,
  ReferenceInput,
  ReferenceArrayField, 
  SingleFieldList,
  RadioButtonGroupInput
} from 'react-admin';
import {useSelector} from 'react-redux'
import {
  SetStatusAction,
  SendMessageAction,
  WithEvent
} from '../../components';

import { roles, statuses, useApiContext } from '../../api';

const Filters = props => {

  const [group_id, event_id] = useApiContext()

  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
  
      {/* <SelectInput source="role" choices={roles} alwaysOn allowEmpty /> */}

      {/* <ReferenceInput source="has_ticket_id" reference="tickets" label="Ticket" filter={{event_id}} allowEmpty>
      <SelectInput optionText="name" shouldRenderSuggestions={()=>true} />
      </ReferenceInput> */}
    
      <RadioButtonGroupInput source="status" choices={statuses} alwaysOn />
  
    </Filter>
  );
}



const CustomBulkActions = props => (
  <React.Fragment>
    <SetStatusAction label="Change status" {...props} />
    <SendMessageAction label="Send e-mail message" {...props} />
  </React.Fragment>
);

const ParticipantList = (props) => {

  const [group_id, event_id] = useApiContext()

  return (<List
    {...props}
    perPage={100}
    filters={<Filters />}
    filter={{ event_id }}
    // bulkActionButtons={<CustomBulkActions />}
    exporter={false}
    // filterDefaultValues={{status: "all"}}
  >
    <Datagrid>
      <TextField source="email" />
      <DateField source="created_at" showTime />
      <TextField source="status" />

      <ReferenceArrayField
        label="Roles"
        reference="tickets"
        source="ticket_ids"
        filter={{event_id}}
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

      {/* <TextField source="lang" /> */}
      <ShowButton />
  
    </Datagrid>
  </List>)

}

export default ParticipantList;