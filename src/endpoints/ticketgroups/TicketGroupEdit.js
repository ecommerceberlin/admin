import React from 'react';
import { 
  Edit, 
  TextInput,
  TabbedForm,
  FormTab,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteArrayInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  //validations
  required,
  minLength,
  maxLength,
  minValue,
  number,
  regex,
  email,
  choices
} from 'react-admin';
// import ActiveEventButton from './ActiveEventButton';
// import ActiveEventChipField from './ActiveEventChipField';
import {TicketGroupNameField} from './fields/TicketGroupNameField'
import {JsonEditorInput} from '../../components'
import RelatedParticipantsList from './components/RelatedParticipantsList';
import form from './components/sharedInputs'

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateEmail = email();
const validateAge = [number(), minValue(18)];
const validateZipCode = regex(/^\d{5}$/, 'Must be a valid Zip Code');
const validateGender = choices(['m', 'f', 'nc'], 'Please choose one of the values');




const TicketEdit = props => {


  return (<Edit 
//   title={<TicketGroupNameField {...props} grayout={false} />} 
  {...props}
  >
     <TabbedForm>
        <FormTab label="Primary">
        {/* {form(event_id)} */}
        </FormTab>
        {/* <FormTab label="Secondary">
          
    
          
          <BooleanInput source="upselling" />

          <TextInput source="thumbnail" fullWidth validate={[minLength(3), maxLength(100)]} />
          <TextInput source="image" fullWidth validate={[minLength(3), maxLength(100)]} />
          <TextInput source="details_url" validate={[minLength(3), maxLength(100)]} />

        <ArrayInput source="report">
            <SimpleFormIterator>
                <TextInput source="role" />
            </SimpleFormIterator>
        </ArrayInput>

       

        </FormTab>
        <FormTab label="Participants">
            <RelatedParticipantsList {...props} />
        </FormTab>
        <FormTab label="Log">

        <ReferenceManyField target="ticket_id" reference="log">
        <Datagrid>
          <TextField source="id" />
        </Datagrid>
        </ReferenceManyField>
        </FormTab>
        <FormTab label="Advanced">
        <JsonEditorInput source="json" />
        </FormTab> */}
      </TabbedForm>
    </Edit>);
} 

export default TicketEdit;
