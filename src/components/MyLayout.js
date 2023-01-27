import React from 'react';
import { Layout } from 'react-admin';
import MyMenu from './MyMenu';
import MyAppBar from './MyAppBar';
import MyDialog from './MyDialog';
import ThemeSaver from './ThemeSaver';
 

const MyLayout = props => (
  <React.Fragment>
    
    <Layout
  {...props}
  appBar={MyAppBar}
  menu={MyMenu}
  //notification={MyNotification}
/>
    <ThemeSaver/>
    <MyDialog />
  </React.Fragment>
);

export default MyLayout;
