
import React from 'react';
import {
  Button
} from 'react-admin';

const ChangeActiveEventButton = ({record, label, labelSelected}) => {

  if(!record){
    return null
  }

  const selected = !!+record.is_active;

  return (<Button
    disabled={selected}
    variant={selected ? 'raised' : 'outlined'}
    color="primary"
    // onClick={this.handleClick}
    label=  {selected ? labelSelected : label}
 />)

}

ChangeActiveEventButton.defaultProps = {
  label: "Change",
  labelSelected: "Selected"
}

export default ChangeActiveEventButton