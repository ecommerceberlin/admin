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
    AutocompleteInput,
    Button
} from 'react-admin';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import {useApiContext} from '../../api';
import get from 'lodash/get'
import categories from './categories'
import {CroppedTextField} from '../../components'
import PostListBulkActions from './components/PostListBulkActions'
import PostFlagsField from './components/PostFlagsField'
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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

const PreviewButton = ({record, label}) => {

   if(!record){
       return null
   }
    
   const href = `https://ehandel.com.pl/api/preview?secret=12345&slug=/preview,${record.id}`

   return ( <IconButton href={href} target="_blank" label="Preview"><PlayArrowIcon/></IconButton>)
}

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
                {/* <TextField source="id" /> */}
                <CroppedTextField resolve={["company.profile.name", "company.slug"]} label="Company" />
                <CroppedTextField source="meta.headline" label="Title" bold={true} />
                <EditButton />
                <PostFlagsField label="Status" /> 
                <ChipField source="category" />
                {/* <DateField source="updated_at" /> */}
                <DateField source="published_at" />
                <PreviewButton />
            </Datagrid>
        </List>
    );

} 

export default PostList