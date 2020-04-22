import React, {lazy, Suspense} from 'react';
import {Header, Drawer} from './Components/index';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
import { renderRoutes } from 'react-router-config';
import Link from '@material-ui/core/Link';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Drive
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  let theme = createMuiTheme({
    palette: {
      primary: {
        light: '#63ccff',
        main: '#009be5',
        dark: '#006db3',
      },
    },
    typography: {
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 8,
    },
    props: {
      MuiTab: {
        disableRipple: true,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });
  
  theme = {
    ...theme,
    overrides: {
      MuiDrawer: {
        paper: {
          backgroundColor: '#18202c',
        },
      },
      MuiButton: {
        label: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
      MuiTabs: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
      MuiIconButton: {
        root: {
          padding: theme.spacing(1),
        },
      },
      MuiTooltip: {
        tooltip: {
          borderRadius: 4,
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: '#404854',
        },
      },
      MuiListItemText: {
        primary: {
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
      MuiListItemIcon: {
        root: {
          color: 'inherit',
          marginRight: 0,
          '& svg': {
            fontSize: 20,
          },
        },
      },
      MuiAvatar: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  };
  
  const drawerWidth = 256;
  
  const styles = {
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: theme.spacing(6, 4),
      background: '#ffffff',
    },
    footer: {
      padding: theme.spacing(2),
      background: '#ffffff',
    },
  };
  

export class Dashboard extends React.Component {
  

  componentDidMount() {

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool,
  };
    render() {
            console.log(this.props)
            const { classes } = this.props;
            const { route } = this.props;
            
            if(this.props.isLoading){
              return <h1>Loading.....</h1>
            }
              if (!this.props.isAuthenticated) {
                return <Redirect to="/account/login" />;
              }

        return (
          
            <div>
                <Header />
                <Drawer />
                <div className={classes.app}>
                    <main className={classes.main}>
                        <Suspense fallback={<LinearProgress />}>
                        {renderRoutes(route.routes)}
                        </Suspense>
                    </main>
                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { login })(withStyles(styles)(Dashboard));

