import React from 'react';
import {
  Edit,
  SimpleForm,
  Datagrid,
  SimpleShowLayout,
  TabbedShowLayout,
  Tab,
  TextField,
  TextInput,
  DateField,
  EditButton,
  ChipField,
  ReferenceManyField,
  NumberField
} from 'react-admin';
// import ActiveEventButton from './ActiveEventButton';
// import ActiveEventChipField from './ActiveEventChipField';

import PurchaseStatusField from '../purchases/PurchaseStatusField';

import Chip from '@material-ui/core/Chip';

import get from 'lodash/get';

const Title = ({ record }) => {
  return (
    <span>
      {record
        ? `${get(record, 'fields.fname')} ${get(record, 'fields.lname')} ${
            record.email
          }`
        : ''}
    </span>
  );
};

const Roles = ({ record }) => (
  <div>
    {record &&
      'roles' in record &&
      record.roles.map(role => <Chip key={role} label={role} />)}
  </div>
);

Roles.defaultProps = { addLabel: true };

const ProfileFields = ({ record }) =>
  // <ul>{Object.keys(record.fields).map(key => <li key={key}>{record.fields[key]}</li>)}</ul>

  null;

ProfileFields.defaultProps = { addLabel: true };

const redirect = (basePath, id, data) => `/companies/${data.company_id}/show`;

const ViewShow = props => (
  <Edit title={<Title />} {...props}>
    <SimpleForm redirect={redirect}>
      <TextInput source="value" />
    </SimpleForm>
  </Edit>
);

export default ViewShow;
