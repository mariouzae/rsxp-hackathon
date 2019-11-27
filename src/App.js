import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';
import * as lib from './dependencies';
import { Card } from './components';

// import { addSchool, findAll, findByEmail } from './database/schools';
import { getAll, findByName } from './database/companies';
// import { addBooking, findBookingBySchool, findBookingByCompany } from './database/bookings';

// Firebase initialization
firebase.initializeApp(firebaseConfig);

const drawerWidth = 240;

const useStyles = lib.makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  toolbarItems: {
    justifyContent: 'space-between',
  },
  companyList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
  }
}));

function App() {
  const classes = useStyles();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getAll()
      .then((data) => {
        setCompanies(data);
      })
      .catch(() => { })
  }, []);


  return (
    <div className={classes.root}>
      <lib.CssBaseline />
      <lib.AppBar position="fixed" className={classes.appBar}>
        <lib.Toolbar className={classes.toolbarItems}>
          <lib.Typography variant="h6" noWrap>
            devXP
          </lib.Typography>
          <lib.Typography>
            <lib.Avatar>MU</lib.Avatar>
          </lib.Typography>
        </lib.Toolbar>
      </lib.AppBar>
      <lib.Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <lib.List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <lib.ListItem button key={text}>
              {/* <lib.ListItemIcon>{index % 2 === 0 ? <lib.InboxIcon /> : <lib.MailIcon />}</ListItemIcon> */}
              <lib.ListItemText primary={text} />
            </lib.ListItem>
          ))}
        </lib.List>
      </lib.Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.companyList}>
          <lib.Typography variant="h5">
            Experiencias nas empresas
          </lib.Typography>
          <lib.Button variant="contained" color="primary">
            Adicionar
        </lib.Button>
        </div>
        <div className={classes.card}>
          {companies.map((item) => (
            <Card obj={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
