import React from 'react';
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import {LessImportantInfo} from '../../../components'

const SalesField = ({record}) => {

    if(isEmpty(record)){
        return null;
    }

    return <span>{get(record, "agg.sold", 0)}<LessImportantInfo text="/" />{get(record, "limit")}</span>
}

export default SalesField