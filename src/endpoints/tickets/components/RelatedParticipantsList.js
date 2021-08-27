

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

import {useApiContext} from '../../../api'

const RelatedParticipantsList = (props) => {

  const [group_id, event_id] = useApiContext()


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