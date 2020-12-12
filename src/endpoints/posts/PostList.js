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
// import ResetViewsButton from './ResetViewsButton';
import {useApiContext} from '../../api';
import get from 'lodash/get'
import categories from './categories'


const PostBulkActionButtons = props => (
    <React.Fragment>
        {/* <ResetViewsButton label="Reset Views" {...props} /> */}
        {/* default bulk delete action */}
        <BulkDeleteButton {...props} />
    </React.Fragment>
);

const CroppedTextField = ({record, source, ...rest}) => {
    const text = get(record, source, "");
    const limit = 40;
    return <span>{text.substr(0, limit)}{text.length>limit && "..."}</span>;

}

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
            filter={{ event_id: event_id }}
            bulkActionButtons={<PostBulkActionButtons />}
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
                <CroppedTextField source="meta.headline"  />
                <ChipField source="category" />
                <TextField source="company.profile.name" />
                <DateField source="updated_at" />
                <DateField source="published_at" />
                <EditButton />
        
            </Datagrid>
        </List>
    );

} 

export default PostList