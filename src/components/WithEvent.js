import React from 'react';
import { connect } from 'react-redux';
import { refreshView } from 'react-admin';

class WithEvent extends React.Component {
  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.props.activeEventId !== nextProps.activeEventId){
  //     return true
  //   }
  //   return false
  // }

  // componentDidUpdate(prevProps){
  //   console.log(this.props, prevProps)
  //   this.props.refreshView();
  // }

  render() {
    return this.props.children(this.props.activeEventId, {});
  }
}

export default connect(
  state => ({
    activeEventId:
      'id' in state.app.event && state.app.event.id ? state.app.event.id : 0
  }),
  { refreshView }
)(WithEvent);
