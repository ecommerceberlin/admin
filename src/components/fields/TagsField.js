import React from 'react';

const TagsField = ({ record }) => (
  <ul>
    {record.tags.map(item => (
      <li key={item.name}>{item.name}</li>
    ))}
  </ul>
);

TagsField.defaultProps = { addLabel: true };

export default TagsField;
