import React from 'react';
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import {TagsField} from '../../../components';


const ExtendedInfo = (props) => (
    <React.Fragment>
     
        <TagsField {...props} source="ticket_group.tags" color="secondary" />
        <TagsField {...props}/>
    </React.Fragment>
)


export const TicketGroupNameField = (props) => {

    if(isEmpty(props.record)){
        return null;
    }

    const {internal_name, translation_asset_id, name} = props.record;

    if(internal_name && internal_name.length > 0){
        return internal_name
    }

    if(translation_asset_id && translation_asset_id.length > 0){
         return translation_asset_id
    }
    //legacy
    return <span style={{color: props.grayout && "#999"}}>{name}</span>

}

TicketGroupNameField.defaultProps = {
    grayout: true
}


const CominedField = (props) => (<div><TicketGroupNameField {...props} />{` `}<ExtendedInfo {...props} /></div>) 

export default CominedField