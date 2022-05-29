
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
  <Resource key="posts" name="posts" list={ PostList } edit={ PostEdit } create={ PostCreate } icon={ PostIcon }  />,
  <Resource key="purchases" name="purchases" list={ VotersList } />,
  <Resource key="purchases" name="purchases" list={ PurchaseList } icon={ PurchaseIcon }  />,
  <Resource key="participants" name="participants" list={ ParticipantList } show={ ParticipantShow } icon={ ParticipantIcon }/>,
  <Resource key="companies" name="companies" list={ CompanyList } show={ CompanyShow } create={ CompanyCreate } icon={ CompanyIcon }  />,
  <Resource key="tickets" name="tickets" list={ TicketList } edit={ TicketEdit } create={ TicketCreate } icon={ TicketIcon } />,
  <Resource key="log" name="log" list={ LogList } icon={ LogIcon } />,
  <Resource key="marketing" name="marketing" list={ MarketingList } icon={ MarketingIcon } />,
  <Resource key="ticketgroups" name="ticketgroups" list={TicketGroupList } create={ TicketGroupCreate } edit={ TicketGroupEdit }  />,
  <Resource key="groups" name="groups" list={GroupList} show={GroupShow}  />,
  <Resource key="messages" name="messages" list={MessagesList} show={MessagesShow} />,
  <Resource key="fields" name="fields" edit={FieldsEdit} />,
  <Resource key="companydata" name="companydata"   edit={ CompanyDataEdit } show={ CompanyDataShow} />,
  <Resource key="events" name="events"  list={ EventList} show={ EventShow } />,
  <Resource key="comments" name="comments"  />,
  <Resource key="templates" name="templates" />,
  <Resource key="messages" name="messages" />,
  <Resource key="admins" name="admins" />,
  <Resource key="feed" name="feed" />,
  <Resource key="reports" name="reports" />,
  <Resource key="settings" name="settings" />,
  <Resource key="related" name="related"   />,
]


export default resources