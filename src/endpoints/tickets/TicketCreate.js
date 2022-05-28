import React from 'react'
import { Create, SimpleForm } from 'react-admin'
import form from './components/sharedInputs'
import { useEventId } from '../../contexts'

const TicketCreate = props => {

  const event_id = useEventId()
  return (
    <Create {...props}>
      <SimpleForm>
        {form(event_id)}
      </SimpleForm>
    </Create>
  );
}

export default TicketCreate;
