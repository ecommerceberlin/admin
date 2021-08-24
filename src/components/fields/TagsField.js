import React from 'react';
import Chip from '@material-ui/core/Chip';

const TagsField = ({ record }) => {

  if(!record || !("tags" in record)){
    return null
  }

  return (
    <span>
      {record.tags.map(item => (
        <Chip size="small" variant="outlined" key={item.name} label={item.name} />
      ))}
    </span>
  );
}

export default TagsField;
