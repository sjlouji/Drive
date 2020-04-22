import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {  makeStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import './styles.css'
import Button from '@material-ui/core/Button';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import  { Dropdown, DropdownButton } from 'react-bootstrap';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Card from '@material-ui/core/Card';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';

const categories = [
    {
      id: 'Project',
      children: [
        { id: 'Drive', icon: <FileCopyIcon />,to: '/drive/my-drive'},
        { id: 'Shared with  me', icon: <PeopleOutlineIcon />, to: '/drive/shared-with-me'},
        { id: 'Recent', icon: <ScheduleIcon />, to: '/drive/recent'},
        { id: 'Starred', icon: <StarBorderIcon />, to: '/drive/starred'},
        { id: 'Trash', icon: <DeleteOutlineIcon />, to: '/drive/trash'},
      ],
    },
  ];
  
  const styles = makeStyles(theme => ({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 10,
      marginLeft: '20px',
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    active: {
      backgroundColor: '#e8f0fe',
      borderBottomRightRadius:  '27px',
      borderTopRightRadius:  '27px',
    },
    itemPrimary: {
      fontSize: 'inherit',
      color: '#616161',
      paddingRight: '20px'
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    drawer: {
        width: '250px',
        borderRight: 'none',
        marginTop: '60px',
        zIndex: '1',
    },
    buttonCustom: {
      borderRadius: '30px',
      height: '50px',
      width: '120px',
      outline: '0',
    }
  }));
  

export default function ClippedDrawer() {
  const classes = styles();
  const navDropdownTitle = (<h5 style={{ fontWeight: '300' }}><PlaylistAddOutlinedIcon  style={{ color: '' }}/>   New </h5>);

  return (
    <Drawer classes = {{ paper: classes.drawer }}  variant="permanent">
        {categories.map(({ id, children }) => (
            <React.Fragment key={id} className={classes.drawer}>
            <ListItem className={classes.categoryHeader} style={{ paddingLeft: '60px' }}>
            
            </ListItem>
            {children.map(({ id: childId, to , icon }) => (
              <NavLink to={to} style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <ListItem
                key={childId}
                button
                className={classes.item}
                >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                    classes={{
                    primary: classes.itemPrimary,
                    }}
                >
                    {childId}
                </ListItemText>
                </ListItem>
                </NavLink>
            ))}
            <Divider className={classes.divider} />
            <Link  style={{ textDecoration: 'none' }} >
                <ListItem
                button
                style={{ marginTop: '20px' }}
                className={classes.item}
                >
                <ListItemIcon className={classes.itemIcon}><StorageIcon /></ListItemIcon>
                <ListItemText
                    classes={{
                    primary: classes.itemPrimary,
                    }}
                >
                    Storage
                </ListItemText>
                </ListItem>
                </Link>
            </React.Fragment>
        ))}

  </Drawer>
  );
}
