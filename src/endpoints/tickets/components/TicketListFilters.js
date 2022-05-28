
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
  RoleSelectInput
} from '../../../components';


import TicketTagSelectInput from '../inputs/TicketTagSelectInput'



const TicketListFilters = [

  <TextInput label="Search" source="q" alwaysOn />,
    
  (<ReferenceInput label="Group" source="ticket_group_id" reference="ticketgroups" filter={{event_id: 90}} alwaysOn>
      <SelectInput optionText="name" />
  </ReferenceInput>),

  <RoleSelectInput />,
  
  // <QuickFilter source="upgrade" label="Upgrade"  defaultValue={1} />,
  // <QuickFilter source="unused" label="Unused (Sold=0, past date)"  defaultValue={1} />,
  // <QuickFilter source="future" label="Future"  defaultValue={1} />,
  // <QuickFilter source="free" label="Free"  defaultValue={1} />,
  // <QuickFilter source="paid" label="Paid"  defaultValue={1} />

  // <TicketTagSelectInput source="tags" />

]
  

export default TicketListFilters;