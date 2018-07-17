import React from 'react';
import { Layout } from 'react-admin';
import MyMenu from './MyMenu';

const MyLayout = props => (
  <Layout
    {...props}
    //    appBar={MyAppBar}
    //    menu={MyMenu}
    //    notification={MyNotification}
  />
);

export default MyLayout;
