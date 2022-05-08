import React, {useCallback} from 'react';
import get from 'lodash/get';
import classNames from 'classnames';
import { useInput} from 'react-admin'
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/material/styles';
import deepOrange from '@mui/material/colors/deepOrange';
import {Admins} from '../../../components';
import {useApiContext} from '../../../api'
import TextField from '@mui/material/TextField';

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


const SelectAdminField = (props) => {

  const classes = useStyles()
  const [group_id, event_id] = useApiContext()

  const {
    input: { name, onChange, ...rest },
    meta: { touched, error },
    isRequired
} = useInput(props);

//   const {data, loading, error} = useGetList()

//     type: "getList",
//     resource: "admins",
//     payload: {
//       pagination: {page: 1, perPage: 100},
//       sort: {field: "name", order: "ASC"},
//       filter: {
//         event_id
//       }
//     }
//   })

//   const getActiveAdmin = (replacement = null) => {
//     if(!data || !("admin_id" in record)){
//       return null
//     }
//     return get(data.find(item => item.id == record.admin_id), "initials", replacement)
//   }

//   const handleConfirm = useCallback(id => {
//     //this should be rather taken from REDUX....
//     //in order to facilitate showDialog / onConfirm / error handling
//     dispatch(changeCompanyAdmin(record.id, { admin_id: id }, basePath));
//     dispatch(hideDialog())
//   });

//   const showAction = () => dispatch(showDialog({
//       title: record.slug,
//       content: (
//         <div>
//           <Admins onClick={handleConfirm} selected={record.admin_id} />
//         </div>
//       ),
//       onClose: () => dispatch(hideDialog())
//   }))



  return (
    <TextField
    name={name}
    label={props.label}
    onChange={onChange}
    error={!!(touched && error)}
    helperText={touched && error}
    required={isRequired}
    {...rest}
    />
  );

}

export default SelectAdminField
