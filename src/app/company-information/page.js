'use client'
import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation'

const CompanyInfo = () => {
  const router = useRouter()
  const [niche, setNiche] = useState('')
  const [budget, setBudget] = useState('')
  const [companysize, setCompanysize] = useState('')
  const [companyfounded, setCompanyfounded] = useState('')
  const [bio, setBio] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = {
     niche,
     budget,
     companysize,
     companyfounded,
     bio
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
      const response = await axios.post(`${baseUrl}/api/company_info`, data, config)
        .then((response) => {
          router.push('/social-handle')
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
    <Box
      sx={{
        mt: 10
      }}>
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


        <form onSubmit={handelSubmit}>
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
                label="Niche category"
                name="niche"
                type='text'
                onChange={(e) => setNiche(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="budget"
                name="budget"
                onChange={(e) => setBudget(e.target.value)}

              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="company size"
                name="csize"
                onChange={(e) => setCompanysize(e.target.value)}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Company founded"
                name="cfound"
                onChange={(e) => setCompanyfounded(e.target.value)}
              />
            </Grid>
            <Grid xs={12}
              md={12}>
              <TextField
                fullWidth
                name="message"
                label='bio'
                multiline
                rows={3}
                onChange={(e) => setBio(e.target.value)}
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
    </Box>
  )
};
export default CompanyInfo