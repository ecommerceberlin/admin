import React from 'react';
import { TextInput, SelectInput, Filter } from 'react-admin';
import FilterByTicketId from './FilterByTicketId';
import { rolesObject } from '../../api/app';

const Filters = props => (
  <Filter {...props}>
    {/* <TextInput label="Search" source="q" alwaysOn /> */}

    <FilterByTicketId source="ticket_id" alwaysOn allowEmpty />

    <SelectInput source="role" choices={rolesObject} alwaysOn allowEmpty />
  </Filter>
);

export default Filters;
