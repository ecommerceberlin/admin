
import React from 'react'
import get from 'lodash/get'
import { makeStyles } from '@mui/styles';
import Chip from '@mui/material/Chip'
import { roles } from '../../../api'

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: 5
    }
}));


const importantRoles = ["exhibitor"]

const TicketRoleField = ({record, labelNotSet}) => {

    const classes = useStyles()

    if(!record){
        return null
    }

    const value = (get(record, "role") || "").trim()

    if(roles && Array.isArray(roles) && roles.includes(value)){
        return (<Chip color={importantRoles.includes(value)? "primary": "default"} label={value} size="small" variant="outlined" className={classes.root} />)
    }

    return labelNotSet ? <span>{labelNotSet}</span>: null

}

export default TicketRoleField