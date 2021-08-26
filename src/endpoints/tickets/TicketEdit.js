import React from 'react';
import { 
  Edit, 
  TextInput,
  DateTimeInput,
  NumberInput,
  TabbedForm,
  FormTab,
  SelectInput,
  BooleanInput,
  ReferenceInput,
  FileInput,
  ImageField,
  AutocompleteArrayInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  //validations
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices
} from 'react-admin';
// import ActiveEventButton from './ActiveEventButton';
// import ActiveEventChipField from './ActiveEventChipField';
import {TicketNameField} from './fields/TicketNameField'
import {roles, useApiContext} from '../../api'

const redirect = (basePath, id, data) => `/companies/${data.company_id}/show`;

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateEmail = email();
const validateAge = [number(), minValue(18)];
const validateZipCode = regex(/^\d{5}$/, 'Must be a valid Zip Code');
const validateGender = choices(['m', 'f', 'nc'], 'Please choose one of the values');


const tags = roles.map(role=>({id: role, name: role}))

const TicketEdit = props => {

  const [group_id, event_id] = useApiContext()

  return (<Edit title={<TicketNameField {...props} grayout={false} />} {...props}>
     <TabbedForm>
        <FormTab label="Basic">
          <TextInput source="internal_name" validate={[required(), minLength(2), maxLength(100)]} />
          <TextInput source="translation_asset_id" validate={[required(), minLength(5), maxLength(100)]} />
          <NumberInput source="baseprice" validate={[number()]} />
          <SelectInput source="price_currency" validate={[required()]} choices={[{id: "EUR", name: "EUR"}, {id: "PLN", name: "PLN"}]} />
          <NumberInput source="limit" validate={[number()]} />
          <DateTimeInput source="start" />
          <DateTimeInput source="end" />
          <SelectInput source="role" choices={roles.map(role=>({id: role, name: role}))} />
          
          <ReferenceInput allowEmpty={true} filter={{event_id}} label="Ticket Group" source="ticket_group_id" reference="ticketgroups">
            <SelectInput optionText="name" />
          </ReferenceInput>
  
        </FormTab>
        <FormTab label="Extended">
          
          <BooleanInput source="upselling" />

          <AutocompleteArrayInput source="tags" choices={tags} 
           onCreate={(newTagName) => {
            const newTag = { id: newTagName.toLowerCase(), name: newTagName };
            tags.push(newTag);
            return newTag;
          }}
          />

          {/* <FileInput source="thumbnail" validate={ [minLength(7), maxLength(200)] }>
            <ImageField source="thumbnail" title="title" />
          </FileInput> */}

          {/* <FileInput source="image" validate={ [minLength(7), maxLength(200)] }>
            <ImageField source="image" title="title" />
          </FileInput> */}
          <TextInput source="thumbnail" fullWidth validate={[minLength(3), maxLength(100)]} />
          <TextInput source="image" fullWidth validate={[minLength(3), maxLength(100)]} />
          <TextInput source="details_url" validate={[minLength(3), maxLength(100)]} />
  
        </FormTab>
        <FormTab label="Participants">

        </FormTab>
        <FormTab label="Log">
        <ReferenceManyField target="ticket_id" reference="log">
        <Datagrid>
          <TextField source="id" />
        </Datagrid>
        </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>);
} 

export default TicketEdit;
