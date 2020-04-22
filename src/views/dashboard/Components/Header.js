import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Dropdown, NavDropdown }  from 'react-bootstrap';
import './styles.css';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth'
import { connect } from 'react-redux';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));




const useStyles = (theme => ({
  root: {
    width: 350,
    height:   300,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: '#797979',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  appBarBorder: {
    borderRadius: '1',
  },
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#f2f2f2' ,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(10),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(25),
      width: '40%',
      height: '50px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 3),
    fontWeight: '700',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#5e5e5e',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#000000',
  },
  inputInput: {
    fontFamily: 'Roboto',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    color: '#000000',


  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


export  class Header extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render() {
    const { classes } = this.props;
    const navDropdownTitle = (<Avatar aria-controls="customized-menu" aria-haspopup="true"  variant="contained" color="primary" style={{ height: '33px', width: '33px' }} > {this.props.auth.user.first_name.slice(0,1).toUpperCase()}</Avatar>);
  
    Header.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    return (
      <div className={classes.grow}>
        <AppBar style={{ background: 'transparent', boxShadow: 'none', borderBottom: '1px solid #e8e8e8',  position: "fixed"}}  position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h5" noWrap>
              Drive
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                style={{ height: '100%', width: '100%', fontSize: '18px', fontWeight: '350' }}
                placeholder="Search in Drive"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search in Drive' }}
              />
            </div>
            <div className={classes.grow} />
            <NavDropdown title={navDropdownTitle} style={{ textDecorationLine: "transparent", top: '3px' , boxShadow: '30px solid  #eeee' }}>
                      <Card className={classes.root} style={{ background: 'transparent',  boxShadow: 'none', }}>
                          <CardContent style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                            <Avatar style={{ height: '80px',  width:  '80px'  }}>{this.props.auth.user.first_name.slice(0,1).toUpperCase()}</Avatar>
                          </CardContent>
                            <Typography style={{ color: '#333333',  fontSize: '16px' , fontFamily: 'Roboto', fontWeight:  '500', alignContent: 'center', justifyContent: 'center', display: 'flex'  }} variant="h6" noWrap>
                              {this.props.auth.user.first_name}   {this.props.auth.user.last_name}
                            </Typography>     
                            <Typography style={{ color: '#8c8c8c',  fontSize: '14px' , fontFamily: 'Roboto', fontWeight:  '100', alignContent: 'center', justifyContent: 'center', display: 'flex'  }} variant="h6" noWrap>
                            {this.props.auth.user.email }
                            </Typography> 
                            <CardContent style={{ alignContent: 'center', justifyContent: 'center', display: 'flex', marginTop: '30px' }}>
                              <Button onClick={this.props.logout} variant="outlined" style={{ fontWeight: '400', outline: '0'  }}>Sign out of Drive</Button>             
                            </CardContent> 
                      </Card>
            </NavDropdown>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps,  { logout })(withStyles(useStyles)(Header));