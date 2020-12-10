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



import { roles, statuses } from '../../api/app';

const Filters = props => {

  const event_id = useSelector(state => state.app.event_id)


  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
  
      <SelectInput source="role" choices={roles} alwaysOn allowEmpty />

      <ReferenceInput source="has_ticket_id" reference="tickets" label="Ticket" filter={{event_id}} allowEmpty>
      <SelectInput optionText="name" shouldRenderSuggestions={()=>true} />
      </ReferenceInput>
    
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

const ViewList = props => (
  <WithEvent>
    {activeEventId => (
      <List
        {...props}
        perPage={100}
        filters={<Filters />}
        filter={{ event_id: activeEventId }}
        bulkActionButtons={<CustomBulkActions />}
        exporter={false}
        filterDefaultValues={{status: "all"}}
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
          <ShowButton label="Summary" />
      
        </Datagrid>
      </List>
    )}
  </WithEvent>
);

export default ViewList;
