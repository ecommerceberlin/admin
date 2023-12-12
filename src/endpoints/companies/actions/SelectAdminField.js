import React, {useCallback} from 'react';
import get from 'lodash/get';
import classNames from 'classnames';
import {useGetList} from 'react-admin'
import Avatar from '@mui/material/Avatar';
import deepOrange from '@mui/material/colors/deepOrange';
import {Admins} from '../../../components';
import { useEventId } from '../../../contexts';

/**
 * 


 adminNotSet: {
    backgroundColor: '#cccccc'
  },

  adminSet: {
    backgroundColor: deepOrange[500]
  }

  
 */

const SelectAdminField = ({label="", basePath="", record={}}) => {


  const event_id = useEventId()
  const {data, isLoading, isError} = useGetList("admins", {
    pagination: {page: 1, perPage: 100},
    sort: {field: "initials", order: "ASC"},
    filter: {
      event_id
    }
  })
  
  

  const getActiveAdmin = (replacement = null) => {
    if(!data || !("admin_id" in record)){
      return null
    }
    return get(data.find(item => item.id == record.admin_id), "initials", replacement)
  }

  const handleConfirm = useCallback(id => {
    //this should be rather taken from REDUX....
    //in order to facilitate showDialog / onConfirm / error handling
    dispatch(changeCompanyAdmin(record.id, { admin_id: id }, basePath));
    dispatch(hideDialog())
  });

  const showAction = () => dispatch(showDialog({
      title: record.slug,
      content: (
        <div>
          <Admins onClick={handleConfirm} selected={record.admin_id} />
        </div>
      ),
      onClose: () => dispatch(hideDialog())
  }))

  if(!("admin_id" in record)){
    return null
  }

  return (
    <Avatar
      sx={{
        margin: 10,
        color: '#fff',
        cursor: 'pointer'
      }}
      // className={classNames({
      //   [classes.avatar]: true,
      //   [classes.adminNotSet]: !getActiveAdmin(),
      //   [classes.adminSet]: getActiveAdmin()
      // })}
      onClick={() => showAction()}>{getActiveAdmin("?")}</Avatar>
  );

}

export default SelectAdminField
