import get from 'lodash/get';

export const lsGet = key => JSON.parse(localStorage.getItem(key));
export const lsSet = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const setActiveEvent = event => lsSet('activeEvent', event);
export const getEventName = () =>
  get(lsGet('activeEvent'), 'name', '-- no event set --');

export default function() {
  return get(lsGet('activeEvent'), 'id', 0);
}
