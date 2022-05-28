
import { SelectInput } from 'react-admin';
import { useRolesObject } from '../../helpers';

const RoleSelect = (props) => {

  const rolesObject = useRolesObject()

  return (<SelectInput  source="role" choices={rolesObject} label="Role" alwaysOn {...props} />)
}

export default RoleSelect