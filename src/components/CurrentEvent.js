
import { 
    useCurrentEvent
} from '../datasources';
import ActiveIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const CurrentEvent = () => {

    const data = useCurrentEvent()

    if(!data){
        return null
    }
    
    return (
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
{data.is_active && <ActiveIcon sx={{color: "lightgreen", mr: 1}} />}
<Typography
        variant="subtitle1"
        color="inherit"
        sx={{
          flex: 1,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
    >{data.name}</Typography> 
      </Box>)
}


export default CurrentEvent