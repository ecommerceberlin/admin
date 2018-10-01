import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AppTitle = ({ event, ...rest }) => {
  //console.log(event, rest);
  return <span>{event && 'name' in event ? event.name : '______'}</span>;
};

AppTitle.defaultProps = {
  event: {}
};

AppTitle.propTypes = {};

export default connect(
  state => ({ event: state.app.event }),
  {}
)(AppTitle);
