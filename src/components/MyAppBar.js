
import React, {forwardRef} from 'react';
import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GroupAndEventSelect from './GroupAndEventSelect'
import SettingsIcon from '@material-ui/icons/Settings';

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


 

const ConfigurationMenu = forwardRef(({ onClick }, ref) => (
    <MenuItemLink
        ref={ref}
        to="/configuration"
        primaryText="Configuration"
        leftIcon={<SettingsIcon />}
        onClick={onClick} // close the menu on click
    />
));

const MyUserMenu = props => (
    <UserMenu {...props}>
        {/* <ConfigurationMenu /> */}
    </UserMenu>
);


const MyAppBar = (props) => {
    
    const classes = useStyles();
  
    return (
        <AppBar {...props} userMenu={<MyUserMenu />}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />

            <GroupAndEventSelect />

      
            {/* <Logo /> */}
            <span className={classes.spacer} />
        </AppBar>
    );
}

export default MyAppBar;