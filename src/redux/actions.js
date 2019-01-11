import * as Types from './types';
import { UPDATE } from 'react-admin';

export const changeEvent = event => ({
  type: Types.CHANGE_EVENT,
  payload: event
});

export const changeCompanyAdmin = (id, admin_id, basePath) => ({
  type: Types.CHANGE_COMPANY_ADMIN,
  payload: { id, data: { admin_id } },
  meta: { fetch: UPDATE, resource: 'companies' }
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
