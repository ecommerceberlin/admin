
import { SelectInput } from 'react-admin';
import { useRolesObject } from '../../helpers';

const RoleSelect = (props) => {

  const rolesObject = useRolesObject()

  return (<SelectInput choices={rolesObject} {...props} />)
}

export default RoleSelect