import React from 'react';
import { useMediaQuery } from '@material-ui/core';

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  SimpleList
} from 'react-admin';

import TicketListAside from './components/TicketListAside'
import TicketListFilters from './components/TicketListFilters'
import TicketListQuickLoookup from './components/TicketListQuickLoookup'
import TicketListBulkActions from './components/TicketListBulkActions'

import { 
  WithEvent, 
  CroppedTextField,
  ConstrainedChipField,
  DotField
} from '../../components';

import { roles } from '../../api'
// import TicketTags from './components/TicketTags';

const ViewList = props => {

  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <WithEvent>
      {activeEventId => (
        <List
          {...props}
          perPage={100}
          filters={<TicketListFilters />}
          filter={{ event_id: activeEventId }}
          exporter={false}
          aside={<TicketListAside />}
          bulkActionButtons={ <TicketListBulkActions />}
          sort={{ field: 'start', order: 'DESC' }}
        >{isSmall ? (<SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.price} views`}
                 //   tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                    linkType={record => record.canEdit ? "edit" : "show"}   
                />) : ( <Datagrid expand={<TicketListQuickLoookup />}>
        
        <CroppedTextField resolve={["internal_name", "translation_asset_id", "name"]} limit="20" label="Name" />

        <ConstrainedChipField source="role" values={roles} />

        <TextField source="price" />
        
        <NumberField source="limit" />

        <NumberField source="sold" />

        <DotField source="bookable" label={false} />

        <TextField source="status" />

        <EditButton />
      </Datagrid>)}
         
        </List>
      )}
    </WithEvent>
  );
} 

export default ViewList;




/**
 * 
 
id
ticket_group_id
event_id
group_id
organizer_id
names
descriptions
image
thumbnail
start
end
limit
max
paid
price
price_currency
delayed
internal
printable
blocktime
sorting
ns
additional_recipients
additional_message
role
report
translation_asset_id
internal_name
details_url

*/