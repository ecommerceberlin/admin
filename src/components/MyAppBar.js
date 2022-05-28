
import React, {forwardRef} from 'react';
import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles'
import GroupAndEventSelect from './GroupAndEventSelect'
import SettingsIcon from '@mui/icons-material/Settings';

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
        <AppBar
            sx={{
                "& .RaAppBar-title": {
                    flex: 1,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                },
            }}
            {...props}
        >
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



// const MyAppBar = (props) => {
    
//     const classes = useStyles();
  
//     return (
//         <AppBar {...props} userMenu={<MyUserMenu />}>
//             <Typography
//                 variant="h6"
//                 color="inherit"
//                 className={classes.title}
//                 id="react-admin-title"
//             />

//            

      
//             {/* <Logo /> */}
//             <span className={classes.spacer} />
//         </AppBar>
//     );
// }

export default MyAppBar;