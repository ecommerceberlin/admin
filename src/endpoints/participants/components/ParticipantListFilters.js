import React from 'react';
import {
  TextInput,
  SelectInput,
  ReferenceInput,
  BooleanInput,
  SearchInput
} from 'react-admin';

import { 
  QuickFilter, 
  RoleSelectInput
} from '../../../components';


// import TicketTagSelectInput from '../inputs/TicketTagSelectInput'



const TicketListFilters = [ 
  <SearchInput source="q" alwaysOn />,
    
  (<ReferenceInput label="Group" source="ticket_group_id" reference="ticketgroups" filter={{event_id: 90}} >
      <SelectInput optionText="name" />
  </ReferenceInput>),

   <RoleSelectInput label="Role" source="role" alwaysOn/>,
  
  // <QuickFilter source="important" label="VIP"  defaultValue={1} />,
  // <QuickFilter source="unused" label="Unused (Sold=0, past date)"  defaultValue={1} />,
  // <QuickFilter source="future" label="Future"  defaultValue={1} />,
  // <QuickFilter source="free" label="Free"  defaultValue={1} />,
  // <QuickFilter source="paid" label="Paid"  defaultValue={1} />

  // <TicketTagSelectInput source="tags" />

]
  

export default TicketListFilters;




/**
 * 
 * 
 

const Filters = props => {

return (
<Filter {...props}>
<TextInput label="Search" source="q" alwaysOn /> 

<SelectInput source="role" choices={roles} alwaysOn allowEmpty /> 

<ReferenceInput source="has_ticket_id" reference="tickets" label="Ticket" filter={{event_id}} allowEmpty>
<SelectInput optionText="name" shouldRenderSuggestions={()=>true} />
</ReferenceInput> 

<RadioButtonGroupInput source="status" choices={xxx} alwaysOn /> 

</Filter>
);
}


    

 */



// import React from 'react';
// import { TextInput, SelectInput, Filter } from 'react-admin';
// import FilterByTicketId from './FilterByTicketId';
// import { useSettings } from '../../contexts';

// const Filters = props => {



//   return (
//     <Filter {...props}>
//       {/* <TextInput label="Search" source="q" alwaysOn /> */}
  
//       <FilterByTicketId source="ticket_id" alwaysOn allowEmpty />
  
//       <SelectInput source="role" choices={rolesObject} alwaysOn allowEmpty />
//     </Filter>
//   );

// }

// export default Filters;


