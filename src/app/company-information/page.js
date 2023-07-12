'use client'
import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';

const CompanyInfo = () => (
  <Box
  sx={{
    mt:10
  }}>
  <Box sx={{display:"flex",mt:'20px', justifyContent:'center'}}>
  <img 
  alt="Amplify" 
  src="/image/logo.png" 
  style={{maxWidth: '150px', width: '100%'}} 
  />
  </Box>
  
  <Box sx={{ width: '50%',margin:'auto',boxShadow:'4',borderRadius: '16px',marginTop:'30px',
        backgroundColor:"#ffff",
            px: 7,py:5}}>


    <form onSubmit={(event) => event.preventDefault()}>
    <div >
              <Typography variant="h4" sx={{marginTop:'15px',marginBottom:'25px',fontFamily:'plus jakarta sans',fontSize:'25', color:'#000000'}}>
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
          />
        </Grid>
        
        
        
      </Grid>
      <Box sx={{ mt:2,display:'flex',justifyContent:'end' }}>
        <Button sx={{ width:'15%', bgcolor:'white',color:'black'}}
          type="reset"
          variant="contained"
        >
          cancel
        </Button>
        <Button sx={{ width:'35%',marginLeft:"5px" ,p:1}}
          type="submit"
          variant="contained"
        >
          Save changes and NEXT
        </Button>
      </Box>
      
    </form>
  </Box>
  </Box>
);
export default CompanyInfo