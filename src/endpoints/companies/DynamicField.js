import React from 'react';
import dataProvider from '../../api/httpClient';
import get from 'lodash/get';

class DynamicField extends React.Component {
  render() {
    const { record, source, filters } = this.props;

    const { fields } = filters;

    return fields
      ? fields.map(item => (
          <div key={item}>{get(record, `profile.${item}`)}</div>
        ))
      : null;
  }
}

DynamicField.defaultProps = {
  addLabel: true,
  filters: [],
  sortable: false
};

export default DynamicField