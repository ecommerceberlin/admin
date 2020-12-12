
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


const TicketListFilters = props => (
    
    <Filter {...props}>
    
    <TextInput label="Search" source="q" alwaysOn />
    
    <ReferenceInput label="Group" source="ticket_group_id" reference="ticketgroups" alwaysOn>
        <SelectInput optionText="name" />
    </ReferenceInput>

    <SelectInput source="role" choices={rolesObject} label="Role" alwaysOn />
    <QuickFilter source="upgrade" label="Upselling"  defaultValue={1} />
    <QuickFilter source="bookable" label="Inactive"  defaultValue={0} />

    </Filter>
  );

  

export default TicketListFilters;