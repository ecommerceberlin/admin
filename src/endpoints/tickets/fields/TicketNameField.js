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


export const TicketNameField = (props) => {

    if(isEmpty(props.record)){
        return null;
    }

    const {internal_name, translation_asset_id, _name} = props.record;

    if(internal_name.length > 0){
        return internal_name
    }

    if(translation_asset_id.length > 0){
         return translation_asset_id
    }
    //legacy
    return <span style={{color: props.grayout && "#999"}}>{_name}</span>

}

TicketNameField.defaultProps = {
    grayout: true
}


const CominedField = (props) => (<div><TicketNameField {...props} /><ExtendedInfo {...props} /></div>) 

export default CominedField