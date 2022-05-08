import React from 'react';
import { SelectInput } from 'react-admin';

//https://github.com/marmelab/react-admin/blob/6015670a863bef868a0cafcfb1706187609a6369/packages/ra-core/src/actions/dataActions.js

class FilterByTicketId extends React.Component {
  componentWillMount() {
    // this.props.crudGetList(
    //   'tickets',
    //   { page: 1, perPage: 100 },
    //   { field: 'id', order: 'ASC' },
    //   { event_id: this.props.event.id }
    // );
  }

  buildTicketList() {
    const { data, list } = this.props.tickets;

    if (!'ids' in list || !Array.isArray(list.ids)) {
      return [];
    }

    return list.ids.map(id => ({ id: data[id].id, name: data[id].name }));
  }

  render() {
    return <SelectInput source="ticket_id" choices={this.buildTicketList()} />;
  }
}

FilterByTicketId.defaultProps = {
  tickets: {},
  event: {}
};

export default FilterByTicketId