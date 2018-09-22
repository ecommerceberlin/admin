import React from 'react';

import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  BooleanField,
  TextField,
  ShowButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput,
  FunctionField,
  ReferenceManyField,
  SingleFieldList,
  Filter,
  BooleanInput,
  SelectArrayInput
} from 'react-admin';

import Chip from '@material-ui/core/Chip';

import activeEventId from '../../api/app';

import Flagswitch from './Flagswitch';
import ConditionalField from './ConditionalField';
import DynamicField from './DynamicField';

const Filters = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    <BooleanInput source="tag" alwaysOn label="Featured only" />

    <SelectArrayInput
      source="fields"
      choices={[
        { id: 'website', name: 'website' },
        { id: 'facebook', name: 'facebook' },
        { id: 'linkedin', name: 'linkedin' },
        { id: 'event_manager', name: 'Event Manager' },
        { id: 'twitter', name: 'twitter' }
      ]}
    />
  </Filter>
);

const customColumns = [];

class ViewList extends React.Component {
  render() {
    console.log(this.props);

    return (
      <List
        {...this.props}
        filters={<Filters />}
        filter={{ event_id: activeEventId() }}
        //  bulkActions={false}
        perPage={100}
      >
        <Datagrid>
          {/* <FunctionField label="Spending" render={record => `${record.event_ids.length}%`} /> */}

          <TextField source="id" />

          <ConditionalField
            sources={['settings.logotype_cdn', 'profile.name', 'slug']}
            label="logotype"
          />

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

          {/* <FunctionField label="Retention" render={record => `${record.event_ids.length}%`} />

          <FunctionField label="Spending" render={record => `${record.event_ids.length}%`} /> */}

          <ShowButton />
        </Datagrid>
      </List>
    );
  }
}

export default ViewList;
