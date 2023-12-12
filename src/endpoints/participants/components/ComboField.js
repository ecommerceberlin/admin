import { isObject } from 'lodash';
import { grey } from '@mui/material/colors';
import useMediaQuery  from '@mui/material/useMediaQuery';
import {useRecordContext} from 'react-admin'


const allowedUtms = [
    "utm_source",
    "utm_campaign",
    // "utm_medium"
]

 

const ComboField = ({source}) => {

    const record = useRecordContext();
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up("sm"))

    if(!record){
      return null
    }
  
    const utms = []
  
    if(isObject(record.utms)){
        Object.keys(record.utms).forEach(utm => {

            if(allowedUtms.some(item => utm === item) ){

                utms.push( 
                    <Box component="span" key={utm} sx={{

                    }}>
                        {isDesktop ? <Box component="span" sx={{
                            fontSize: "80%",
                            color: grey[400],
                        }}>{utm.replace("utm_", "")}</Box>: null}{` `}
                        <Box component="span" sx={{
                            color: grey[500],
                        }}>{record.utms[utm]}</Box>
                    </Box>) 
            }

        })
    }
  
    return (<Box component="span">
        <Box component="span" sx={{
             fontWeight: 400,
             fontSize: "115%"
        }}>{record.email}</Box>
        <Box component="span" sx={{
            marginTop: 10,
            display: 'block'
        }}>{utms}</Box>
        </Box>)
  
  
  }

  
export default ComboField