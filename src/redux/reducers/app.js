import { CHANGE_EVENT, MESSAGE_CREATE } from '../types';
//import { lsGet } from '../../api/app';

export default (
  previousState = {
    event: {},
    message: {
      subject: '',
      text: ''
    }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_EVENT:
      return { ...previousState, event: action.payload };

    case MESSAGE_CREATE:
      return { ...previousState, message: action.payload };

    default:
      return previousState;
  }
};
