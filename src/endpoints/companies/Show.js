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
  NumberField,
  CardActions,
  ListButton,
  RefreshButton
} from 'react-admin';
// import ActiveEventButton from './ActiveEventButton';
// import ActiveEventChipField from './ActiveEventChipField';

import PurchaseStatusField from '../purchases/PurchaseStatusField';

import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import get from 'lodash/get';

const Title = ({ record }) => {
  return <span>{record ? `${get(record, 'profile.name')}` : ''}</span>;
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

const cardActionStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const CompanyActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} />
    {/* Add your custom actions */}
    <RefreshButton />
    <ListButton />
    <Button color="primary" onClick={null}>
      Custom Action
    </Button>
  </CardActions>
);

const ViewShow = props => (
  <Show
    //    actions={<CompanyActions />}
    title={<Title />}
    {...props}
  >
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

        <ProfileFields source="fields" />

        <TextField label="Id" source="id" />
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
            <PurchaseStatusField source="status" />
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
