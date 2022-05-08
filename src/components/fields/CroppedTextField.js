import React from 'react'
import get from 'lodash/get'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    text: {
     fontWeight: 600
    },

}));

const flatten = array_or_string => [].concat(array_or_string).join()

const CroppedTextField = ({bold, record, source, resolve, limit=50, ...rest}) => {
    
    const classes = useStyles();

    let text;

    if(resolve && Array.isArray(resolve)){
        const found = resolve.find(item => flatten(get(record, item, "")).length > 1)
        text = flatten(get(record, found, ""));
    }else{
        text = flatten(get(record, source, ""));
    }

    return <span className={bold ? classes.text: null}>{text.substr(0, limit)}{text.length>limit && "..."}</span>;
  
}

CroppedTextField.defaultProps = {
    addLabel: true,
    bold: false
}

export default CroppedTextField