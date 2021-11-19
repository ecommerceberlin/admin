
import React from 'react'
import {ChipField} from 'react-admin'


const BoothColorField = ({ record, ...rest }) => {

    if(!record){
        return null
    }

    return (
        <ChipField
          style={{
            backgroundColor: record.booth.bgcolor,
            color: record.booth.fontcolor
          }}
          record={record}
          {...rest}
        />
    );
}

BoothColorField.defaultProps = { addLabel: true };

export default BoothColorField