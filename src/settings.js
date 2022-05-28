

import BusinessIcon from '@mui/icons-material/Business';

const settings = {

  

    menuItems: [
        {name: "profile", icon: BusinessIcon, children: [
          "companies", 
          "people",
          "purchases"
        ]},
    ],

    statuses: [
        { id: 'all', name: 'ALL' },
        { id: 'new', name: 'NEW' },
        { id: 'hold', name: 'HOLD' },
        { id: 'ok', name: 'OK' },
        { id: 'cancelled', name: 'CANCELLED' }
    ],
      
    roles: [
        "visitor", 
        "exhibitor", 
        "presenter", 
        "contestant",
        "contestant_person", 
        "contestant_company",
        "representative",
        "juror",
        "party",
        "service_external",
        "service_internal",
        "asset",
        "flag"
    ]

}

export default settings