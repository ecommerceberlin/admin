import * as React from "react";
import { 
    Edit, 
    TabbedForm, 
    FormTab,
    TextInput, 
    DateInput,  
    BooleanInput,  
    required,
    choices,
    RadioButtonGroupInput,
    ReferenceInput,
    SelectInput,
    number,
    maxLength,
    AutocompleteInput
} from 'react-admin';
import Typography from '@material-ui/core/Typography'
import RaEditor from './editor/MarkdownEditor'
import categories from './categories'

/**
 * <TextField
            name={name}
            label={label}
            onChange={onChange}
            error={!!(touched && error)}
            helperText={touched && error}
        />
 */


const Aside = ({ record }) => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="h6">Post details</Typography>
        {record && (
            <Typography variant="body2">
                Creation date: {record.createdAt}
            </Typography>
        )}
    </div>
);


const PostEdit = ({permissions, ...props}) => (
    <Edit aside={<Aside />} {...props}>
        <TabbedForm warnWhenUnsavedChanges>

         <FormTab label="Content">

            <TextInput disabled label="Id" source="id" />
            <TextInput source="meta.headline" label="Title" validate={required()} fullWidth />
            <TextInput multiline source="meta.quote" label="Intro" validate={maxLength(255)} options={{ multiline: true }} fullWidth />
            <RaEditor source="meta.body" label="Content" validate={required()}  />   

         </FormTab>

        <FormTab label="Company &amp; Author">

            <ReferenceInput source="company_id" reference="companies" validate={[required(), number()]}>
            {/* <SelectInput optionText="profile.name" /> */}
            <AutocompleteInput optionText="profile.name" shouldRenderSuggestions={()=>true} />
            </ReferenceInput>

            <TextInput multiline source="meta.guestauthor" label="Autor description"  fullWidth />

         </FormTab>

        
        <FormTab label="SEO &amp; Social">

        <TextInput multiline fullWidth label="Alternative Title" source="meta.metatitle" />
        <TextInput multiline fullWidth label="Alternative Description" source="meta.metadescription" />
        <TextInput multiline fullWidth label="Keywords" source="meta.keywords" />

        </FormTab>

        <FormTab label="Publish">

        <RadioButtonGroupInput fullWidth={true} source="category" validate={[required(), choices(categories.map(c=>c.id))]} choices={categories} />
        <BooleanInput source="is_published" />
        <BooleanInput source="is_promoted" />
        <BooleanInput source="is_sticky" />
        <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />

        </FormTab>


       

            {/* <ReferenceField label="Comments" reference="companies" target="company_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceField> */}
        </TabbedForm>
    </Edit>
);

export default PostEdit;