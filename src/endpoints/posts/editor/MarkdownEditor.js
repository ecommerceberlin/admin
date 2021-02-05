
import React, {useState, useEffect, Children} from "react";
import { useInput, Labeled, fetchUtils, useRefresh } from 'react-admin';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert'; 
import Button from '@material-ui/core/Button'; 
import Editor from "rich-markdown-editor";
import debounce from "lodash/debounce";
import * as embeds  from './embeds';
import theme from './theme';
//import {Image as CloudinaryImage} from 'cloudinary-react'
import {uploadFile} from '../../../api'
import ReuseAlreadyUploadedImage from './ReuseAlreadyUploadedImage'

const useStyles = makeStyles(theme => ({
    alert: {
      marginBottom: 20
    },
    root : {
        transition: 'background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        // maxWidth: 800,
        minWidth: 500,
        borderColor: "#666",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingLeft: 30
    }
}))

const ContentProtector = ({children, content}) => {

    const classes = useStyles();

    const [value, setValue] = useState(content);
    const [newContent, setNewContent] = useState(null);

    useEffect(()=>{

      if(content != value){

        if(!value || value==":)"){
          setValue(content)
          return;
        }

        setNewContent(Math.abs(content.length - value.length))
      }
    }, [content])

    const handleAccept = () => {setValue(content); setNewContent(null)}
    const handleReject = () => {setNewContent(null)}

    return (<div>
      {newContent && <Alert severity="error" className={classes.alert}>
        Content changed - diff: {newContent} char(s). Accept changes? 
        <Button onClick={handleAccept}>Accept</Button>
        <Button onClick={handleReject}>Reject</Button>
    </Alert>}{children(value)}
    </div>)

}

export const MarkdownEditor = (props) => {
   
    const refresh = useRefresh();

    const {
        input: { name, onChange, onBlur, onFocus, value, checked},
        meta: { touched, error},
        isRequired
    } = useInput(props)

    const classes = useStyles();

    const handleChange = debounce(value => {
        const text = value();
        onChange(text)
      }, 250);

    const {record: {id, meta: {body}}, label, resource} = props;

    return (<ContentProtector content={body}>{
      (content) => <Box p={1} mb={1} borderBottom={1} className={classes.root}>                           
       <Labeled label={label || name}>
         <Editor
        id={name}
        defaultValue={content}
        value={content}
        theme={theme}
        readOnly={false}
        headingsOffset={2}
        onChange={handleChange}

        // handleDOMEvents={{
        //   focus: () => console.log("FOCUS"),
        //   blur: () => console.log("BLUR"),
        //   paste: () => console.log("PASTE"),
        //   touchstart: () => console.log("TOUCH START"),
        // }}

        extensions={[new ReuseAlreadyUploadedImage()]}

        onSave={options => console.log("Save triggered", options)}
        onCancel={() => console.log("Cancel triggered")}
        onClickLink={(href, event) =>
            console.log("Clicked link: ", href, event)
          }
        onHoverLink={event => {
            console.log("Hovered link: ", event.target.href);
            return false;
        }}
        onClickHashtag={(tag, event) =>
            console.log("Clicked hashtag: ", tag, event)
        }
        onCreateLink={title => {
            console.log("onCreateLink link: ", title);
            // Delay to simulate time taken for remote API request to complete
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (title !== "error") {
                  return resolve(
                    `/doc/${encodeURIComponent(title.toLowerCase())}`
                  );
                } else {
                  reject("500 error");
                }
              }, 1500);
            });
        }}
        onShowToast={(message, type) => window.alert(`${type}: ${message}`)}
        onSearchLink={async term => {
            console.log("Searched link: ", term);

            // Delay to simulate time taken for remote API request to complete
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(
                  // docSearchResults.filter(result =>
                  //   result.title.toLowerCase().includes(term.toLowerCase())
                  // )

                  [{title: "asd", href: "https://google.com"}, {title: "ass222sd", href: "https://google.com"}]
                );
              }, Math.random() * 500);
            });
        }}
        uploadImage={file => new Promise(resolve => uploadFile(file, resource, id).then(data => resolve(data.path)) )}
        embeds={Object.values(embeds)}
        />
       
    </Labeled>
    </Box> }</ContentProtector> )
}

export default MarkdownEditor