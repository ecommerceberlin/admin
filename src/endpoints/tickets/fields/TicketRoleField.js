
import React from 'react'
import get from 'lodash/get'
import Chip from '@mui/material/Chip'
import { useSettings } from '../../../contexts';

const importantRoles = ["exhibitor"]

const TicketRoleField = ({record, labelNotSet}) => {

    const roles = useSettings("roles")

    const classes = useStyles()

    if(!record){
        return null
    }

    const value = (get(record, "role") || "").trim()

    if(roles && Array.isArray(roles) && roles.includes(value)){
        return (<Chip color={importantRoles.includes(value)? "primary": "default"} label={value} size="small" variant="outlined" sx={{
            marginRight: 5
        }} />)
    }

    return labelNotSet ? <span>{labelNotSet}</span>: null

}

export default TicketRoleField