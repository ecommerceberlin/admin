import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import get from 'lodash/get';
import classNames from 'classnames';
import {useQueryWithStore} from 'react-admin'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { changeCompanyAdmin, showDialog, hideDialog } from '../../../redux';
import {Admins} from '../../../components';
import {useApiContext} from '../../../api'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
    color: '#fff',
    cursor: 'pointer'
  },

  adminNotSet: {
    backgroundColor: '#cccccc'
  },

  adminSet: {
    backgroundColor: deepOrange[500]
  }
}))


const SelectAdminField = ({label="", basePath="", record={}}) => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const [group_id, event_id] = useApiContext()

  const {data, loading, error} = useQueryWithStore({
    type: "getList",
    resource: "admins",
    payload: {
      pagination: {page: 1, perPage: 100},
      sort: {field: "initials", order: "ASC"},
      filter: {
        event_id
      }
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
      className={classNames({
        [classes.avatar]: true,
        [classes.adminNotSet]: !getActiveAdmin(),
        [classes.adminSet]: getActiveAdmin()
      })}
      onClick={() => showAction()}>{getActiveAdmin("?")}</Avatar>
  );

}

export default SelectAdminField
