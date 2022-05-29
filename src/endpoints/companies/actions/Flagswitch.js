import React from 'react';
import Switch from '@mui/material/Switch';
import { useUpdateFlag } from '../../../datasources';
import CircularProgress from '@mui/material/CircularProgress';


const Flagswitch = ({source}) => {

  const [status, update, isLoading] = useUpdateFlag(source)
  if(isLoading){
    return <CircularProgress size={25} sx={{ml: 2}}/>
  }
  return  (<Switch checked={status} onChange={update} />)

}

export default Flagswitch


/**
 * 
 
admin_id: 16
debut: 0
event_ids: (3) [77, 86, 90]
featured: 0
id: 1016
instances: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
participant_ids: (7) [59581, 97276, 106546, 106547, 113113, 113114, 116876]
points: 0
position: 121
profile: {about: '<p>Verpackungshersteller</p>', contributor: '', countries: 'europe', event_manager: 'dominik.gatz@wellstar-packaging.de', expo: '', …}
promo: 0
purchase_ids: (8) [60840, 72995, 100423, 109991, 109992, 116831, 116832, 120633]
slug: "wellstar-packagingde"
ticket_ids: (6) [1111, 1311, 1537, 1632, 1799, 1816]

 */


