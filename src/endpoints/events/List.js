
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DateField,
  ReferenceField,
  ChipField,
  useListContext,
  useGetOne
} from 'react-admin';

import Typography from '@mui/material/Typography'

import SelectAll from './actions/SelectAll';
import ActiveEvent from './fields/ActiveEvent';
import { useGroupId } from '../../contexts';

const BulkActions = (props) => (
  <React.Fragment>
      {/* <ResetViewsButton label="Reset Views" {...props} /> */}
      {/* default bulk delete action */}
      <SelectAll {...props} />
  </React.Fragment>
);


const Aside = () => {

  /**
    basePath,
    currentSort,
    data,
    defaultTitle,
    filterValues,
    ids,
    page,
    perPage,
    resource,
    selectedIds,
    total,
    version,
  */

  const group_id = useGroupId();

 // const {data, ids} = useListContext();


  const { data, ids, loading, error } = useGetOne( 'groups', group_id);


  return (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="h6">Post details</Typography>
        <Typography variant="body2">
            Posts will only be published one an editor approves them
        </Typography>
    </div>
  );
}

const ViewList = props => {

  const group_id = useGroupId();
  return ( <List
    // actions={null}
    // filters={<ListFilters />}
    exporter={false}
    filter={{
      group_id
    }}
    bulkActionButtons={<BulkActions />}
    {...props}
    perPage={50}
    sort={{field: "id", order: "DESC"}}
    aside={<Aside />}
  >
    <Datagrid>

      <ActiveEvent source="name" />
      <TextField source="loc" />
      <DateField source="starts" showTime />

      <ReferenceField
        label="Items sold"
        reference="performance"
        source="id"
        linkType={false}
      >
        <ChipField source="amount" sortable={false} />
      </ReferenceField>

      <ShowButton label="Summary" />
    </Datagrid>
  </List>)

} 


export default ViewList;
