/**
 * 
 * https://github.com/BigBasket/ra-treemenu/tree/master/src
 * 
 * 
 */
 import * as React from 'react';
 import { 
     DashboardMenuItem, 
     Menu, 
     MenuItemLink, 
     usePermissions, 
     useSidebarState, 
     useTranslate
 } from 'react-admin';
 
 import Accordion from '@mui/material/Accordion';
 import AccordionSummary from '@mui/material/AccordionSummary';
 import AccordionDetails from '@mui/material/AccordionDetails';
 import Divider from '@mui/material/Divider';
 import Box from '@mui/material/Box';
 import Grid from '@mui/material/Grid';
 import MenuItem from '@mui/material/MenuItem';
 import { makeStyles } from '@mui/styles';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import DefaultIcon from '@mui/icons-material/ViewList';
 import classNames from 'classnames';
 import resources from '../resources'
 import { useLocation } from 'react-router-dom';
 import { MyTypography } from '../components'
 import {useSettings} from '../contexts'
 // import { CategoryOutlined } from '@material-ui/icons';
 // import List from '@material-ui/core/List';
 
 
 const useStyles = makeStyles((theme) => ({
     root: {
       width: '100%',
     },
     accordion: {
         backgroundColor: 'inherit'
     },
     expanded: {
         backgroundColor: "#ffffff"
     },
     heading: {
       fontSize: theme.typography.pxToRem(15),
       fontWeight: theme.typography.fontWeightRegular,
     },
     list: {
         width: '100%',
     },
     icon: {
         width: '1.5em',
         height: '1.5em'
     },
     iconActive: {
       color: theme.palette.primary.main
     },
     menuItem: {
         fontSize: theme.typography.pxToRem(14),
         fontWeight: theme.typography.fontWeightRegular,
         paddingLeft: 0,
         whiteSpace: "unset"
     },
   }));
 
 
 const CategoryWithIconAndLabel = ({icon, name, active=false}) => {
     const classes = useStyles();
 
     return (
         <Grid container spacing={2} direction="column" alignItems='center'>
         <Grid item>{React.createElement(icon, {className: classNames(
             classes.icon, {[classes.iconActive]: active} 
         )})}</Grid>
         <Grid item><MyTypography className={classes.heading} label={`menu.categories.${name}`} /></Grid>
         </Grid>
     )
 }
 
 
 const CustomMenuContainer = ({children, ...props}) => {
 
     const classes = useStyles();
 
     return (
         <Menu {...props}>
         <Box mt={5} className={classes.root}>
         <DashboardMenuItem />
         {children}
         </Box></Menu>
     )
 }
 
 const CustomMenu = (props) => {
     // const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));


     const [open, toggleSidebar] =  useSidebarState()

     const [expanded, setExpanded] = React.useState("");
 
     const menuItems = useSettings("menuItems")
     const permissions = usePermissions()
     const translate = useTranslate()
     const classes = useStyles();
     // const resources = useSelector(getResources);
     const {pathname} = useLocation()
 
     const mappedMenuItems = menuItems.reduce((prev,current)=>{
         const children = current.children.reduce((_prev, _current)=>{
             return {..._prev, [_current]: current.name}
         }, {})
         return {...prev, ...children}
     }, {})  
 
     React.useEffect(() => {
 
         let categoryName;
         Object.keys(mappedMenuItems).forEach(page => {
             if(pathname.includes(page)){
                 categoryName = mappedMenuItems[page]
             }
         })
         
         setExpanded(categoryName)
 
     }, [pathname])
 
 
     const handleChangeMin = (panel) => {
         toggleSidebar()
         setExpanded(panel);
     }
 
     const handleChange = (panel) => (event, isExpanded) => {
       if(!open){
         toggleSidebar()
       }
        setExpanded(isExpanded ? panel : "");
     }
 
     if(!open){
 
         return ( <CustomMenuContainer {...props}>
         {menuItems.map(({name, icon}) => <MenuItem key={name} onClick={() => handleChangeMin(name)}>{React.createElement(icon)}</MenuItem>)}
         </CustomMenuContainer>)
     }
 
     return (
         
         <CustomMenuContainer {...props}>
           
         {menuItems.map((category) => {
         
             return (
                 <Accordion 
                     key={category.name} 
                     expanded={expanded === category.name} 
                     onChange={handleChange(category.name)} 
                     square={true} 
                     classes={{
                         root: classes.accordion,
                         expanded: classes.expanded
                     }}
                     elevation={expanded === category.name? 2: 0}
                 >
                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 <CategoryWithIconAndLabel icon={category.icon} name={category.name} active={expanded === category.name}  />
                 </AccordionSummary>
                 <AccordionDetails>
             
                 <div className={classes.list}>
 
                 {category.children.map(category_name => {
                     
                     const resource = resources.find(res => res.props.name === category_name)
                     
                     if(resource){
                         
                         const {options, icon, name} = resource.props
 
                         return (<MenuItemLink
                             key={category_name}
                             className={classes.menuItem}
                             to={`/${name}`}
                             primaryText={options && "label" in options && options.label ? translate(options.label) : translate(`resources.${name}.menu`) }
                             leftIcon={icon ? React.createElement(icon, {}) : <DefaultIcon />}
                             onClick={props.onMenuClick}
                             sidebarIsOpen={open}
                             />)
                     }
                    //  const route = customRoutes.find(route => route.props.path.substring(1) === category_name)
 
                    //  if(route){
                       
                    //      return (<MenuItemLink
                    //          key={category_name}
                    //          className={classes.menuItem}
                    //          to={route.props.path}
                    //          primaryText={translate(`resources.${category_name}.menu`)}
                    //          leftIcon={"icon" in route.props ? <route.props.icon /> : <DefaultIcon />}
                    //          onClick={props.onMenuClick}
                    //          sidebarIsOpen={open}
                    //          />)
                    //  }
                 
                     return category_name
                 })}    
                
                 </div>
 
 
                 </AccordionDetails>
                 </Accordion>
             )
         })}
 
           
         </CustomMenuContainer>
     );
 };
 
 
 export default CustomMenu