import React from 'react';
import { connect } from 'react-redux';
// import compose from 'recompose/compose';
// import { withStyles } from '@material-ui/core/styles';

import {
  SelectInput
  //SelectArrayInput,
} from 'react-admin';

class Admin extends React.Component {
  buildChoices() {
    const { admins } = this.props;

    return admins.list.ids.map(id => ({
      id: admins.data[id].id,
      name: admins.data[id].initials
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

export default connect(
  state => ({ admins: state.admin.resources.admins }),
  {}
)(Admin);
