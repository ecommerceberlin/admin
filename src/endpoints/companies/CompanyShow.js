import React from 'react';
import {
  Show,
  ArrayField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  TextField,
  DateField,
  EditButton,
  ReferenceManyField,
  NumberField
} from 'react-admin';
import Chip from '@mui/material/Chip';

import PurchaseStatusField from '../purchases/PurchaseStatusField';
import ShowTitle from './ShowTitle';
import ShowActions from './ShowActions';
import { uniqueValues } from '../../api/app';

const Roles = ({ record, source }) =>
  record &&
  source in record &&
  uniqueValues(record[source]).map(role => <Chip key={role} label={role} />);
Roles.defaultProps = { record: {}, addLabel: true };

const ViewShow = props => (
  <Show actions={<ShowActions />} title={<ShowTitle />} {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <Roles source="roles" />

        <ReferenceManyField
          reference="companydata"
          target="company_id"
          label="Profile data"
        >
          <Datagrid>
            <TextField source="name" />
            <TextField source="value" />
            <DateField source="updated_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
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
            <PurchaseStatusField source="status" />
            <NumberField source="amount" />
          </Datagrid>
        </ArrayField>

        <DateField label="Publication date" source="published_at" />
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
