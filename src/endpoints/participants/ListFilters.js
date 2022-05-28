import React from 'react';
import { TextInput, SelectInput, Filter } from 'react-admin';
import FilterByTicketId from './FilterByTicketId';
import { useSettings } from '../../contexts';

const Filters = props => {



  return (
    <Filter {...props}>
      {/* <TextInput label="Search" source="q" alwaysOn /> */}
  
      <FilterByTicketId source="ticket_id" alwaysOn allowEmpty />
  
      <SelectInput source="role" choices={rolesObject} alwaysOn allowEmpty />
    </Filter>
  );

}

export default Filters;
