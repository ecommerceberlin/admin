
import React from 'react';

import {
  TextField,
  Show,
  SimpleShowLayout,
  TopToolbar,
  DateField
} from 'react-admin';

import RelatedParticipants from './RelatedParticipants';


const TicketDetailsActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        {/* <EditButton basePath={basePath} record={data} /> */}
        {/* Add your custom actions */}
  
          <RelatedParticipants label="Show Participants" />

        {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
    </TopToolbar>
  );
  
  
  const TicketListQuickLoookup = props => (
    <Show
        {...props}
        /* disable the app title change when shown */
        title=""
      //  actions={<TicketDetailsActions />}
        component="div"
    >
        <SimpleShowLayout>
            <TextField source="limit" />


          <DateField source="start" showTime />
          <DateField source="end" showTime />

        </SimpleShowLayout>
    </Show>
  );


export default TicketListQuickLoookup;