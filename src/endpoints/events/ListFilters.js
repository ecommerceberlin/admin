import React from 'react';
import { TextInput, SelectInput, Filter } from 'react-admin';

import FilterByGroupId from './FilterByGroupId';

const Filters = props => (
  <Filter {...props}>
    {/* <TextInput label="Search" source="q" alwaysOn />
      <TextInput label="Title" source="title" defaultValue="Hello, World!" /> */}

    <FilterByGroupId alwaysOn />

    {/* <SelectInput
        source="tag"
        choices={[
          { id: 'programming', name: 'Programming' },
          { id: 'lifestyle', name: 'Lifestyle' },
          { id: 'photography', name: 'Photography' }
        ]}
      /> */}
  </Filter>
);

export default Filters;
