
import React from 'react'
import ActiveIcon from '@material-ui/icons/FiberManualRecord';
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import isEmpty from 'lodash/isEmpty'
 
const DotField = ({options, record}) => {

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