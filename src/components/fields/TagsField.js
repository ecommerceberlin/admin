import React from 'react';
import Chip from '@mui/material/Chip';
import get from 'lodash/get'
import { useRecordContext } from 'react-admin';


const TagsField = ({ source="tags", variant="outlined", color="default" }) => {

  const record = useRecordContext()
  const tags = get(record, source, null);

  if(!record || !tags || !Array.isArray(tags)){
    return null
  }

  return (
    <span>
      {tags.map(({name}) => (
        <Chip size="small" color={color} variant={variant} key={name} label={name} sx={{mr: 1}} />
      ))}
    </span>
  );
}

export default TagsField;
