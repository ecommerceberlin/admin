import React, {useEffect, useState} from "react";
import Paper from '@mui/material/Paper'
import BusinessIcon from '@mui/icons-material/Business';
import {dataProvider} from '../../../../api'

const CompanyProfile = ({attrs}) => {

    const [company, setCompany] = useState(null)
    
    useEffect(()=> {
        dataProvider.getOne("companies", {id: attrs.matches[1], }).then(({data}) => setCompany(data));
    }, [])


    return  <Paper>{company && <img src={company.profile.thumbnail} alt="" />}</Paper>
}


 export const companyprofile = {
    title: "Company Profile",
    keywords: "profile company",
    icon: () => (
      <BusinessIcon />
    ),
    matcher: url => {
      return url.match(
        /(?:https?:\/\/)?(?:www\.)?targiehandlu\.pl\/exhibitors\/([a-zA-Z0-9_-]+)$/i
      );
    },
    component: CompanyProfile,
}

  

