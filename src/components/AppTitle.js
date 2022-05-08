import React from 'react';
//import PropTypes from 'prop-types';


const AppTitle = ({ event, ...rest }) => {
  //console.log(event, rest);
  return <span>{event && 'name' in event ? event.name : '______'}</span>;
};

AppTitle.defaultProps = {
  event: {}
};

AppTitle.propTypes = {};

export default AppTitle


// connect(
//   state => ({ event: state.app.event }),
//   {}
// )();
