import { call, put, takeEvery, all } from 'redux-saga/effects';

import { setActiveEvent } from '../../api/app';
import { CHANGE_EVENT } from '../types';
import activeEventId from '../../api/app';

import { CRUD_GET_LIST_SUCCESS, crudGetList } from 'react-admin';

function* changeEvent(actionData) {
  yield call(setActiveEvent, actionData.payload);
}

function* getAdminsWhen(action) {
  const { meta } = action;
  if (meta.resource === 'companies') {
    yield put(
      crudGetList(
        'admins',
        { page: 1, perPage: 1000 },
        { field: 'id', order: 'ASC' },
        { event_id: activeEventId() }
      )
    );
  }
}

function* appSaga() {
  yield all([takeEvery(CHANGE_EVENT, changeEvent)]);
  yield all([takeEvery(CRUD_GET_LIST_SUCCESS, getAdminsWhen)]);
}

export default [appSaga];
