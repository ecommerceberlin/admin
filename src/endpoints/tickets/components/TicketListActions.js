import * as React from 'react';
import { cloneElement } from 'react';
import { ListButton, TopToolbar, CreateButton } from 'react-admin';

const TicketListActions = (props) => (
    <TopToolbar>
        {cloneElement(props.filters, { context: 'button' })}
        <ListButton basePath="ticketgroups" label="Ticket Groups" />
        <CreateButton/>
    </TopToolbar>
);

export default TicketListActions