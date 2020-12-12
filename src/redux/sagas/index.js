import { spawn, call, put, takeEvery, all } from 'redux-saga/effects';
import { setActiveEvent, setActiveGroup, getActiveEvent, getActiveGroup } from '../../api/app';
import {  CHANGE_EVENT, CHANGE_GROUP, BULK_CHANGE_COMPANY_ADMIN } from '../types';
import {changeEvent as changeEventAction} from '../actions'

import {
  changeListParams,
  crudGetList,
  CRUD_GET_LIST_SUCCESS
} from 'react-admin';

function* changeEvent(actionData) {
  const {payload} = actionData
  yield call(setActiveEvent, payload);
}

function* changeGroup(actionData) {
  const {payload} = actionData;
  yield call(setActiveGroup, payload);
  yield put(changeEventAction({...payload.active_event, is_active: payload.active_event_id == payload.active_event.id }));
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
    function* changeEventSaga(){ yield takeEvery(CHANGE_EVENT, changeEvent)},
    function* changeGroupSaga(){ yield takeEvery(CHANGE_GROUP, changeGroup)},
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


