import React from 'react';
import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

import Chip from '@mui/material/Chip';
import get from 'lodash/get';

const Title = ({ record }) => {
  return (
    <span>{record ? `${get(record, 'company.profile.name')}` : null}</span>
  );
};

const redirect = (basePath, id, data) => `/companies/${data.company_id}/show`;

const ViewShow = props => (
  <Edit title={<Title />} {...props}>
    <SimpleForm redirect={redirect}>
      <TextField source="name" />
      <TextInput source="value" />
    </SimpleForm>
  </Edit>
);

export default ViewShow;
