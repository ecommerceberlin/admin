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
    AutocompleteArrayInput
} from 'react-admin'

import {roles, useApiContext} from '../../../api'
// import { ColorInput } from 'react-admin-color-input';
const tags = roles.map(role=>({id: role, name: role}))

const form = (event_id) => {

    return [
        <TextInput source="internal_name" validate={[required(), minLength(2), maxLength(100)]} />,
        <TextInput source="translation_asset_id" validate={[required(), minLength(5), maxLength(100)]} />,
        <NumberInput source="limit" validate={[number()]} />,
        // <ColorInput source="booth.bgcolor" />,
        // <ColorInput source="booth.fontcolor" />,
        // <ColorInput source="booth.bordercolor" />,

    //     <AutocompleteArrayInput source="tags" choices={tags} 
    //     onCreate={(newTagName) => {
    //      const newTag = { id: newTagName.toLowerCase(), name: newTagName };
    //      tags.push(newTag);
    //      return newTag;
    //    }}
    //    />
    ]
}


export default form