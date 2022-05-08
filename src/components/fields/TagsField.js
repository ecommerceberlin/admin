import React from 'react';
import Chip from '@mui/material/Chip';
import {makeStyles} from '@mui/styles'
import get from 'lodash/get'

const useStyles = makeStyles((theme) => ({
  root: {
      marginRight: 5
  }
}));

const TagsField = ({ record, source="tags", variant="outlined", color="default" }) => {

  const classes = useStyles()
  const tags = get(record, source, null);

  if(!record || !tags){
    return null
  }

  return (
    <span>
      {tags.map(tag => (
        <Chip size="small" color={color} variant={variant} key={tag.name} label={tag.name} className={classes.root} />
      ))}
    </span>
  );
}

export default TagsField;
