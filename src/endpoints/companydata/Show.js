import React from 'react';
import { Show, TextField } from 'react-admin';

const Title = ({ record }) => {
  return <span>{record ? record.value : ''}</span>;
};

const ViewShow = props => (
  <Show title={<Title />} {...props}>
    <TextField source="value" />
  </Show>
);

export default ViewShow;
