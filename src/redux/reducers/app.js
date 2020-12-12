import { CHANGE_EVENT, CHANGE_GROUP, MESSAGE_CREATE } from '../types';

export default (
  previousState = {
    event: null,
    group: null,
    message: {
      subject: '',
      text: ''
    }
  },
  action
) => {
  switch (action.type) {

    case CHANGE_GROUP:
      return { ...previousState, group: action.payload };

    case CHANGE_EVENT:
      return { ...previousState, event: action.payload };

    case MESSAGE_CREATE:
      return { ...previousState, message: action.payload };

    default:
      return previousState;
  }
};
