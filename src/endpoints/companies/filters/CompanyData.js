import React from 'react';

import { SelectArrayInput } from 'react-admin';

const CompanyData = props => (
  <SelectArrayInput
    {...props}
    // source="fields"
    choices={[
      { id: 'website', name: 'website' },
      { id: 'facebook', name: 'facebook' },
      { id: 'linkedin', name: 'linkedin' },
      { id: 'event_manager', name: 'Event Manager' },
      { id: 'twitter', name: 'twitter' }
    ]}
  />
);

export default CompanyData;
