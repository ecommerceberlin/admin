import { call, takeEvery, all } from 'redux-saga/effects';

import { setActiveEvent } from '../../api/app';
import { CHANGE_EVENT } from '../types';

function* changeEvent(actionData) {
  yield call(setActiveEvent, actionData.payload);

  alert(actionData.payload.id);
}

function* appSaga() {
  yield all([takeEvery(CHANGE_EVENT, changeEvent)]);
}

export default [appSaga];
