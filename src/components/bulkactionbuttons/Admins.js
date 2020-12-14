import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import get from 'lodash/get';

import { showDialog, hideDialog } from '../../redux';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class Admins extends React.Component {
  render() {
    const { admins, classes, selected, onClick } = this.props;

    return (
      <List className={classes.root}>
        {admins.list.ids.map(id => (
          <ListItem
            key={id}
            button
            selected={id == selected}
            onClick={() => onClick(id)}
          >
            <Avatar>{get(admins.data[id], 'initials')}</Avatar>
            <ListItemText
              primary={`${get(admins.data[id], 'fname')} ${get(
                admins.data[id],
                'lname'
              )}`}
              secondary="."
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

Admins.defaultProps = {
  admins: {},
  selected: 0,
  onClick: function() {}
};

const enhance = compose(
  withStyles(styles),
  connect(
    state => ({ admins: state.admin.resources.admins }),
    { showDialog, hideDialog }
  )
);

export default enhance(Admins);
