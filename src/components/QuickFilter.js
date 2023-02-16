import React from 'react'
import { useTranslate } from 'react-admin';
import Chip from '@mui/material/Chip';

const QuickFilter = ({ label="" }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />
};


export default QuickFilter;