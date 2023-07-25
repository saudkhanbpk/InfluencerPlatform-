'use client'
import React from 'react';
import {Box} from "@mui/material";
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();

    const handleNavigate = 
    () => {
        router.push('/register')
    }

  return (
    <Box sx={{flexGrow: '4',backgroundColor:'white',mb:5}}>
      <AppBar >
        <Toolbar>
        <Image src="/image/logo2.png" alt="Logo" width={70} height={40} />
          <Box sx={{flexGrow: '4'}}></Box>
          <Button color="red">Home</Button>
          <Button onClick={handleNavigate} color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

