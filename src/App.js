import React from 'react';
import { AdminContext, AdminUI, Loading, localStorageStore } from 'react-admin';
import dataProvider from './api/httpClient';
import authProvider from './api/authClient';
import {MyLayout, MyDialog, MyLogin } from './components';
import resourcesArr from './resources'
import settings from './settings';
import { GroupEventsContext, ModalContext, UserContext, SettingsContext, CacheContext, useGroupId, useEventId } from './contexts';
import i18nProvider, {useTranslations} from './i18n'
import Dashboard from './endpoints/Dashboard';



const CustomLayout = (props) => {

  return (
    <ModalContext>
    <MyLayout {...props} />
    <MyDialog />  
    </ModalContext>)
}


function CustomAdminUI() {


  const translations = useTranslations()

  // const dataProvider = useDataProvider();

  if(!translations){
     return <Loading />
  }


  return (
      <AdminUI 
        layout={CustomLayout}
        loginPage={ MyLogin }
        title="Admin"
        // logoutButton={ LogoutButton } 
        // theme={ getTheme() }
         dashboard={ Dashboard }
         catchAll={ Dashboard }
         ready={Loading}
      >
     {resourcesArr}
      </AdminUI>
  );
}


function App() {

  const store = localStorageStore()

  return (
    <AdminContext 
      dataProvider={ dataProvider }
      i18nProvider={ i18nProvider }
      authProvider={ authProvider }
      store={store}
      requireAuth
    > 
      <SettingsContext data={settings}>
        <UserContext>
          <GroupEventsContext>
            <CacheContext>
              <CustomAdminUI />
            </CacheContext>
          </GroupEventsContext>
        </UserContext>
      </SettingsContext>
    </AdminContext>
  );
}



export default App;
