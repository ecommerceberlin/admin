
import React from 'react';

import {
  TextField,
  Show,
  SimpleShowLayout,
  TopToolbar,
  DateField,
  ReferenceManyField,
  SimpleList
} from 'react-admin';

import RelatedParticipantsList from './RelatedParticipantsList'
import RelatedParticipantsButton from './RelatedParticipantsButton';

import Grid from '@mui/material/Grid'

const TicketDetailsActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        {/* <EditButton basePath={basePath} record={data} /> */}
        {/* Add your custom actions */}
  
          <RelatedParticipantsButton label="Show Participants" />

        {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
    </TopToolbar>
  );
  
  
  const TicketListQuickLookup = props => (

    <Show
    {...props}
    /* disable the app title change when shown */
    title=""
    //  actions={<TicketDetailsActions />}
    component="div"
    >


    <Grid container spacing={2}>
      <Grid item md={6}>
      
      
        <SimpleShowLayout>
        <TextField source="limit" />
        <DateField source="start" showTime />
        <DateField source="end" showTime />
        </SimpleShowLayout>
     
    
    </Grid>
      <Grid item md={6}>

    

      <RelatedParticipantsList {...props} />
      
    

      
      </Grid>
    </Grid>

     </Show>

  );


export default TicketListQuickLookup;