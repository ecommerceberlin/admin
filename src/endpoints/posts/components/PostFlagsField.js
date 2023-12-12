import React, {useState, useEffect} from "react";
import {
    useUpdate,
    useRefresh,
    useNotify
} from 'react-admin';

// import get from 'lodash/get'
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const PostFlagsField = ({record, resource, ...rest}) => {

    const {id} = record;
    const refresh = useRefresh();
    const notify = useNotify();
    const [flag, setFlag] = useState(null);

    const [update, { loading, error }] = useUpdate(resource, id, {[flag]: !record[flag]}, record, {
            onSuccess: () => {
                refresh();
                notify(`${resource} updated`);
                setFlag(null)
            },
            onFailure: () => notify('Error: item not updated', 'warning'),
    });

    useEffect(()=>{
        if(flag){
            update();
        }
    }, [flag])
    
    const data = {
        "is_published": {
            on : VisibilityIcon,
            off: VisibilityOffIcon
        },
        "is_promoted": {
            on : FavoriteIcon,
            off: FavoriteBorderIcon
        }
    }

    return <Box component="span" sx={{
        display: 'flex',
        flexDirection: 'row'
    }}>{Object.keys(data).map(name => {
        const IconOn = data[name].on;
        const IconOff = data[name].off;
       return ( <IconButton key={name} onClick={() => setFlag(name)} aria-label={name} component="span" sx={{
            padding: 2
       }}>
        {record[name] ? <IconOn sx={{
            color: "#333"
        }}  />: <IconOff sx={{
            color: "#ccc"
        }} />}
        </IconButton>)

    })}</Box>

}

PostFlagsField.defaultProps = {
    addLabel: true
}

export default PostFlagsField
