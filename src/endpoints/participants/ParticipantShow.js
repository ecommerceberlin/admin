import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  SimpleShowLayout,
  TabbedShowLayout,
  Tab,
  TextField,
  DateField,
  EditButton,
  ChipField,
  ReferenceManyField,
  NumberField
} from 'react-admin';

import PurchaseStatusField from '../purchases/PurchaseStatusField';
import Chip from '@mui/material/Chip';
import ShowTitle from './ShowTitle';
import { uniqueValues } from '../../api/app';

const Roles = ({ record }) => (
  <div>
    {record &&
      'roles' in record &&
      record.roles.map(role => <Chip key={role} label={role} />)}
  </div>
);

Roles.defaultProps = { addLabel: true };

const MyPurchaseStatusField = ({ resource, ...props }) => (
  <PurchaseStatusField {...props} resource="purchases" />
);

const ViewShow = props => (
  <Show title={<ShowTitle />} {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <Roles source="roles" />

        <TextField source="id" />
        <TextField source="token" />

        <ReferenceManyField
          reference="fields"
          target="participant_id"
          label="Profile data"
        >
          <Datagrid>
            <TextField source="name" />
            <TextField source="value" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>

        <TextField source="title" />
        <TextField source="teaser" />
      </Tab>

      <Tab label="related" path="related">
        <ReferenceManyField
          reference="related"
          target="participant_id"
          label="Profile data"
        >
          <Datagrid>
            <TextField source="name" />
            <TextField source="value" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>

      <Tab label="Purchases" path="purchases">
        <ArrayField source="purchases">
          <Datagrid>
            <DateField source="created_at" />
            <MyPurchaseStatusField source="status" />
            <NumberField source="amount" />
          </Datagrid>
        </ArrayField>

        <TextField
          label="Password (if protected post)"
          source="password"
          type="password"
        />
        <DateField label="Publication date" source="published_at" />
        {/* <NumberField source="average_note" /> */}
        {/* <BooleanField label="Allow comments?" source="commentable" defaultValue /> */}
        <TextField label="Nb views" source="views" />
      </Tab>
      <Tab label="comments" path="comments">
        <ReferenceManyField
          reference="comments"
          target="participant_id"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="body" />
            <DateField source="created_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default ViewShow;
