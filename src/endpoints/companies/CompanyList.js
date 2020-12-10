import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  TextInput,
  FunctionField,
  Filter,
  BooleanInput,
  SelectInput,
  useListContext
  // SelectArrayInput,
  // ReferenceArrayField,
  // ReferenceManyField,
  // ReferenceField,
  // SingleFieldList,

} from 'react-admin';

import Typography from '@material-ui/core/Typography'
import {activeEventId} from '../../api/app';
import { SendMessageAction } from '../../components';
import DoubleTextField from './DoubleTextField';
import { Admin, CompanyData } from './filters';
//import DynamicField from './DynamicField';
import { Flagswitch, SelectAdminField, BulkAssignAdmin } from './actions';

const CustomBulkActions = props => (
  <React.Fragment>
    <SendMessageAction label="Send e-mail message" {...props} />
    <BulkAssignAdmin label="Assign an admin" {...props} />
  </React.Fragment>
);

const Filters = props => (
  <Filter {...props}>
    <BooleanInput source="featured" label="Featured" />
    <BooleanInput source="present" alwaysOn label="Present" />
    <TextInput label="Search" source="q" />
    <CompanyData source="fields" label="Field" />
    <Admin source="admin_id" label="Admin" />
    <SelectInput
      source="lang"
      choices={[{ id: 'en', name: 'en' }, { id: 'de', name: 'de' }]}
    />
  </Filter>
);

const customColumns = [];



const Aside = () => {
  const { data, ids } = useListContext();
  return (
      <div style={{ width: 200, margin: '1em' }}>
          <Typography variant="h6">Basic stats</Typography>
          <Typography variant="body2">
              Posts will only be published once approved
          </Typography>
      </div>
  );
}


class ViewList extends React.Component {
  render() {
    //console.log(this.props);

    return (
      <List
        {...this.props}
        filters={<Filters />}
        filterDefaultValues={{ present: true, featured: false }}
        filter={{ event_id: activeEventId() }}
        bulkActionButtons={<CustomBulkActions />}
        perPage={100}
        exporter={false}
        aside={<Aside />}
      >
        <Datagrid>
          <DoubleTextField
            label="Name"
            primary="profile.name"
            secondary="slug"
          />

          <SelectAdminField source="admin_id" />
          <Flagswitch source="featured" />
          <Flagswitch source="promo" />

          {customColumns.map(source => (
            <TextField key={`_${source}`} source={source} />
          ))}

          {/* <DynamicField label="fields" /> */}

          <TextField source="profile.lang" label="Language" />

          <FunctionField
            sortBy="featured"
            label="Present"
            render={record =>
              record.event_ids.indexOf(activeEventId()) > -1 ? `tak` : 'nie'
            }
          />

          {/* <FunctionField label="Spending" render={record => `${record.event_ids.length}%`} /> */}

          {/* <FunctionField label="Retention" render={record => `${record.event_ids.length}%`} />

          <FunctionField label="Spending" render={record => `${record.event_ids.length}%`} /> */}

          <ShowButton />
        </Datagrid>
      </List>
    );
  }
}

export default ViewList;
