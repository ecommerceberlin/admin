import React from 'react'
import get from 'lodash/get'
import { useRecordContext } from 'react-admin';
 
const flatten = array_or_string => [].concat(array_or_string).join()

const CroppedTextField = ({bold, source, resolve, limit=50, ...rest}) => {
    
    const record = useRecordContext();

    let text;

    if(resolve && Array.isArray(resolve)){
        const found = resolve.find(item => flatten(get(record, item, "")).length > 1)
        text = flatten(get(record, found, ""));
    }else{
        text = flatten(get(record, source, ""));
    }

    return <Box component="span" sx={{
        fontWeight: bold? 600: 300
    }}>{text.substr(0, limit)}{text.length>limit && "..."}</Box>;
  
}

CroppedTextField.defaultProps = {
    addLabel: true,
    bold: false
}

export default CroppedTextField