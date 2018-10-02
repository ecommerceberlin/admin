import React from 'react';

import get from 'lodash/get';

const ShowTitle = ({ record }) => {
  return <span>{record ? `${get(record, 'profile.name')}` : ''}</span>;
};

export default ShowTitle;
