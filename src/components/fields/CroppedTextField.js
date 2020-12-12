import React from 'react'
import get from 'lodash/get'

const flatten = array_or_string => [].concat(array_or_string).join()

const CroppedTextField = ({record, source, resolve, limit=40, ...rest}) => {
    
    let text;

    if(resolve && Array.isArray(resolve)){
        const found = resolve.find(item => flatten(get(record, item, "")).length > 1)
        text = flatten(get(record, found, ""));
    }else{
        text = flatten(get(record, source, ""));
    }

    return <span>{text.substr(0, limit)}{text.length>limit && "..."}</span>;
  
}

CroppedTextField.defaultProps = {
    addLabel: true
}

export default CroppedTextField