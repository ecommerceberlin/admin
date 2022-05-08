import React from 'react';
import { showNotification, refreshView, UPDATE } from 'react-admin';

import compose from 'recompose/compose';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import { withStyles } from '@mui/material/styles';
import Icon from '@mui/icons-material/Edit';

import { statuses as styles } from '../../styles';
import { statuses } from '../../api/app';
import dataProvider from '../../api/httpClient';

class PurchaseStatusField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      control: 'chip',
      status: this.props.record.status
    };
  }
  handleClick = name => event => {
    this.setState({ control: 'select' });
  };

  handleStatusChange = name => event => {
    this.setState(
      {
        //control : "chip",
        status: event.target.value
      },
      function() {
        const { resource, showNotification, refreshView, record } = this.props;
        const { status } = this.state;

        dataProvider(UPDATE, resource, {
          id: record.id,
          data: {
            status: status
          }
        })
          .then(({ data }) => {
            showNotification('participants.status.changed', 'info');
            refreshView();
          })
          .catch(e => {
            console.error(e);
            showNotification('Error', 'warning');
          });
      }
    );
  };

  handleClose = name => event => {
    this.setState({
      control: 'chip'
    });
  };

  select() {
    const { classes, record, source, ...rest } = this.props;
    const { status } = this.state;

    return (
      <Select
        value={status}
        onChange={this.handleStatusChange()}
        onClose={this.handleClose()}
        classes={{
          root: classes[record.status],
          selected: classes.highlight
        }}
        open={true}
      >
        {statuses
          .filter(({ id }) => record.status != id)
          .map(({ id, name }) => (
            <MenuItem
              classes={{
                root: classes[id]
              }}
              key={id}
              value={id}
            >
              {name}
            </MenuItem>
          ))}
      </Select>
    );
  }

  chip() {
    const { classes, record, source, ...rest } = this.props;
    const { status } = this.state;

    // console.log("new status", status);

    return (
      <Chip
        classes={{ root: classes[record.status] }}
        label={record[source]}
        clickable={true}
        onClick={this.handleClick()}
        icon={<Icon className={classes.icon} />}
      />
    );
  }

  render() {
    const { control } = this.state;

    return this[control]();
  }
}

// const enhance = compose(
//   withStyles(styles),
//   connect(
//     null,
//     { showNotification, refreshView }
//   )
// );

export default PurchaseStatusField
