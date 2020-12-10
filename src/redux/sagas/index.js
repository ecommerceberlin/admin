import { spawn, call, put, takeEvery, all } from 'redux-saga/effects';
import { setActiveEventId, setActiveGroupId, activeEventId, activeGroupId } from '../../api/app';
import {  CHANGE_EVENT, CHANGE_GROUP, BULK_CHANGE_COMPANY_ADMIN } from '../types';
import {changeEvent} from '../actions'

import {
  changeListParams,
  crudGetList,
  CRUD_GET_LIST_SUCCESS
} from 'react-admin';

function* changeEventId(actionData) {
  yield call(setActiveEventId, actionData.payload);
}

function* changeGroupId(actionData) {
  const {payload, active_event_id} = actionData;
  yield call(setActiveGroupId, payload);
  yield put(changeEvent(active_event_id));
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

export default function* appSaga() {


  const sagas = [
    function* changeEventSaga(){ yield takeEvery(CHANGE_EVENT, changeEventId)},
    function* changeGroupSaga(){ yield takeEvery(CHANGE_GROUP, changeGroupId)},
    function* asdasdSaga(){ yield takeEvery(CRUD_GET_LIST_SUCCESS, getAdminsWhen)}
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );


  
  // yield all([takeEvery(`${BULK_CHANGE_COMPANY_ADMIN}_SUCCESS`, removeCompanyFilters)]);
}


