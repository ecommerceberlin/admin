
import React, {forwardRef} from 'react';
import {defaultTheme, AppBar, UserMenu, MenuItemLink, ToggleThemeButton, useTheme } from 'react-admin';
import Typography from '@mui/material/Typography';
import GroupAndEventSelect from './GroupAndEventSelect'
import CurrentEvent from './CurrentEvent';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';



 

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


    return (
        <AppBar {...props} userMenu={<MyUserMenu />}>
            <Typography
                variant="h6"
                color="inherit"
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                id="react-admin-title"
            />

            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CurrentEvent />
                <GroupAndEventSelect />
            </Box>
         
            <span style={{ flex: 1 }} />

            <ToggleThemeButton
            lightTheme={defaultTheme}
            darkTheme={{
                palette: { mode: 'dark' },
            }}
        />

        </AppBar>
    );
}


export default MyAppBar;