'use client'
import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation'

const GeneralInfo = () => {
  const router = useRouter()

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [companyname, setCompanyname] = useState('')
  const [companywebsite, setCompanywebsite] = useState('')
  const [companyaddress, setCompanyaddress] = useState('')

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      fname,
      lname,
      phone,
      companyname,
      companywebsite,
      companyaddress
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
      const response = await axios.post(`${baseUrl}/api/general_info`, data, config)
        .then((response) => {
          router.push('/company-information')
          console.log(response.data);
          const { newUser, token, msg } = response.data;
          console.log(newUser);
          console.log(token);
          console.log(msg);
          setMessage(msg);
          localStorage.setItem('token', token);
        })
        .catch((error) => {
          console.error(error); // Handle the error
        });
     
  }
  return (
    < Box sx={{ mt: 10 }
    }>
      <Box sx={{ display: "flex", mt: '20px', justifyContent: 'center' }}>
        <img
          alt="Amplify"
          src="/image/logo.png"
          style={{ maxWidth: '150px', width: '100%' }}
        />
      </Box>

      <Box sx={{
        width: '50%', margin: 'auto', boxShadow: '4', borderRadius: '16px', marginTop: '30px',
        backgroundColor: "#ffff",
        px: 7, py: 5
      }}>


        <form onSubmit={handleSubmit}>
          <div>{message && <p>{message}</p>}</div>
          <div >
            <Typography variant="h4" sx={{ marginTop: '15px', marginBottom: '25px', fontFamily: 'plus jakarta sans', fontSize: '25', color: '#000000' }}>
              General Bussiness Information
            </Typography>

          </div>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="First Name"
                name="fname"
                type='text'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Last Name"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Company Name"
                name="cname"
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Company Website"
                name="cwebsite"
                value={companywebsite}
                onChange={(e) => setCompanywebsite(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Company Address"
                name="caddress"
                value={companyaddress}
                onChange={(e) => setCompanyaddress(e.target.value)}
              />
            </Grid>


          </Grid>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
            <Button sx={{ width: '15%', bgcolor: 'white', color: 'black' }}
              type="reset"
              variant="contained"
            >
              cancel
            </Button>
            <Button sx={{ width: '35%', marginLeft: "5px", p: 1 }}
              type="submit"
              variant="contained"
            >
              Save changes and NEXT
            </Button>
          </Box>

        </form>
      </Box>
    </Box >
  )
};
export default GeneralInfo