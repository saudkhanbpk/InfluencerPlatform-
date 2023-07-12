'use client'
import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';

const SocialMedia = () => (
  <Box sx={{
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
              <Typography variant="h4" sx={{marginTop:'15px',marginBottom:'15px',fontFamily:'Inter', color:"#000000" }}>
                Social media Handles
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mt: 1,marginBottom:'15px'}}
                variant="body1"
              >
                Showcase your Brand and social media presence to interested influencers who may want to work with you
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
            label="Instagram handle"
            name="insta"
            type='text'
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
           <TextField
            fullWidth
            label="tiktok handle"
            name="tiktok"
            
            
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <TextField
            fullWidth
            label="youtube handle"
            name="youtube"
            
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <TextField
            fullWidth
            label="facebook handle"
            name="facebook"
            
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <TextField
            fullWidth
            label="twitter handle"
            name="twitter"
            
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <TextField
            fullWidth
            label="pinterest handle"
            name="pinterest"        
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <TextField
            fullWidth
            label="linkedin handle"
            name="linkedin"        
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <TextField
            fullWidth
            label="Blog url"
            name="blog"        
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
export default SocialMedia