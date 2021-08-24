import React from 'react';
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import isObject from 'lodash/isObject'
import {LessImportantInfo} from '../../../components'

const langToCurrency = {
    pl: "PLN",
    en: "EUR",
    de: "EUR"
}


const TicketPriceField = ({record, defaultLang}) => {

    if(isEmpty(record)){
        return null;
    }

    const lang = defaultLang || "en"

    if("baseprice" in record && record.baseprice > 0){
        return <span>{record.baseprice}<LessImportantInfo text={record.price_currency} /></span>
    }

    if("_price" in record && isObject(record._price)){
        return <span style={{color: "#999"}}>{get(record, `_price.${lang}`)} <LessImportantInfo text={ get(langToCurrency, lang) } /></span>
    }

    return null

}

export default TicketPriceField