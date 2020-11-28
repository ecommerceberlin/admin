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
    useListContext 
} from 'react-admin';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
// import ResetViewsButton from './ResetViewsButton';

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
                Posts will only be published one an editor approves them
            </Typography>
        </div>
    );
}


const PostList = (props) => (
    <List 
    filters={<PostFilter />}
    bulkActionButtons={<PostBulkActionButtons />}
    filterDefaultValues={{ is_published: true }}
    perPage={100}
    sort={{ field: 'published_at', order: 'DESC' }}
    aside={<Aside />}
    {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
);

export default PostList