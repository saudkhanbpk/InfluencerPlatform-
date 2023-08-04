'use client'
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { baseUrl } from '@/app/BaseUrl';
import axios from 'axios';

export const AccountTeamSettings = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const { members,teamMeamber } = props;
  console.log("ksdgjfgsdhkf22",teamMeamber)
  const SendInvite= ()=>{
    
    const data = {
      email: userEmail
  };
let payload={members:data}
console.log("data--------", payload)
  const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };
  let user = JSON.parse(localStorage.getItem('user'))
   console.log("userData", user._id)
    axios.put(`${baseUrl}/api/updateMembers/${user._id}`, payload, config)
            .then((response) => {
                console.log("ser response", response.data);
                // const { email, _id } = response.data.newUser;
                setUserEmail('')
            })
            .catch((error) => {
                console.error(error.response.data.msg);
                toast.error(error.response.data.msg);
                setError(error.response.data.msg);
            })

  }

  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={4}
          >
            <Stack spacing={1}>
                
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'18px' }}>
                Section heading
              </Typography>

            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={12}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={3}
            >
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon>
                        <Mail01Icon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                label="Email address"
                name="email"
                sx={{ flexGrow: 1 }}
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
              <Button variant="contained" onClick={SendInvite}>
                Send Invite
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <Scrollbar>
        <Table sx={{ minWidth: 400, border:0 }} >
          <TableHead sx={{backgroundColor:'#F8F9FA'}}>
            <TableRow >
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Role
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <Avatar
                      src={member.avatar}
                      sx={{
                        height: 40,
                        width: 40
                      }}
                    >
                      <SvgIcon>
                        <User01Icon />
                      </SvgIcon>
                    </Avatar>
                    <div>
                      <Typography variant="subtitle2">
                        {member.name}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                      >
                        {member.email}
                      </Typography>
                    </div>
                  </Stack>
                </TableCell>
                <TableCell>
                  {member.role === 'Owner'
                    ? (
                      <SeverityPill>
                        {member.role}
                      </SeverityPill>
                    )
                    : member.role}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <SvgIcon>
                      <DotsHorizontalIcon />
                    </SvgIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

AccountTeamSettings.propTypes = {
  members: PropTypes.array.isRequired
};
