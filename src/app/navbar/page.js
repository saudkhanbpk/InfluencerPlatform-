'use client'
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from 'next/image';
import Button from '@mui/material/Button';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Box, Divider, Typography, Grid } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';
import { baseUrl } from '../BaseUrl';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    marginRight: 2,
  },
  languageButton: {
    marginRight: 2,
    textTransform: 'none',
    '& .MuiButton-startIcon': {
      marginRight: 1,
    },
  },
  dropdownIcon: {
    marginLeft: 1,
  },
}));

const Navbar = ({ expanded, setExpanded }) => {
  const classes = useStyles();
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [userData, setUserData] = React.useState([]);


  const getAllUserData = () => {
    
   
    let user = JSON.parse(localStorage.getItem('user'))
   
    const apiUrl = `${baseUrl}/api/getuser/${user._id}`;

axios.post(apiUrl)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }
  
  useEffect(() => {

getAllUserData();

  }, []);
  console.log("userData........", userData)

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };
  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  };
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const userInfo = {
    name: "Anika Visser",
    email: "demo@devias.io",
  };

  return (
    <Box className={classes.root} sx={{paddingX:'25px',}}>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Box sx={{ display:'flex', justifyContent:'center', gap:'1rem', alignItems:'center'}}>
            <Grid item>
              <IconButton onClick={handleToggleSidebar} sx={{zIndex:'3', width:'24px', height:'24px'}}>
                {expanded ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton edge="start" className={classes.searchIcon} color="inherit" aria-label="search">
                <SearchIcon sx={{ width:'30px', height:'30px' }} />
              </IconButton>
            </Grid>
            </Box>
            <Grid item xs />
            <Grid item>
              <Button
              // sx={{width:'24px', height:'24px'}}
                className={classes.languageButton}
                startIcon={<Image src='/image/Flags.png' style={{ borderRadius: '100%', marginRight: '2px' }} width={24} height={24} />}
                endIcon={<ArrowDropDownIcon className={classes.dropdownIcon} />}
                onClick={handleLanguageClick}
              >
                English
              </Button>
              <Menu
                anchorEl={languageAnchorEl}
                open={Boolean(languageAnchorEl)}
                onClose={handleLanguageClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleLanguageClose}>English</MenuItem>
                <MenuItem onClick={handleLanguageClose}>Spanish</MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <PeopleAltOutlinedIcon sx={{ width:'24px', height:'24px' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit">
                <NotificationsIcon sx={{ width:'24px', height:'24px' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" onClick={handleOpenPopup}>
                <Image src='/image/little.png' width={40} height={40} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Profile Popup */}
      <Dialog open={popupOpen} onClose={handleClosePopup} PaperProps={{
        sx: {
          position: 'fixed',
          top: '30px', // Adjust the top position as per your requirement
          right: '0px', // Adjust the left position as per your requirement
          minWidth: '200px', // Adjust the width as per your requirement
        },
      }}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ alignItems: 'start' }}>
              <Typography variant="subtitle1">{userInfo.name}</Typography>
              <Typography variant="body2">{userInfo.email}</Typography>
            </Box>
            <Divider sx={{ my: 2, width: '100%' }} />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Navbar;

