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
  ReferenceField,
  ReferenceManyField,
  ReferenceArrayField, 
  SingleFieldList,
  RadioButtonGroupInput,
  WrapperField
} from 'react-admin';

import {
  SetStatusAction,
  SendMessageAction,
} from '../../components';

import { useEventId } from '../../contexts';

import { 
  ComboField,
  ParticipantDetails,
  ParticipantAside,
  ParticipantListFilters
} from './components';

import { blue } from "@mui/material/colors"


const CustomBulkActions = props => (
  <React.Fragment>
    <SetStatusAction label="Change status" {...props} />
    <SendMessageAction label="Send e-mail message" {...props} />
  </React.Fragment>
);

const ParticipantList = (props) => {


  const event_id = useEventId()

  return (<List
    {...props}
    perPage={100}
    filters={ ParticipantListFilters }
    filter={{ event_id }}
    bulkActionButtons={false}
    aside={<ParticipantAside />}
   // exporter={false}
    // filterDefaultValues={{status: "all"}}

  >
    <Datagrid expand={<ParticipantDetails />}>
     
     <WrapperField>
     <ComboField source="email" />

     <ReferenceField
        label="Company"
        reference="companies"
        source="company_id"
        filter={{event_id}}
      >
          <FunctionField
            render={record =>
              record.slug ? (
                <ChipField sx={{bgcolor: 'primary.main'}} source="slug" record={record} />
              ) : (
                <span />
              )
            }
          />
    
      </ReferenceField>

     </WrapperField>
 
   
      {/* <TextField source="status" /> */}

     



      <ReferenceArrayField
        label="Roles"
        reference="tickets"
        source="ticket_ids"
        filter={{event_id}}
      >
        <SingleFieldList linkType={false}>
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




      <DateField source="created_at" showTime />

      {/* <TextField source="lang" /> */}
      <ShowButton />
  
    </Datagrid>
  </List>)

}

export default ParticipantList;
