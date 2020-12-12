import React from 'react';
import { Admin, Resource } from 'react-admin';

import dataProvider from './api/httpClient';
import authProvider from './api/authClient';
import { customReducers, customSagas } from './redux';
import { AppTitle, MyLayout } from './components';
import customRoutes from './customRoutes';

import { CompanyList, CompanyShow, CompanyCreate, CompanyIcon } from './endpoints/companies';
import { PurchaseList, PurchaseIcon } from './endpoints/purchases';
import { ParticipantList, ParticipantShow, ParticipantIcon } from './endpoints/participants';
import { TicketList, TicketEdit, TicketIcon, TicketCreate } from './endpoints/tickets';
import { TicketGroupList } from './endpoints/ticketgroups';
import { GroupList, GroupShow } from './endpoints/groups';
import { EventList, EventShow } from './endpoints/events';
import { CompanyDataEdit, CompanyDataShow } from './endpoints/companydata';
import { FieldsEdit } from './endpoints/fields';
import { MessagesList, MessagesShow } from './endpoints/messages';

import {PostList, PostEdit, PostCreate, PostIcon} from './endpoints/posts'
import { getActiveEvent, getActiveGroup } from './api/app';


export const canAccess = (permissions, resource) => {
  // if (!activeEventId() && resource !== 'groups') {
  //   return false;
  // }

  return true;
};


const initialState = () => {

  const event = getActiveEvent()
  const group = getActiveGroup()

  if(new Object(event)!== event || new Object(group)!==group){
    return {}
  }

  return {
    app: {
      event, group
    }
  }

}

class App extends React.Component {

  render() {
    return (
      <Admin
        //      title={<AppTitle />}
        layout={MyLayout}
        customReducers={customReducers}
        customSagas={[customSagas]}
        customRoutes={customRoutes}
        authProvider={authProvider}
        dataProvider={dataProvider}
        initialState={initialState()}
      >
        {permissions => [

          <Resource 
            name="posts" 
            list={ PostList } 
            edit={ PostEdit } 
            create={ PostCreate } 
            icon={ PostIcon }  
          />,

          <Resource
            name="purchases"
            // options={{ label: 'Purchases' }}
            list={ canAccess(permissions, 'purchases') ? PurchaseList : null}
            icon={ PurchaseIcon }
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
            icon={ ParticipantIcon }
          />,

          <Resource
            name="companies"
            list={canAccess(permissions, 'companies') ? CompanyList : null}
            show={canAccess(permissions, 'companies') ? CompanyShow : null} 
            create={canAccess(permissions, 'companies') ? CompanyCreate : null}
            icon={ CompanyIcon }
          />,

        
   

          <Resource
            name="tickets"
            list={canAccess(permissions, 'tickets') ? TicketList : null}
            edit={canAccess(permissions, 'tickets') ? TicketEdit : null}
            create={canAccess(permissions, 'tickets') ? TicketCreate : null}
            icon={ TicketIcon }
          />,

          <Resource
            name="ticketgroups"
            list={
              canAccess(permissions, 'ticketgroups') ? TicketGroupList : null
            }
            options={{hideInMenu: true}}
          />,

          <Resource
            name="groups"
            list={canAccess(permissions, 'groups') ? GroupList : null}
            show={canAccess(permissions, 'groups') ? GroupShow : null}
            options={{ label: 'Projects', hideInMenu: true}}
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
            options={{hideInMenu: true}}
            name="companydata"
            edit={
              canAccess(permissions, 'companydata') ? CompanyDataEdit : null
            }
            show={
              canAccess(permissions, 'companydata') ? CompanyDataShow : null
            }
          />,

          <Resource
            options={{hideInMenu: true}}
            name="events"
          //  list={canAccess(permissions, 'events') ? EventList : null}
            list={ EventList}
            show={canAccess(permissions, 'events') ? EventShow : null}
          />,

          <Resource name="comments" />,

          <Resource name="templates" />,

          <Resource name="messages" />,

          <Resource name="admins" />,
          

          <Resource
          name="feed"
          // options={{ label: 'Feed' }}
          // list={canAccess(permissions, 'feed') ? PurchaseList : null}
          />,

          <Resource
          name="reports"
          />,

          <Resource
          name="settings"
          />,

          <Resource 
          options={{hideInMenu: true}}
          name="related" 
          />,



        ]}
      </Admin>
    );
  }
}

export default App;
