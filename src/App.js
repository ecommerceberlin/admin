import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './api/httpClient';
import authProvider from './api/authClient';
import { customReducers, customSagas } from './redux';
import { AppTitle } from './components';

import { CompanyList } from './endpoints/companies';
import { PurchaseList } from './endpoints/purchases';
import { ParticipantList } from './endpoints/participants';
import { TicketList } from './endpoints/tickets';
import { TicketGroupList } from './endpoints/ticketgroups';
import { EventList } from './endpoints/events';

import { lsGet } from './api/app';

class App extends React.Component {
  render() {
    return (
      <Admin
        title={<AppTitle />}
        customReducers={customReducers}
        customSagas={customSagas}
        authProvider={authProvider}
        dataProvider={dataProvider}
        initialState={{ app: { event: lsGet('activeEvent') } }}
      >
        <Resource
          name="purchases"
          options={{ label: 'Purchases' }}
          list={PurchaseList}
        />
        <Resource
          name="participants"
          options={{ label: 'Registrations' }}
          list={ParticipantList}
        />
        <Resource name="companies" list={CompanyList} />

        <Resource name="reports" list={PurchaseList} />

        <Resource name="settings" list={PurchaseList} />
        <Resource name="texts" list={PurchaseList} />

        <Resource name="feed" options={{ label: 'Feed' }} list={PurchaseList} />

        <Resource name="tickets" list={TicketList} />
        <Resource name="ticketgroups" list={TicketGroupList} />

        <Resource name="events" list={EventList} />
      </Admin>
    );
  }
}

export default App;
