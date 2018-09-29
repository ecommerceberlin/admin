import * as Types from './types';

export const changeEvent = event => ({
  type: Types.CHANGE_EVENT,
  payload: event
});

export const createMessage = data => ({
  type: Types.MESSAGE_CREATE,
  payload: data
});

export const showDialog = data => ({
  type: Types.DIALOG_SHOW,
  payload: data
});

export const hideDialog = () => ({
  type: Types.DIALOG_HIDE
});

// export const changeEvent = (id, data, basePath) => ({
//     type: Types.CHANGE_EVENT,
//     payload: { id, data: { ...data, is_approved: true } },
//     meta: { resource: 'comments', fetch: UPDATE },
// });
