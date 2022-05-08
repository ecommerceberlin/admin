import React from 'react';
import { Admin, Resource, AdminContext, AdminUI, Loading } from 'react-admin';
import dataProvider from './api/httpClient';
import authProvider from './api/authClient';
import { AppTitle, MyLayout, MyDialog } from './components';
import customRoutes from './customRoutes';
import resourcesArr from './resources'
import settings from './settings';
import { ModalContext, UserContext, SettingsContext, CacheContext } from './contexts';
import i18nProvider, {useTranslations} from './i18n'

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
    // return <Loading />
  }


  return (
      <AdminUI 
        layout={CustomLayout}
        // loginPage={ CustomLogin }
        // logoutButton={ LogoutButton } 
        // theme={ getTheme() }
        // customRoutes={ customRoutes }
        // dashboard={ Logistics }
        // catchAll={ Logistics }
      >
     {resourcesArr}
      </AdminUI>
  );
}


function App() {
  return (
    <AdminContext 
      dataProvider={ dataProvider }
      i18nProvider={ i18nProvider }
      authProvider={ authProvider }
      // customReducers={ reducers }
      // customSagas={ sagas }
    > 
    <SettingsContext data={settings}>
      <UserContext>
        <CacheContext>
          <CustomAdminUI />
        </CacheContext>
      </UserContext>
    </SettingsContext>
    </AdminContext>
  );
}



export default App;
