import { CHANGE_EVENT, CHANGE_GROUP, MESSAGE_CREATE } from '../types';

export default (
  previousState = {
    event_id: 0,
    group_id: 0,
    message: {
      subject: '',
      text: ''
    }
  },
  action
) => {
  switch (action.type) {

    case CHANGE_GROUP:
      return { ...previousState, group_id: action.payload };

    case CHANGE_EVENT:
      return { ...previousState, event_id: action.payload };

    case MESSAGE_CREATE:
      return { ...previousState, message: action.payload };

    default:
      return previousState;
  }
};
