

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
import { useEventId } from '../../../contexts';



const RelatedParticipantsList = (props) => {

  const event_id = useEventId()

  return (
    <ReferenceManyField reference="participants" target="ticket_id" filter={{event_id}} perPage={props.limit} sort={{field: "id", order: "DESC" }}>
    <SimpleList
    primaryText={record => record.email}
    secondaryText={record => new Date(record.created_at).toLocaleString("pl-PL")}
    //   tertiaryText={record => }
    //  linkType={record => record.canEdit ? "edit" : "show"}
    //  rowStyle={postRowStyle}
    />
    </ReferenceManyField>
  )

}

RelatedParticipantsList.defaultProps = {
  limit: 5
}

export default RelatedParticipantsList;