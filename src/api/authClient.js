import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS
} from 'react-admin';

export default (type, params) => {
  if (type === AUTH_GET_PERMISSIONS) {
  }

  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    const formData = new FormData();
    formData.append('client_id', process.env.REACT_APP_OAUTH_CLIENT_ID);
    formData.append('grant_type', process.env.REACT_APP_OAUTH_GRANT_TYPE);
    formData.append('scope', process.env.REACT_APP_OAUTH_SCOPE);
    formData.append('username', username);
    formData.append('password', password);

    const request = new Request(process.env.REACT_APP_OAUTH_TOKEN_URL, {
      method: 'POST',
      body: formData

      // headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ access_token }) => {
        console.log(access_token);

        localStorage.setItem('token', access_token);
      });
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    const { resource } = params;

    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    return Promise.resolve();
  }

  return Promise.reject('Unkown method');
};
