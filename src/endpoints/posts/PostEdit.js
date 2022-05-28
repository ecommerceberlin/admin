import React, {useState} from "react";
import { 
    Edit, 
    TabbedForm, 
    FormTab,
    TextInput, 
    DateTimeInput,  
    BooleanInput,  
    required,
    choices,
    RadioButtonGroupInput,
    ReferenceInput,
    SelectInput,
    number,
    maxLength,
    AutocompleteInput,
    useUpdate,
    useRefresh
} from 'react-admin';
import Typography from '@mui/material/Typography'
import RaEditor from './editor/MarkdownEditor'
import categories from './categories'
import { makeStyles } from '@mui/styles';
import cn from 'classnames'
import { useGroupId } from "../../contexts";

/**
 * <TextField
            name={name}
            label={label}
            onChange={onChange}
            error={!!(touched && error)}
            helperText={touched && error}
        />
 */

 const useStyles = makeStyles({
    postImage : {
        cursor: 'pointer'
    },
    coverPostImage: {
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "darkred"
    }
 })

const Aside = ({ record }) => {

    const classes = useStyles();
    const refresh = useRefresh();

    const [mutate, { loading }] = useMutation();
    const approve = event =>  update("posts", {
        id: record.id,
        data: { cover_image_id: event.target.id }
    })
    
    
    // mutate({
    //     type: 'update',
    //     resource: '',
    //     payload: 
    // }, {
    //     onSuccess: () => {
    //         refresh();
    //     }
    // });

    const handleDragStart = (event, path) => {
        /**
         * https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
         */
        event.dataTransfer.setData("text/plain", path);
        console.log(event)
    }
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Post images</Typography>
            {record && record.images && record.images.map(image => (
                <img 
                    key={ image.id } 
                    id={ image.id } 
                    draggable="true" 
                    onDragStart={ (event) => handleDragStart(event, image.path) } 
                    src={ image.path } 
                    alt="" 
                    style={{width:"100%", marginBottom: 10}} 
                    onDoubleClick={ approve } 
                    disabled={ loading } 
                    className={ cn({
                        [classes.postImage] : true,
                        [classes.coverPostImage]: record.cover_image_id == image.id
                    }) }
                />
            ))}
        </div>
    );

}


const PostEdit = ({permissions, ...props}) => {
    

    const group_id = useGroupId()
    const event_id = useEventId()


    return (
        <Edit aside={<Aside />} {...props} mutationMode="pessimistic">
            <TabbedForm warnWhenUnsavedChanges>
    
             <FormTab label="Content">
    
                <TextInput disabled label="Id" source="id" />
                <TextInput source="meta.headline" label="Title" validate={required()} fullWidth />
                <TextInput multiline source="meta.quote" label="Intro" validate={maxLength(255)} options={{ multiline: true }} fullWidth />
                <RaEditor source="meta.body" label="Content" validate={required()}  />   
    
             </FormTab>
    
            <FormTab label="Company &amp; Author">
    
                <ReferenceInput filter={{group_id: group_id}} source="company_id" perPage={100} reference="companies" validate={[required(), number()]}>
                {/* <SelectInput optionText="profile.name" /> */}
                <AutocompleteInput optionText="slug" shouldRenderSuggestions={ (value)=> true } />
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
            <DateTimeInput label="Publication date" source="published_at" /**defaultValue={new Date()} */ />
    
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
}

export default PostEdit;