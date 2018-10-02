import React from 'react';
import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

import get from 'lodash/get';

const Title = ({ record }) => {
  return <span>{record ? `${get(record, 'participant.email')}` : ''}</span>;
};

const redirect = (basePath, id, data) =>
  `/participants/${data.participant_id}/show`;

const ViewShow = props => (
  <Edit title={<Title />} {...props}>
    <SimpleForm redirect={redirect}>
      <TextField source="name" />
      <TextInput source="value" />
    </SimpleForm>
  </Edit>
);

export default ViewShow;
