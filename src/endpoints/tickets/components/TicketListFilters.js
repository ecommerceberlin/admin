
import React from 'react';

import {
  Filter,
  TextInput,
  SelectInput,
  ReferenceInput,
  BooleanInput
} from 'react-admin';

import { 
  QuickFilter, 
} from '../../../components';

import { rolesObject } from '../../../api'

import TicketTagSelectInput from '../inputs/TicketTagSelectInput'

const TicketListFilters = [

  <TextInput label="Search" source="q" alwaysOn />,
    
  (<ReferenceInput label="Group" source="ticket_group_id" reference="ticketgroups" filter={{event_id: 90}} alwaysOn>
      <SelectInput optionText="name" />
  </ReferenceInput>),

  <SelectInput source="role" choices={rolesObject} label="Role" alwaysOn />,
  // <QuickFilter source="upgrade" label="Upselling"  defaultValue={1} />,
  // <QuickFilter source="bookable" label="Inactive"  defaultValue={0} />

  // <TicketTagSelectInput source="tags" />

]
  

export default TicketListFilters;