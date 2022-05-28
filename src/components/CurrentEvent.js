
import {makeStyles} from '@mui/styles'
import { 
    useCurrentEvent
} from '../datasources';
import ActiveIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography';




const useStyles = makeStyles((theme) => ({
      
    select: {
      // color: "#fff",
      minWidth: 200,
    },

    icon: {
        fontSize: "1em",
        fill: "lightgreen",
        position: "relative",
        top: 2,
        marginRight: 10
    },

    root: {
      //   display: 'flex',
      //   alignItems: 'center'
    },

    title: {
      flex: 1,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));


const CurrentEvent = () => {

    const data = useCurrentEvent()
    const classes = useStyles();

    if(!data){
        return null
    }
    
    return (<div>{data.is_active && <ActiveIcon className={classes.icon}/>}
        <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
    >{data.name}</Typography> 
    </div>)
}


export default CurrentEvent