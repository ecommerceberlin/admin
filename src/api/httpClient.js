import { fetchUtils } from 'react-admin';
import restProvider from './restProvider';
import {getActiveEvent, getActiveGroup} from './app'
import get from 'lodash/get'

/** OLD */

export const httpClient = (url, options = {}) => {

  const token = localStorage.getItem('token');

  if ( !options.headers) {
    options.headers = new Headers();
  }

  options.headers.set('Accept', 'application/json');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider(
  process.env.REACT_APP_API_ENDPOINT,
  httpClient
);


export const convertFileToBase64 =  (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

export const uploadFile = (file, type="", id = 0) => {

  if(!(file instanceof File) || file.type.indexOf("image/") === -1){
    return Promise.reject();
  }

  return convertFileToBase64(file).then(encoded => httpClient(`${process.env.REACT_APP_API_ENDPOINT}/upload`, {method: 'POST', body: JSON.stringify({
    file: encoded,
    type,
    id,
    event_id: get(getActiveEvent(), "id"),
    group_id: get(getActiveGroup(), "id")
  })})).then(({json}) => json.data);

}

export default dataProvider;
