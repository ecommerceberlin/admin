import React from 'react';

import get from 'lodash/get';

const ShowTitle = ({ record }) => {
  return (
    <span>
      {record
        ? `${get(record, 'fields.fname')} ${get(record, 'fields.lname')} ${
            record.email
          }`
        : ''}
    </span>
  );
};

export default ShowTitle;
