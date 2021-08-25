import React from 'react';
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import {TagsField} from '../../../components';
import TicketRoleField from './TicketRoleField'


const ExtendedInfo = (props) => (
    <React.Fragment>
        <TicketRoleField {...props} />
        <TagsField {...props} source="ticket_group.tags" color="secondary" />
        <TagsField {...props}/>
    </React.Fragment>
)


const TicketNameField = (props) => {

    if(isEmpty(props.record)){
        return null;
    }

    const {internal_name, translation_asset_id, _name, role} = props.record;

    if(internal_name || translation_asset_id){
        return <div>{internal_name || translation_asset_id} <ExtendedInfo {...props} /> </div>
    }

    return <div style={{color: "#999"}}>{_name} <ExtendedInfo {...props} /></div>

    }

export default TicketNameField