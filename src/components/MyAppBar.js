
import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GroupAndEventSelect from './GroupAndEventSelect'

const useStyles = makeStyles((theme) => ({

    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
      
  }));


const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />

            <GroupAndEventSelect />
            
            {/* <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
            >test</Typography> */}

      
            {/* <Logo /> */}
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default MyAppBar;