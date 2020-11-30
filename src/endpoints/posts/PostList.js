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
    ChipField,
    FunctionField,
    useListContext,
    EditButton
} from 'react-admin';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
// import ResetViewsButton from './ResetViewsButton';
import activeEventId from '../../api/app';

const PostBulkActionButtons = props => (
    <React.Fragment>
        {/* <ResetViewsButton label="Reset Views" {...props} /> */}
        {/* default bulk delete action */}
        <BulkDeleteButton {...props} />
    </React.Fragment>
);


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    </Filter>
);

const Aside = () => {
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

const PostList = (props) => (
    <List 
    filters={<PostFilter />}
    filter={{ event_id: activeEventId() }}
    bulkActionButtons={<PostBulkActionButtons />}
   // filterDefaultValues={{ is_published: true }}
    perPage={100}
    sort={{ field: 'id', order: 'DESC' }}
    aside={<Aside />}
    exporter={false}
    {...props}>
        <Datagrid>
            <TextField source="id" />

            <BooleanField source="is_published" label="Published?" /> 
            <TextField source="meta.headline" label="Title" />
            <ChipField source="category" />
            <TextField source="company.profile.name" />
            <DateField source="updated_at" />
            <DateField source="published_at" />
            <EditButton />
    
        </Datagrid>
    </List>
);

export default PostList