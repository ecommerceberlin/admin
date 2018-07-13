import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, ShowButton, DisabledInput, TextInput, SelectInput, Filter } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;




const Filters = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Title" source="title" defaultValue="Hello, World!" />

        <SelectInput source="tag" choices={[
      { id: 'programming', name: 'Programming' },
      { id: 'lifestyle', name: 'Lifestyle' },
      { id: 'photography', name: 'Photography' },
      ]} />


    </Filter>
);



const ViewList = (props) => (
    <List {...props} perPage={50} filters={<Filters />}>
        <Datagrid>
            <TextField source="email" />
            <TextField source="status" />

            <DateField source="created_at" />
            <TextField source="amount" />
            <ShowButton basePath="/purchases" />
        </Datagrid>
    </List>
);

export default ViewList
