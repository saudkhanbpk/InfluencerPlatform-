'use client'
import React, { useState } from 'react';
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
import { Box, Divider, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ zIndex: '3', }}>
            <IconButton onClick={handleToggleSidebar}>
              {expanded ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          <IconButton edge="start" className={classes.searchIcon} color="inherit" aria-label="search">
            <SearchIcon sx={{ fontSize: '40px' }} />
          </IconButton>
          <div className={classes.title}></div>
          <Button
            className={classes.languageButton}
            startIcon={<Image src='/image/Flags.png' style={{ borderRadius: '100%', marginRight: '2px' }} width={30} height={30} />}
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
          <IconButton color="inherit">
            <PeopleAltOutlinedIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <IconButton color="inherit" onClick={handleOpenPopup}>
            <Image src='/image/little.png' width={50} height={50} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Profile Popup */}
      <Dialog open={popupOpen} onClose={handleClosePopup}  PaperProps={{
          sx: {
            position: 'fixed',
            top: '30px', // Adjust the top position as per your requirement
            right: '0px', // Adjust the left position as per your requirement
            minWidth: '200px', // Adjust the width as per your requirement
          },
        }}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{alignItems:'start'}}>
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
    </div>

  );
};

export default Navbar;
