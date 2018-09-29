import { DIALOG_HIDE, DIALOG_SHOW } from '../types';

export default (
  previousState = {
    dialog: {}
  },
  action
) => {
  switch (action.type) {
    case DIALOG_SHOW:
      return { ...previousState, dialog: action.payload };
      break;

    case DIALOG_HIDE:
      return { ...previousState, dialog: {} };
      break;

    default:
      return previousState;
  }
};
