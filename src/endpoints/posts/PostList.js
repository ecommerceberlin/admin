import React from "react";
import { 
    BulkDeleteButton, 
    Filter, 
    List, 
    Datagrid, 
    TextField, 
    TextInput, 
    DateField, 
    BooleanField, 
    BooleanInput,
    ChipField,
    FunctionField,
    useListContext,
    EditButton,
    SelectInput,
    ReferenceInput,
    AutocompleteInput
} from 'react-admin';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {useApiContext} from '../../api';
import get from 'lodash/get'
import categories from './categories'
import {CroppedTextField} from '../../components'
import PostListBulkActions from './components/PostListBulkActions'

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" />
        <BooleanInput source="is_promoted" label="Promoted?" />
        <BooleanInput source="is_sticky" label="Sticky?" />
        <BooleanInput source="is_published" label="Published?" />
        <SelectInput
            source="category"
            choices={categories}
        />
        <ReferenceInput source="company_id" reference="companies" label="Company">
        <AutocompleteInput optionText="profile.name" shouldRenderSuggestions={()=>true} />
        </ReferenceInput>

    </Filter>
);

const Aside = () => {
    
    const [group_id, event_id] = useApiContext();
    const { data, ids } = useListContext();

    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Post details</Typography>
            <Typography variant="body2">
                Posts will only be published once approved
            </Typography>
        </div>
    );
}

const PostList = (props) => {

    const [group_id, event_id] = useApiContext();

    return (
        <List 
            filters={<PostFilter />}
            filter={{ group_id: group_id }}
            bulkActionButtons={<PostListBulkActions />}
        // filterDefaultValues={{ is_published: true }}
            perPage={100}
            sort={{ field: 'id', order: 'DESC' }}
            aside={<Aside />}
            exporter={false}
            {...props}
        >
            <Datagrid>
    
                <TextField source="id" />
                <BooleanField source="is_published" label="Published?" /> 
                <CroppedTextField source="meta.headline" label="Title" />
                <ChipField source="category" />
                <CroppedTextField resolve={["company.profile.name", "company.slug"]} label="Company" />
                <DateField source="updated_at" />
                <DateField source="published_at" />
                <EditButton />
        
            </Datagrid>
        </List>
    );

} 

export default PostList