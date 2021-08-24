import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      marginRight: 5
  }
}));

const TagsField = ({ record }) => {

  const classes = useStyles()

  if(!record || !("tags" in record)){
    return null
  }

  return (
    <span>
      {record.tags.map(item => (
        <Chip size="small" variant="outlined" key={item.name} label={item.name} className={classes.root} />
      ))}
    </span>
  );
}

export default TagsField;
