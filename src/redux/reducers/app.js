import { CHANGE_EVENT, MESSAGE_CREATE } from '../types';
import { lsGet } from '../../api/app';

export default (previousState = { event: {}, message: {} }, action) => {
  switch (action.type) {
    case CHANGE_EVENT:
      return { ...previousState, event: action.payload };
      break;

    case MESSAGE_CREATE:
      return { ...previousState, message: action.payload };
      break;

    default:
      return previousState;
  }
};
