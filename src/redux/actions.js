import * as Types from './types';
import { UPDATE, UPDATE_MANY } from 'react-admin';


export const changeGroup = (data, active_event_id = 0) => ({
  type: Types.CHANGE_GROUP,
  payload: data,
  active_event_id: active_event_id
});

export const changeEvent = data => ({
  type: Types.CHANGE_EVENT,
  payload: data
});



export const changeCompanyAdmin = (id, data, basePath) => ({
  type: Types.CHANGE_COMPANY_ADMIN,
  payload: { id, data },
  meta: {
    fetch: UPDATE,
    resource: 'companies',
    refresh: true
    // notification: {
    //   body: 'resources.comments.notification.approved_success',
    //   level: 'info',
    // },
    // redirectTo: '/comments',
    // unselectAll : true,
    // basePath : basePath
  }
});

export const bulkChangeCompanyAdmin = (ids, data, basePath) => ({
  type: Types.BULK_CHANGE_COMPANY_ADMIN,
  payload: { ids, data },
  meta: {
    fetch: UPDATE_MANY,
    resource: 'companies',
    refresh: true,
    // notification: {
    //   body: 'resources.comments.notification.approved_success',
    //   level: 'info',
    // },
    // redirectTo: '/comments',
    unselectAll: true
    // basePath : basePath
  }
});

export const changeResourceFlag = (resource, id, data, basePath) => ({
  type: Types.CHANGE_RESOURCE_FLAG,
  payload: { id, data },
  meta: {
    fetch: UPDATE,
    resource: resource,
    refresh: true
    // notification: {
    //   body: 'resources.comments.notification.approved_success',
    //   level: 'info',
    // },
    // redirectTo: '/comments',
    // unselectAll : true,
    // basePath : basePath
  }
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
