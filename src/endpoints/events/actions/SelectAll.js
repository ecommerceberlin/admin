import React from 'react';

import {
  Button,
  useUpdateMany,
  useRefresh,
  useNotify,
  useUnselectAll,
} from 'react-admin';

const  SelectAll = ({resource, basePath, filterValues, selectedIds}) => {

  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();


 return ( <Button
         //disabled={record.id === activeEventId ? true : false}
         //variant={record.id === activeEventId ? 'raised' : 'flat'}
         color="primary"
        //  onClick={this.handleClick}
         label={label}
       />)

  
} 

export default  SelectAll;

