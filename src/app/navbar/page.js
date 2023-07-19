'use client'
import React from 'react';
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

const Navbar = () => {
  const classes = useStyles();
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.searchIcon} color="inherit" aria-label="search">
            <SearchIcon sx={{fontSize:'40px'}}/>
          </IconButton>
          <div className={classes.title}></div>
          <Button
            className={classes.languageButton}
            startIcon={ <Image src='/image/Flags.png' style={{borderRadius:'100%',marginRight:'2px'}} width={30} height={30} />}
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
            <PeopleAltOutlinedIcon sx={{fontSize:'30px'}}/>
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon sx={{fontSize:'30px'}}/>
          </IconButton>
          <IconButton color="inherit">
            <Image src='/image/avatar.png' width={50} height={50} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
