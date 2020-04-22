import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  { Dropdown, DropdownButton } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const styles = (theme) => ({
  paper: {
    margin: 'auto',
    marginLeft: '240px'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

export  class Content extends React.Component {

  render() {
  const { classes } = this.props;
  const navDropdownTitle = (<h5 style={{ fontWeight: '300', padding: '8px' }}>Recent</h5>);

    return (
    <div className={classes.paper} style={{ marginTop: '30px' }}>
      {navDropdownTitle}
      <Divider />

    </div>
    )
  }
}




export default (withStyles(styles)(Content));