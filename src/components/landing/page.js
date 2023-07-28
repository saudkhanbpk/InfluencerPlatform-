
// 'use client'
// import { styled } from '@mui/system';
// import { Container, Typography, Button, Box } from '@mui/material';
// import { CloudOutlined, BuildOutlined, SportsFootballOutlined, DesignServicesOutlined } from '@mui/icons-material';
// import Navbar from '../landingnav/page';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'
// import { Router } from 'next/router';
// const HeaderContainer = styled('header')`
//   background-color: #ffffff;
//   ${'' /* min-height: calc(100vh - 6rem); */}
// `;
// const ContentContainer = styled('Box')`
//   ${'' /* max-width: 48rem; */}
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// `;

// const StyledButton = styled(Button)`
//   margin: 0 0.5rem;
// `;

// const StyledIcon = styled('span')`
//   margin: 1.5rem;
//   font-size: 3rem;
// `;

// const HomePage = () =>{  
//  const router =  useRouter();
//   return(
  
//   <HeaderContainer>
//   <Navbar/>
//     <Container className='landing'>
//       <ContentContainer sx={{display :'flex',alignItems:'between'}}>
//        <Box >
//        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.125rem', lg: '5rem' }, fontWeight: 'bold', color: '#333333', mb: '2rem' }}>
//           Welcome to the Influencer Plateform
//         </Typography>
//         <Box>
//           <Typography variant="body1" sx={{ fontSize: { xs: '1.25rem', lg: '2.5rem' }, color: '#666666' }}>
//             Here all You get beyond your expectations.
//           </Typography>
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '2rem' }}>
//           <StyledButton onClick={()=> router.push("/register")} variant="contained" color="primary">
//             Get started
//           </StyledButton>
//           <Typography variant="body1" sx={{ fontSize: { xs: '1.25rem', lg: '2.5rem' }, color: '#666666', mx: '0.5rem' }}>
//             or
//           </Typography>
//           <Button onClick={()=> router.push("/login")} variant="contained" bgcolor="2970FF">
//             Login
//           </Button>
//         </Box>
//        </Box> 
       
//         <Box sx={{flexGrow:1}}
//         className='landimage'>
//         <Image src="/image/landingimage.png" alt="Logo" width={300} height={450} />
//         </Box>
//       </ContentContainer>
    
//     </Container>
//   </HeaderContainer>
// )
// }
// export default HomePage;

'use client'
import { styled } from '@mui/system';
import { Container, Typography, Button, Box } from '@mui/material';
import { CloudOutlined, BuildOutlined, SportsFootballOutlined, DesignServicesOutlined } from '@mui/icons-material';
import Navbar from '../landingnav/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeaderContainer = styled('header')`
  background-color: #ffffff;
`;

const ContentContainer = styled('Box')`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
display:block
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTypography = styled(Typography)`
  font-size: 1.25rem;
  color: #666666;
  margin: 0.5rem;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

const HomePage = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Navbar />
      <Container className='landing'>
        <ContentContainer>
          <Box>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.125rem', lg: '5rem' }, fontWeight: 'bold', color: '#333333', mb: '2rem' }}>
              Welcome to the Influencer Platform
            </Typography>
            <Box>
              <Typography variant="body1" sx={{ fontSize: { xs: '1.25rem', lg: '2.5rem' }, color: '#666666' }}>
                Here you get beyond your expectations.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '2rem' }}>
              <StyledButton onClick={() => router.push("/register")} variant="contained" color="primary">
                Get started
              </StyledButton>
              <StyledTypography variant="body1">
                or
              </StyledTypography>
              <StyledButton onClick={() => router.push("/login")} variant="contained" bgcolor="2970FF">
                Login
              </StyledButton>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} className='landimage'>
            <Image src="/image/landingimage.png" alt="Logo" width={300} height={450} />
          </Box>
        </ContentContainer>
      </Container>
    </HeaderContainer>
  )
}

export default HomePage;



