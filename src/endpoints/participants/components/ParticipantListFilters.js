import React from 'react';
import {
  SelectInput,
  ReferenceInput,
  SearchInput,
} from 'react-admin';

import { 
  QuickFilter, 
  RoleSelectInput
} from '../../../components';

import { 
  useEventId, 
  useSettings 
} from '../../../contexts';

// import TicketTagSelectInput from '../inputs/TicketTagSelectInput'

const FilterByStatus = (props) => {

  const statuses = useSettings("statuses")

  return <SelectInput {...props}  choices={statuses}  />
}

const FilterByTicketGroupId = ({allowEmpty, ...props}) => {

  const event_id = useEventId()
  return (
    <ReferenceInput {...props} reference="ticketgroups" filter={{event_id}} >
    <SelectInput optionText="name" optionValue='id' translateChoice={false} allowEmpty={allowEmpty} />
    </ReferenceInput> 
  )
}

const TicketListFilters = [ 

  <SearchInput source="q" alwaysOn />,
  <RoleSelectInput source="role" label="Role" alwaysOn allowEmpty/>,
  <FilterByStatus source="status" label="Status" />,
  // <QuickFilter source="important" label="VIP" defaultValue={1} />,
  // <QuickFilter source="comment_todo" label="TODO" defaultValue={1} />,
  <FilterByTicketGroupId source="ticket_group_id" label="Ticket group"  />

]
  

export default TicketListFilters;


