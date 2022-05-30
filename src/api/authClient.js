
import { lsGet, lsSet, lsRem } from '../helpers'
import { httpClient } from './httpClient';

const authProvider = {
  // authentication
  login: (params) => new Promise((resolve,reject)=>{

    const { email, password } = params;

    const formData = new FormData();
    formData.append('client_id', process.env.REACT_APP_OAUTH_CLIENT_ID);
    formData.append('grant_type', process.env.REACT_APP_OAUTH_GRANT_TYPE);
    formData.append('scope', process.env.REACT_APP_OAUTH_SCOPE);
    formData.append('username', email);
    formData.append('password', password);

    const request = new Request(process.env.REACT_APP_OAUTH_TOKEN_URL, {
      method: 'POST',
      body: formData
    });

    fetch(request).then(response => {
        if (response.status < 200 || response.status >= 300) {
          reject(response.statusText)
        }
        return response.json();
      }).then(({ access_token }) => {
        if(access_token){
          lsSet("token", access_token)
          resolve()
        }
        reject()
      });
  }),
    
  checkError: (error) => Promise.resolve(/* ... */),
  checkAuth: (params) => new Promise((resolve, reject) => {
    const token = lsGet("token")
    if(token){
      resolve()
    }
    reject()
  }),
  logout: () => new Promise((resolve, reject) => {
    lsRem("token");
    resolve();
  }),
  // getIdentity: () => new Promise((resolve, reject)=>{

  // try {
  //     const { id, initials } = lsGet("profile")
  //     resolve({ id, fullName: initials });
  // } catch (error) {
  //     reject(error);
  // }

  // }),
  // authorization
  getPermissions: () => new Promise((resolve, reject)=>{

    resolve();
    return;
    //TODO - fetch interval

    httpClient(`/me`).then(response => response.json).then(response => {

            // console.info("getPermissions", response)
            lsSet("profile", response.data)
            resolve(response.data)
    })
      
  }),
};




//   if (type === AUTH_ERROR) {
//     const status = params.status;
//     if (status === 401 || status === 403) {
//       localStorage.removeItem('token');
//       return Promise.reject();
//     }
//     return Promise.resolve();
//   }

//   if (type === AUTH_CHECK) {
//     console.info("AUTH_CHECK")
//     const { resource } = params;
//     return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
//   }



export default authProvider