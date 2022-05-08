import * as React from "react";
import { 
    Create, 
    SimpleForm, 
    TextInput,
    ReferenceInput, 
    SelectInput, 
    required, 
    minLength, 
    maxLength,
    number,
    choices,
    BooleanInput, 
    RadioButtonGroupInput,
    AutocompleteInput
} from 'react-admin';
import Typography from '@mui/material/Typography'

import categories from './categories'
import {useApiContext} from '../../api';


const onSuccess = ({ data }) => {
    // notify('ra.notification.created', 'info', { smart_count: 1 }, undoable);
    // redirect('edit', basePath, data.id, data);
    // refresh();
};

const Aside = ({basePath, resource}) => {

    return  (
        <div style={{ width: 200, margin: '1em' }}>
            {/* <Typography variant="h6">Post details</Typography> */}
            {/* {record && (
                <Typography variant="body2">
                    Creation date: {record.createdAt}
                </Typography>
            )} */}
        </div>
    );
    
}



const PostCreate = ({permissions, ...props}) => {

    const [group_id, event_id] = useApiContext();

    return (
        <Create /*onSuccess={onSuccess}*/ aside={<Aside />} {...props}>
            <SimpleForm warnWhenUnsavedChanges>
                <TextInput fullWidth={true} source="meta.headline"  label="Title" validate={[required(), minLength(10), maxLength(255) ]}/>
               
               
                {/* <ReferenceField label="Company" reference="companies" target="company_id">
                    <Datagrid>
                        <TextField source="body" />
                        <DateField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceField> */}
    
    
    
                <ReferenceInput source="company_id" filter={{group_id: group_id}} perPage={100} reference="companies" label="Company" validate={[required(), number()]}>
                <AutocompleteInput optionText="slug" shouldRenderSuggestions={(value)=>true } />
                </ReferenceInput>
    
                <RadioButtonGroupInput fullWidth={true} source="category" validate={[required(), choices(categories.map(c=>c.id))]} choices={categories} />
    
            </SimpleForm>
        </Create>
    );
} 


export default PostCreate;