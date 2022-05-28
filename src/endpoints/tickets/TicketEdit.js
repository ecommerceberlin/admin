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
import {TicketNameField} from './fields/TicketNameField'
import {JsonEditorInput} from '../../components'
import RelatedParticipantsList from './components/RelatedParticipantsList';
import form from './components/sharedInputs'
import { useEventId, useSettings } from '../../contexts';

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateEmail = email();
const validateAge = [number(), minValue(18)];
const validateZipCode = regex(/^\d{5}$/, 'Must be a valid Zip Code');
const validateGender = choices(['m', 'f', 'nc'], 'Please choose one of the values');



const TicketEdit = props => {


  const event_id = useEventId()
  const roles = useSettings("roles")

  const tags = roles.map(role=>({id: role, name: role}))

  
  return (<Edit title={<TicketNameField {...props} grayout={false} />} {...props}>
     <TabbedForm>
        <FormTab label="Primary">
        {form(event_id)}
        </FormTab>
        <FormTab label="Secondary">
          
    
          <AutocompleteArrayInput source="tags" choices={tags} 
           onCreate={(newTagName) => {
            const newTag = { id: newTagName.toLowerCase(), name: newTagName };
            tags.push(newTag);
            return newTag;
          }}
          />
          
          <BooleanInput source="upselling" />

          {/* <FileInput source="thumbnail" validate={ [minLength(7), maxLength(200)] }>
            <ImageField source="thumbnail" title="title" />
          </FileInput> */}

          {/* <FileInput source="image" validate={ [minLength(7), maxLength(200)] }>
            <ImageField source="image" title="title" />
          </FileInput> */}
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
        </FormTab>
      </TabbedForm>
    </Edit>);
} 

export default TicketEdit;
