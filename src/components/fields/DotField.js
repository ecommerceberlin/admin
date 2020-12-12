
import React from 'react'
import {
    FunctionField,
    ChipField
} from 'react-admin'
import get from 'lodash/get'
import { makeStyles, Chip } from '@material-ui/core';
import ActiveIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
      
    select: {
      color: "#fff"
    },

    icon: {
        fontSize: "1em",
        fill: "lightgreen",
        position: "relative",
        top: 2,
        marginRight: 10
    }
}));



const DotField = () => {

    const classes = useStyles();

    return (<ActiveIcon className={classes.icon}/>)
}


export default DotField;