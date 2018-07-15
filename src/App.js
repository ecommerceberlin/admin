import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './api/httpClient';
import authProvider from './api/authClient';

import { CompanyList } from './endpoints/companies';
import { PurchaseList } from './endpoints/purchases';
import { ParticipantList } from './endpoints/participants';
import { TicketList } from './endpoints/tickets';
import { TicketGroupList } from './endpoints/ticketgroups';

class App extends React.Component {
  render() {
    return (
      <Admin
        title="event jakis"
        authProvider={authProvider}
        dataProvider={dataProvider}
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

        <Resource name="events" />
      </Admin>
    );
  }
}

export default App;
