import React from 'react';
import { Layout } from 'react-admin';
import MyMenu from './MyMenu';
import MyAppBar from './MyAppBar';
import MyDialog from './MyDialog';

const MyLayout = props => (
  <React.Fragment>
    <Layout
      {...props}
      appBar={MyAppBar}
      menu={MyMenu}
      //notification={MyNotification}
    />

    <MyDialog />
  </React.Fragment>
);

export default MyLayout;
