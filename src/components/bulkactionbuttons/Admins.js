import React from 'react';
import { useGetList } from 'react-admin'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {useEventId} from '../../contexts'


const Admins = ({onClick, selected = 0}) => {

  const event_id = useEventId()
  const {data, isLoading} = useGetList("admins", {
    pagination: {page: 1, perPage: 100},
    sort: {field: "initials", order: "ASC"},
    filter: {
      event_id
    }
  })

  if(isLoading){
    return null
  }

  return (
    <List sx={{
      width: '100%',
      maxWidth: 360,
      backgroundColor: (theme) => theme.palette.background.paper
    }}>
      {data.map(({id, fname, lname, initials}) => (
        <ListItem
          key={id}
          button
          selected={id == selected}
          onClick={() => onClick(id)}
        >
          <Avatar>{initials}</Avatar>
          <ListItemText
            primary={`${fname} ${lname}`}
            secondary="."
          />
        </ListItem>
      ))}
    </List>
  );

} 

export default Admins