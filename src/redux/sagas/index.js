import { call, put, takeEvery, all } from 'redux-saga/effects';

import { setActiveEvent } from '../../api/app';
import activeEventId from '../../api/app';

import { CHANGE_EVENT, BULK_CHANGE_COMPANY_ADMIN } from '../types';

import {
  changeListParams,
  crudGetList,
  CRUD_GET_LIST_SUCCESS
} from 'react-admin';

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

function* removeCompanyFilters(action) {
  yield put(
    changeListParams('companies', {
      filter: {
        present: true,
        featured: false
      },
      order: 'DESC',
      page: 1,
      perPage: 100,
      sort: 'id'
    })
  );
}

function* appSaga() {
  yield all([takeEvery(CHANGE_EVENT, changeEvent)]);
  yield all([takeEvery(CRUD_GET_LIST_SUCCESS, getAdminsWhen)]);
  // yield all([takeEvery(`${BULK_CHANGE_COMPANY_ADMIN}_SUCCESS`, removeCompanyFilters)]);
}

export default [appSaga];
