import { CHANGE_EVENT } from '../types';
import { lsGet } from '../../api/app';

export default (previousState = { event: {} }, { type, payload }) => {
  if (type === CHANGE_EVENT) {
    return { ...previousState, event: payload };
  }
  return previousState;
};
