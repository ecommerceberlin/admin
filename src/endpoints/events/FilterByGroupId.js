import React from 'react';
import { SelectInput, crudGetList } from 'react-admin';
import { connect } from 'react-redux';

//https://github.com/marmelab/react-admin/blob/6015670a863bef868a0cafcfb1706187609a6369/packages/ra-core/src/actions/dataActions.js

class FilterByGroupId extends React.Component {
  componentWillMount() {
    this.props.crudGetList(
      'groups',
      { page: 1, perPage: 1000 },
      { field: 'id', order: 'ASC' },
      {}
    );
  }

  choices() {
    const { data, list } = this.props.groups;

    if (!'ids' in list || !Array.isArray(list.ids)) {
      return [];
    }

    return list.ids.map(id => ({ id: data[id].id, name: data[id].name }));
  }

  render() {
    return <SelectInput source="group_id" choices={this.choices()} />;
  }
}

FilterByGroupId.defaultProps = {
  groups: {},
  event: {}
};

export default connect(
  state => ({
    event: state.app.event,
    groups: state.admin.resources.groups
  }),
  { crudGetList }
)(FilterByGroupId);
