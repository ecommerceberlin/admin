
import React from 'react'
import get from 'lodash/get'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'
import { roles } from '../../../api'

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: 5
    }
}));

const TicketRoleField = ({record, labelNotSet}) => {

    const classes = useStyles()

    if(!record){
        return null
    }

    const value = (get(record, "role") || "").trim()

    if(roles && Array.isArray(roles) && roles.includes(value)){
        return (<Chip color="secondary" label={value} size="small" className={classes.root} />)
    }

    return labelNotSet ? <span>{labelNotSet}</span>: null

}

export default TicketRoleField