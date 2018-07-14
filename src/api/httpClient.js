import { fetchUtils } from 'react-admin';
import restProvider from './restProvider';

const httpClient = (url, options) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: 'application/json'
    });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider(
  process.env.REACT_APP_API_ENDPOINT,
  httpClient
);

export default dataProvider;
