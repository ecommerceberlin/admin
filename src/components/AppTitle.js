// in src/comments/ApproveButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AppTitle = ({ event }) => (
  <span>{event && 'name' in event ? event.name : 'All'}</span>
);

AppTitle.defaultProps = {
  event: {}
};

AppTitle.propTypes = {};

export default connect(
  state => ({ event: state.app.event }),
  {}
)(AppTitle);
