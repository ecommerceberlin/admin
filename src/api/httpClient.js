import React from 'react'
import { fetchUtils, useRefresh, useUpdate } from 'react-admin';
import restProvider from './restProvider';
import {getActiveEvent, getActiveGroup} from './app'
import get from 'lodash/get'
import {fileUpload} from '../redux'

/** OLD */

export const fixApiPath = (path="") => {

  path = path.trim()

  if(!/^http/.test(path)){

    if(path.charAt(0) !== "/"){
      path = `/${path}`
    }

    path = `${process.env.REACT_APP_API_ENDPOINT}${path}`
  }

  return path
}

export const httpClient = (url, options = {}) => {

  url = fixApiPath(url)

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

const extendDataProvider = (dataProvider) => ({

  ...dataProvider,

  get: (endpoint = false) => httpClient(fixApiPath(endpoint)).then(({ json }) => ({
    data: json.data,
  }))

}) 

export const convertFileToBase64 =  (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

export const uploadFile = (file, type="", id = 0) => new Promise((resolve, reject) => {

  if(!(file instanceof File) || file.type.indexOf("image/") === -1){
    reject();
  }

  convertFileToBase64(file).then(encoded => httpClient(`${process.env.REACT_APP_API_ENDPOINT}/upload`, {
    method: 'POST', 
    body: JSON.stringify({
      file: encoded,
      type,
      id,
      event_id: get(getActiveEvent(), "id"),
      group_id: get(getActiveGroup(), "id")
    })})).then(({json}) => resolve(json.data))

})

export const useUploadFile = () => {

  // const refresh = useRefresh();
  const dispatch = useDispatch()
  const doUploadImage = (file, resource, id) => uploadFile(file, resource, id).then(data => {
      dispatch(fileUpload(resource, id, data))
      // refresh()

      return data
    })

  return doUploadImage

}

export default extendDataProvider(dataProvider);
