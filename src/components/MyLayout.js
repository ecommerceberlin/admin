import React from 'react';
import { Layout } from 'react-admin';
import MyMenu from './MyMenu';
import MyAppBar from './MyAppBar';

const MyLayout = props => (
  <Layout
    {...props}
    //  appBar={MyAppBar}
    menu={MyMenu}
    //notification={MyNotification}
  />
);

export default MyLayout;
