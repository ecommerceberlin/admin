// in src/Menu.js
import * as React from 'react';
// import { createElement } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { 
    MenuItemLink, 
    useResourceDefinitions,
    usePermissions ,
    useSidebarState
} from 'react-admin';

import DefaultIcon from '@mui/icons-material/ViewList';
import LabelIcon from '@mui/icons-material/Label';
import { withRouter } from 'react-router-dom';
import {capitalizeFirstLetter} from '../api'

const Menu = ({ onMenuClick, logout }) => {
    
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const [open] = useSidebarState();
    const resourcesDef = useResourceDefinitions()
    const resources = Object.keys(resourcesDef).map(name => resourcesDef[name]);

    const { loading, permissions } = usePermissions();

    const filtered = resources.filter(resource => resource.hasList && !("hideInMenu" in resource.options))

    return (
        <div style={{marginTop: 20}}>
            {filtered.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        capitalizeFirstLetter(resource.name)
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            {/* <MenuItemLink
                to="/custom-route"
                primaryText="Miscellaneous"
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            /> */}
            {isXSmall && logout}
        </div>
    );
};

export default withRouter(Menu);