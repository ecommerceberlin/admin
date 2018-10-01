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

    case DIALOG_HIDE:
      return { ...previousState, dialog: {} };

    default:
      return previousState;
  }
};
