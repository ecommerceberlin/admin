import React from 'react';

const TicketTags = ({ record }) => (
  <ul>
    {record.tags.map(item => (
      <li key={item.name}>{item.name}</li>
    ))}
  </ul>
);

TicketTags.defaultProps = { addLabel: true };

export default TicketTags;
