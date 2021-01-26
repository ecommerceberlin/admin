
import React, {useMemo} from "react";
import { useInput, Labeled, fetchUtils } from 'react-admin';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Editor from "rich-markdown-editor";
import debounce from "lodash/debounce";
import * as embeds  from './embeds';
import theme from './theme';
//import {Image as CloudinaryImage} from 'cloudinary-react'
import {uploadFile} from '../../../api'

const useStyles = makeStyles(theme => ({
    root : {
        transition: 'background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        maxWidth: 800,
        minWidth: 500,
        borderColor: "#666",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingLeft: 30
    }
}))


export const MarkdownEditor = (props) => {
   
    const {
        input: { name, onChange, onBlur, onFocus, value, checked},
        meta: { touched, error},
        isRequired
    } = useInput(props)

    const classes = useStyles();

    const {record: {id, meta: {body}}, label, resource} = props;

    const handleChange = debounce(value => {
        const text = value();
        onChange(text)
      }, 250);

    return (<Box p={1} mb={1} borderBottom={1} className={classes.root}>                           
       <Labeled label={label || name}>
        <Editor
        id={name}
      //DOESN'T WORK!!!!  defaultValue={body}
        value={body}
        theme={theme}
        readOnly={false}
        headingsOffset={2}
        onChange={handleChange}
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
    </Box> )
}

export default MarkdownEditor