import React from 'react'
import { Create, SimpleForm } from 'react-admin'
import form from './components/sharedInputs'
import {useApiContext} from '../../api'

const TicketCreate = props => {
  const [group_id, event_id] = useApiContext()
  return (
    <Create {...props}>
      <SimpleForm>
        {form(event_id)}
      </SimpleForm>
    </Create>
  );
}

export default TicketCreate;
