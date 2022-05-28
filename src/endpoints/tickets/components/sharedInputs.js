import React from 'react'
import {
    TextInput,
    NumberInput,
    SelectInput,
    DateTimeInput,
    ReferenceInput,
    required,
    maxLength,
    minLength,
    number,
    FormTab
} from 'react-admin'
import { RoleSelectInput } from '../../../components'

const form = (event_id) => {

    return [
        <TextInput source="internal_name" validate={[required(), minLength(2), maxLength(100)]} />,
        <TextInput source="translation_asset_id" validate={[required(), minLength(5), maxLength(100)]} />,
        <NumberInput source="baseprice" validate={[number()]} />,
        <SelectInput source="price_currency" validate={[required()]} choices={[{id: "EUR", name: "EUR"}, {id: "PLN", name: "PLN"}]} />,
        <NumberInput source="limit" validate={[number()]} />,
        <DateTimeInput source="start" />,
        <DateTimeInput source="end" />,
        <RoleSelectInput allowEmpty={true} source="role" />,    
        <ReferenceInput allowEmpty={true} filter={{event_id}} label="Ticket Group" source="ticket_group_id" reference="ticketgroups">
        <SelectInput optionText="name" />
        </ReferenceInput>
    ]
}


export default form