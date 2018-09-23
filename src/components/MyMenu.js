import React from 'react';
import { Menu } from 'react-admin';
import { connect } from 'react-redux';

const MyMenu = ({ dispatch, activeEvent, ...props }) => {
  return <Menu key={activeEvent.id} {...props} />;
};

export default connect(
  state => ({
    activeEvent: state.app.event
  }),
  null
)(MyMenu);
