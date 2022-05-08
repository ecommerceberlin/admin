import React from 'react'
import { useTranslate } from 'react-admin';
import Chip from '@mui/material/Chip';
import {makeStyles} from '@mui/styles'

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};


export default QuickFilter;