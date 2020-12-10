import get from 'lodash/get';

export const uniqueValues = arr => [...new Set(uniqueValues)];

export const lsGet = key => {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (error) {
    return null;
  }
};


export const lsSet = (key, value) => localStorage.setItem(key, JSON.stringify(value));




export const statuses = [
  { id: 'new', name: 'NEW' },
  { id: 'hold', name: 'HOLD' },
  { id: 'ok', name: 'OK' },
  { id: 'cancelled', name: 'CANCELLED' }
];

export const roles = [
  { id: 'visitor', name: 'visitor' },
  { id: 'exhibitor', name: 'exhibitor' },
  { id: 'presenter', name: 'presenter' },
  { id: 'contestant', name: 'contestant' },
  { id: 'representative', name: 'representative' }
];



export const setActiveEventId = id => lsSet('activeEventId', id);
export const setActiveGroupId = id => lsSet('activeGroupId', id);
export const activeEventId = () => lsGet('activeEventId') || 0;
export const activeGroupId = () => lsGet('activeGroupId') || 0;


export const getEventName = () => "--deprecated--"
