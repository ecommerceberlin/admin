import { isObject } from 'lodash';
import { makeStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

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
        color: grey[400],
    },

    uv: {
        color: grey[700],
    }

})

const ComboField = ({record}) => {

    const classes = useStyles()

    if(!record){
      return null
    }
  
    const utms = []
  
    if(isObject(record.utms)){
        Object.keys(record.utms).forEach(utm => 
          utms.push( 
              <span className={classes.u}>
                  <span  className={classes.uk}>{utm.replace("utm_", "")}</span>{` `}
                  <span  className={classes.uv}>{record.utms[utm]}</span>
              </span>) 
        )
    }
  
    return (<span>
        <span className={classes.e}>{record.email}</span>
        <span className={classes.d}>{utms}</span>
        </span>)
  
  
  }

  
export default ComboField