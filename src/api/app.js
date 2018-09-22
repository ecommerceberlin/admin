import get from 'lodash/get';

export const lsGet = key => {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
};

export const lsSet = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const setActiveEvent = event => lsSet('activeEvent', event);
export const activeEventId = () => get(lsGet('activeEvent'), 'id', 0);

export const getEventName = () =>
  get(lsGet('activeEvent'), 'name', '-- no event set --');

export default activeEventId;
