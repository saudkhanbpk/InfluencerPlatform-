
'use client'
import { styled } from '@mui/system';
import { Container, Typography, Button, Box } from '@mui/material';
import { CloudOutlined, BuildOutlined, SportsFootballOutlined, DesignServicesOutlined } from '@mui/icons-material';
import Navbar from '../landingnav/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { Router } from 'next/router';
// import {Box} from '@material-ui';
// import { Container, Typography, Button, Box } from '@mui/material';



const HeaderContainer = styled('header')`
  background-color: #ffffff;
  ${'' /* min-height: calc(100vh - 6rem); */}
`;

const ContentContainer = styled('Box')`
  ${'' /* max-width: 48rem; */}
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: 0 0.5rem;
`;

const StyledIcon = styled('span')`
  margin: 1.5rem;
  font-size: 3rem;
`;

const HomePage = () =>{  
 const router =  useRouter()
  return(
  
  <HeaderContainer>
  <Navbar/>
    <Container className='landing'>
      <ContentContainer sx={{display :'flex',alignItems:'between'}}>
       <Box >
       <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.125rem', lg: '5rem' }, fontWeight: 'bold', color: '#333333', mb: '2rem' }}>
          Welcome to the Influencer Plateform
        </Typography>
        <div>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.25rem', lg: '2.5rem' }, color: '#666666' }}>
            Here all You get beyond your expectations.
          </Typography>
        </div>
        <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '2rem' }}>
          <StyledButton onClick={()=> router.push("/register")} variant="contained" color="primary">
            Get started
          </StyledButton>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.25rem', lg: '2.5rem' }, color: '#666666', mx: '0.5rem' }}>
            or
          </Typography>
          <StyledButton onClick={()=> router.push("/register")} variant="contained" color="secondary">
            Contact us
          </StyledButton>
        </div>
       </Box> 
       
        <Box sx={{flexGrow:1}}
        className='landimage'>
        <Image src="/image/landingimage.png" alt="Logo" width={300} height={100} />
        </Box>
      </ContentContainer>
    
    </Container>
  </HeaderContainer>
)
}
export default HomePage;

