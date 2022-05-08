import React from 'react';

// import compose from 'recompose/compose';
// import { withStyles } from '@mui/material/styles';

import {
  SelectInput
  //SelectArrayInput,
} from 'react-admin';

class Admin extends React.Component {
  buildChoices() {
    const { admins } = this.props;

    return admins.list.ids.map(id => ({
      id: admins.data[id].id,
      name: `${admins.data[id].fname} ${admins.data[id].lname}`
    }));
  }

  render() {
    const { source, label } = this.props;

    return (
      <SelectInput
        source={source}
        label={label}
        choices={this.buildChoices()}
      />
    );
  }
}

Admin.defaultProps = {};

export default Admin