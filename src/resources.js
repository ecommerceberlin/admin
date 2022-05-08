
import { Resource } from 'react-admin';



import { CompanyList, CompanyShow, CompanyCreate, CompanyIcon } from './endpoints/companies';
import { PurchaseList, PurchaseIcon } from './endpoints/purchases';
import { ParticipantList, ParticipantShow, ParticipantIcon } from './endpoints/participants';
import { TicketList, TicketEdit, TicketIcon, TicketCreate } from './endpoints/tickets';
import { TicketGroupList, TicketGroupCreate, TicketGroupEdit } from './endpoints/ticketgroups';
import { GroupList, GroupShow } from './endpoints/groups';
import { EventList, EventShow } from './endpoints/events';
import { CompanyDataEdit, CompanyDataShow } from './endpoints/companydata';
import { FieldsEdit } from './endpoints/fields';
import { MessagesList, MessagesShow } from './endpoints/messages';
import { LogList, LogIcon } from './endpoints/log';
import { MarketingList, MarketingIcon } from './endpoints/marketing';
import { PostList, PostEdit, PostCreate, PostIcon } from './endpoints/posts'
import { VotersList } from './endpoints/voters'


const resources = [
  <Resource name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } icon={ PostIcon }  />,
  <Resource name="votes" list={ VotersList } />,
  <Resource name="purchases" list={ PurchaseList } icon={ PurchaseIcon } options={{hideInMenu: true}} />,
  <Resource name="participants" list={ ParticipantList } show={ ParticipantShow } icon={ ParticipantIcon }/>,
  <Resource name="companies" list={ CompanyList } show={ CompanyShow } create={ CompanyCreate } icon={ CompanyIcon } options={{hideInMenu: true}} />,
  <Resource name="tickets" list={ TicketList } edit={ TicketEdit } create={ TicketCreate } icon={ TicketIcon } />,
  <Resource name="log" list={ LogList } icon={ LogIcon } />,
  <Resource name="marketing" list={ MarketingList } icon={ MarketingIcon } />,
  <Resource name="ticketgroups" list={TicketGroupList } create={ TicketGroupCreate } edit={ TicketGroupEdit } options={{hideInMenu: true}} />,
  <Resource name="groups" list={GroupList} show={GroupShow} options={{hideInMenu: true}} />,
  <Resource name="messages" list={MessagesList} show={MessagesShow} />,
  <Resource name="fields" edit={FieldsEdit} />,
  <Resource name="companydata"  options={{ hideInMenu: true }} edit={ CompanyDataEdit } show={ CompanyDataShow} />,
  <Resource name="events" options={{hideInMenu: true}} list={ EventList} show={ EventShow } />,
  <Resource name="comments"  />,
  <Resource name="templates" />,
  <Resource name="messages" />,
  <Resource name="admins" />,
  <Resource name="feed" />,
  <Resource name="reports" />,
  <Resource name="settings" />,
  <Resource name="related" options={{hideInMenu: true}}  />,
]


export default resources