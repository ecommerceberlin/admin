import React from 'react';
import { TextInput, SelectInput, Filter } from 'react-admin';
import FilterByTicketId from './FilterByTicketId';
import { roles } from '../../api/app';

const Filters = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />

    <FilterByTicketId source="ticket_id" alwaysOn allowEmpty />

    <SelectInput source="role" choices={roles} alwaysOn allowEmpty />
  </Filter>
);

export default Filters;
