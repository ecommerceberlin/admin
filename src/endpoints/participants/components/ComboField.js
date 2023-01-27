import { isObject } from 'lodash';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import useMediaQuery  from '@mui/material/useMediaQuery';
import {useRecordContext} from 'react-admin'


const allowedUtms = [
    "utm_source",
    "utm_campaign",
    // "utm_medium"
]


const useStyles = makeStyles({
    e: {
        fontWeight: 400,
        fontSize: "115%"
    },
    d: {
        marginTop: 10,
        display: 'block'
    },
    u: {
        marginRight: 10
    },

    uk: {
        fontSize: "80%",
        color: grey[400],
    },

    uv: {
        color: grey[500],
    }

})

const ComboField = ({source}) => {

    const record = useRecordContext();
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up("sm"))
    const classes = useStyles()

    if(!record){
      return null
    }
  
    const utms = []
  
    if(isObject(record.utms)){
        Object.keys(record.utms).forEach(utm => {

            if(allowedUtms.some(item => utm === item) ){

                utms.push( 
                    <span key={utm} className={classes.u}>
                        {isDesktop ? <span  className={classes.uk}>{utm.replace("utm_", "")}</span>: null}{` `}
                        <span  className={classes.uv}>{record.utms[utm]}</span>
                    </span>) 
            }

        })
    }
  
    return (<span>
        <span className={classes.e}>{record.email}</span>
        <span className={classes.d}>{utms}</span>
        </span>)
  
  
  }

  
export default ComboField