import React from 'react';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import { changeResourceFlag } from '../../../redux';

class Flagswitch extends React.Component {
  constructor(props) {
    super(props);
    const { record, source, checkedValue } = this.props;
    this.state = { status: record[source] == checkedValue ? true : false };
  }

  handleChange = name => event => {
    const {
      record,
      resource,
      source,
      changeResourceFlag,
      checkedValue,
      unCheckedValue
    } = this.props;

    this.setState(
      {
        status: event.target.checked
      },
      function() {
        const { status } = this.state;

        changeResourceFlag(resource, record.id, {
          [source]: status ? checkedValue : unCheckedValue
        });
      }
    );
  };

  render() {
    const { status } = this.state;
    const { checkedValue } = this.props;

    return (
      <Switch
        checked={status ? true : false}
        onChange={this.handleChange()}
        value={checkedValue}
      />
    );
  }
}

Flagswitch.defaultProps = {
  addLabel: true,
  checkedValue: '1',
  unCheckedValue: '0'
};

export default connect(
  null,
  {
    changeResourceFlag
  }
)(Flagswitch);
