
import React from 'react'
import {
    FunctionField,
    ChipField
} from 'react-admin'
import get from 'lodash/get'
import { makeStyles, Chip } from '@material-ui/core';


const ConstrainedChipField = ({record, source, values, labelNotSet}) => {

    if(!record){
        return null
    }

    const value = (get(record, source) || "").trim()

    if(values && Array.isArray(values) && values.includes(value)){
        return (<Chip label={value} />)
    }

    return <span>{labelNotSet}</span>

}

ConstrainedChipField.defaultProps = {
    labelNotSet: "none"
}

export default ConstrainedChipField