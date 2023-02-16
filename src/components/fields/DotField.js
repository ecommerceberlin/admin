
import React from 'react'
import ActiveIcon from '@mui/icons-material/FiberManualRecord';
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import isEmpty from 'lodash/isEmpty'
import { useRecordContext } from 'react-admin';
 
const DotField = ({options}) => {

    const record = useRecordContext()

    if(!isObject(options) || isEmpty(record)){
        return null;
    }

    const dots = [];

    Object.keys(options).forEach(color => {
        const condition = options[color]

        if(isFunction(condition) && condition(record)){
            dots.push(<ActiveIcon key={color} fontSize="large"  style={{color}}/>)
        }

    })

    return dots;
   
}



export default DotField;