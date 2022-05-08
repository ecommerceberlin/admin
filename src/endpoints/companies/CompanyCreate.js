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

    // const notify = useNotify();
    // const refresh = useRefresh();
    // const redirect = useRedirect();

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
    
    
    
                <ReferenceInput source="company_id" reference="companies" label="Company" validate={[required(), number()]}>
                <AutocompleteInput optionText="profile.name" shouldRenderSuggestions={()=>true} />
                </ReferenceInput>
    
                {/* <RadioButtonGroupInput fullWidth={true} source="category" validate={[required(), choices(categories.map(c=>c.id))]} choices={categories} /> */}
    
            </SimpleForm>
        </Create>
    );
} 


export default PostCreate;