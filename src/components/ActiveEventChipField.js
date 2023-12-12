import React from 'react';
import { ChipField } from 'react-admin';
import { useEventId } from '../contexts';



const ActiveEventChipField = ({record, ...rest }) => {

  const event_id = useEventId()

  
   return (
    <ChipField
      sx={...(event_id == record.id?{
        backgroundColor: 'green',
        color: 'white'
      }:{})}
      record={record}
      {...rest}
    />
  );
};

export default ActiveEventChipField
