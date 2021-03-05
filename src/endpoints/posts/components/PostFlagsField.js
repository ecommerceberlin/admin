import React, {useState, useEffect} from "react";
import {
    useUpdate,
    useRefresh,
    useNotify
} from 'react-admin';

// import get from 'lodash/get'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import VolumeUpIcon from '@material-ui/icons/VolumeUp';
// import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        padding: 2
    },
    iconOn: {
        color: "#333"
    },
    iconOff: {
        color: "#ccc"
    },

}));

const PostFlagsField = ({record, resource, ...rest}) => {

    const {id} = record;
    const refresh = useRefresh();
    const notify = useNotify();
    const classes = useStyles();
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

    return <span className={classes.root}>{Object.keys(data).map(name => {
        const IconOn = data[name].on;
        const IconOff = data[name].off;
       return ( <IconButton key={name} onClick={() => setFlag(name)} aria-label={name} component="span" className={classes.button}>
        {record[name] ? <IconOn className={classes.iconOn}  />: <IconOff className={classes.iconOff} />}
        </IconButton>)

    })}</span>

}

PostFlagsField.defaultProps = {
    addLabel: true
}

export default PostFlagsField
