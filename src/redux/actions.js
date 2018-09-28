import { CHANGE_EVENT, MESSAGE_CREATE } from './types';

export const changeEvent = event => ({
  type: CHANGE_EVENT,
  payload: event
});

export const createMessage = data => ({
  type: MESSAGE_CREATE,
  payload: data
});

// export const changeEvent = (id, data, basePath) => ({
//     type: Types.CHANGE_EVENT,
//     payload: { id, data: { ...data, is_approved: true } },
//     meta: { resource: 'comments', fetch: UPDATE },
// });
