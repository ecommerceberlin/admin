import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './api/httpClient';
import authProvider from './api/authClient';
import { customReducers, customSagas } from './redux';
import { AppTitle, MyLayout } from './components';
import customRoutes from './customRoutes';

import { CompanyList, CompanyShow } from './endpoints/companies';
import { PurchaseList } from './endpoints/purchases';
import { ParticipantList, ParticipantShow } from './endpoints/participants';
import { TicketList, TicketEdit } from './endpoints/tickets';
import { TicketGroupList } from './endpoints/ticketgroups';
import { GroupList, GroupShow } from './endpoints/groups';
import { EventList, EventShow } from './endpoints/events';
import { CompanyDataEdit, CompanyDataShow } from './endpoints/companydata';
import { FieldsEdit } from './endpoints/fields';
import { MessagesList, MessagesShow } from './endpoints/messages';

import {PostList, PostEdit, PostCreate} from './endpoints/posts'

import { activeEventId, lsGet } from './api/app';

export const canAccess = (permissions, resource) => {
  if (!activeEventId() && resource !== 'groups') {
    return false;
  }

  return true;
};

class App extends React.Component {
  render() {
    return (
      <Admin
        //      title={<AppTitle />}
        layout={MyLayout}
        customReducers={customReducers}
        customSagas={customSagas}
        customRoutes={customRoutes}
        authProvider={authProvider}
        dataProvider={dataProvider}
        initialState={{
          app: {
            event: lsGet('activeEvent') || {}
          }
        }}
      >
        {permissions => [

          <Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } />,

          <Resource
            name="purchases"
            // options={{ label: 'Purchases' }}
            list={canAccess(permissions, 'purchases') ? PurchaseList : null}
          />,

          <Resource
            name="participants"
            options={{ label: 'Registrations' }}
            list={
              canAccess(permissions, 'participants') ? ParticipantList : null
            }
            show={
              canAccess(permissions, 'participants') ? ParticipantShow : null
            }
          />,

          <Resource
            name="companies"
            list={canAccess(permissions, 'companies') ? CompanyList : null}
            show={canAccess(permissions, 'companies') ? CompanyShow : null}
          />,

          <Resource
            name="reports"
            list={canAccess(permissions, 'reports') ? PurchaseList : null}
          />,

          <Resource
            name="settings"
            list={canAccess(permissions, 'settings') ? PurchaseList : null}
          />,

          <Resource
            name="texts"
            list={canAccess(permissions, 'texts') ? PurchaseList : null}
          />,

          <Resource
            name="feed"
            options={{ label: 'Feed' }}
            list={canAccess(permissions, 'feed') ? PurchaseList : null}
          />,

          <Resource
            name="tickets"
            list={canAccess(permissions, 'tickets') ? TicketList : null}
            edit={canAccess(permissions, 'tickets') ? TicketEdit : null}
          />,

          <Resource
            name="ticketgroups"
            list={
              canAccess(permissions, 'ticketgroups') ? TicketGroupList : null
            }
          />,

          <Resource
            name="groups"
            list={canAccess(permissions, 'groups') ? GroupList : null}
            show={canAccess(permissions, 'groups') ? GroupShow : null}
            options={{ label: 'Projects' }}
          />,

          <Resource
            name="messages"
            list={canAccess(permissions, 'messages') ? MessagesList : null}
            show={canAccess(permissions, 'messages') ? MessagesShow : null}
          />,

          <Resource
            name="fields"
            edit={canAccess(permissions, 'fields') ? FieldsEdit : null}
          />,

          <Resource
            name="companydata"
            edit={
              canAccess(permissions, 'companydata') ? CompanyDataEdit : null
            }
            show={
              canAccess(permissions, 'companydata') ? CompanyDataShow : null
            }
          />,

          <Resource name="related" />,

          <Resource
            name="events"
          //  list={canAccess(permissions, 'events') ? EventList : null}
            list={ EventList}
            show={canAccess(permissions, 'events') ? EventShow : null}
          />,

          <Resource name="comments" />,

          <Resource name="templates" />,

          <Resource name="messages" />,

          <Resource name="admins" />
        ]}
      </Admin>
    );
  }
}

export default App;
