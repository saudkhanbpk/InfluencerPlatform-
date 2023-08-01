'use client'
import PropTypes from 'prop-types';
import Camera01Icon from '@untitled-ui/icons-react/build/esm/Camera01';
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
import { alpha } from '@mui/material/styles';
import { baseUrl } from '@/app/BaseUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const AccountGeneralSettings = (props) => {
  const [userData, setUserData] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [timeZones, setTimeZones] = useState('');


  const allUserData = () => {
    
   
    let user = JSON.parse(localStorage.getItem('user'))
   
    const apiUrl = `${baseUrl}/api/getuser/${user?._id}`;

axios.post(apiUrl)
      .then((response) =>{
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
        lastName:lastName,
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
    setUserEmail(userData.email)
   

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
              <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'18px' }}>
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
                      {/* <Box
                        sx={{
                          alignItems: 'center',
                          // backgroundColor: (theme) => alpha(theme.palette.neutral[700], 0.5),
                          borderRadius: '50%',
                          color: 'common.white',
                          cursor: 'pointer',
                          display: 'flex',
                          height: '100%',
                          justifyContent: 'center',
                          left: 0,
                          opacity: 0,
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          zIndex: 1,
                          '&:hover': {
                            opacity: 1
                          }
                        }}
                      >
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={1}
                        >
                          <SvgIcon color="inherit">
                            <Camera01Icon />
                          </SvgIcon>
                          <Typography
                            color="inherit"
                            variant="subtitle2"
                            sx={{ fontWeight: 700 }}
                          >
                            Select
                          </Typography>
                        </Stack>
                      </Box> */}
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
                    sx={{fontSize:'14px', fontWeight:'600'}}
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
                    onChange={(e)=>setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <Button
                    color="primary"
                    size="small"
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
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
                  />
                  <Button
                    color="primary"
                    size="small"
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
                    onChange={(e)=>setUserEmail(e.target.value)}
                    value={userEmail}
                  />
                  <Button
                    color="primary"
                    size="small"
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
                    onChange={(e)=>setTimeZones(e.target.value)}
                    value={timeZones}
                    
                  />
                  <Button
                    color="primary"
                    size="small"
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
