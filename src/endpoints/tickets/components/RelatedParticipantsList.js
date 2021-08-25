

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



const RelatedParticipantsList = (props) => {

return (<ReferenceManyField reference="participants" target="ticket_id" filter={{event_id: 90}} perPage={10} sort={{field: "id", order: "DESC" }}>

<SimpleList
           primaryText={record => record.email}
           secondaryText={record => new Date(record.created_at).toLocaleString("pl-PL")}
        //   tertiaryText={record => }
         //  linkType={record => record.canEdit ? "edit" : "show"}
         //  rowStyle={postRowStyle}
       />
</ReferenceManyField>)

}

export default RelatedParticipantsList;