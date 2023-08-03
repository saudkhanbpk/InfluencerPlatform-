'use client'
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Switch,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { baseUrl } from '@/app/BaseUrl';
import axios from 'axios';


export const AccountGeneralSettings = (props) => {
  const [userData, setUserData] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [timeZones, setTimeZones] = useState('');


  // Create refs for input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const timeZonesRef = useRef(null);

  const handleEditClick = (ref) => {
    // Focus on the input field
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  const allUserData = () => {


    let user = JSON.parse(localStorage.getItem('user'))

    const apiUrl = `${baseUrl}/api/getuser/${user?._id}`;

    axios.post(apiUrl)
      .then((response) => {
        setUserData(response.data?.users[0])
        // console.log("user dfatra ;",response)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
  // const updateUserData = () => {
  const handleSubmit = (e) => {
    console.log("ksdgjfgsdhkf")
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: userEmail,
      timeZones: timeZones,
    };

    console.log("data--------", data)
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };



    let user = JSON.parse(localStorage.getItem('user'))
    console.log("userData", user._id)
    axios.put(`${baseUrl}/api/update/${user._id}`, data, config)
      .then((response) => {
        console.log(response.data);
        // const { email, _id } = response.data.newUser;
      })
      .catch((error) => {
        console.error(error.response.data.msg);
        toast.error(error.response.data.msg);
        setError(error.response.data.msg);
      })

  }

  useEffect(() => {

    allUserData();
    // updateUserData();

  }, []);
  useEffect(() => {
    setFirstName(userData.name)
    setLastName(userData.lastName)
    setUserEmail(userData.email)
    setTimeZones(userData.timeZones)
   

  }, [userData]);
  console.log("UserData........", userData)
  const { avatar, email, name } = props;

  return (
    <Stack
      spacing={4}
      {...props}>
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
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize: '18px' }}>
                Personal Information
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              <Stack spacing={3}>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Box>
                    <Box
                      sx={{
                        borderRadius: '50%',
                        height: '100%',
                        width: '100%',
                        position: 'relative'
                      }}
                    >
                      <Avatar
                        src={avatar}
                        sx={{
                          height: 50,
                          width: 50
                        }}
                      >
                        <SvgIcon>
                          <User01Icon />
                        </SvgIcon>
                      </Avatar>
                    </Box>
                  </Box>
                  <Button
                    color="primary"
                    // size="small"
                    sx={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    Change
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    fullWidth
                    label="First Name"
                    margin="normal"
                    name="name"
                    type="text"
                    inputRef={firstNameRef} // Attach ref to the input field
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(firstNameRef)} // Call the handler with ref
                  >
                    Edit
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    name="name"
                    type="text"
                    inputRef={lastNameRef} // Attach ref to the input field
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(lastNameRef)} // Call the handler with ref
                  >
                    Edit
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    fullWidth
                    label="Email address"
                    margin="normal"
                    name="name"
                    type="text"
                    inputRef={userEmailRef} // Attach ref to the input field
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                  />
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(userEmailRef)} // Call the handler with ref
                  >
                    Edit
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    fullWidth
                    label="Timezone"
                    margin="normal"
                    name="name"
                    type="text"
                    inputRef={timeZonesRef} // Attach ref to the input field
                    onChange={(e) => setTimeZones(e.target.value)}
                    value={timeZones}

                  />
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(timeZonesRef)} // Call the handler with ref
                  >
                    Edit
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: "20px" }}>
        <Button
          sx={{
            ml: { xs: 0, md: 2 }, // Adjusted margin left for mobile and tablet
            px: { xs: 1, md: 4 }, // Adjusted padding for mobile and tablet
            py: { xs: 1, md: 2 }, // Adjusted padding for mobile and tablet
            color: '#FFFFFF',
            backgroundColor: '#2970FF',
            fontWeight: 600,
            lineHeight: '24px',
            borderRadius: '12px',

            mb: { xs: 2, md: 0 } // Adjusted margin bottom for mobile and tablet
          }}

          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Save Changes
        </Button>
      </Box>

    </Stack>
  );
};

AccountGeneralSettings.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
