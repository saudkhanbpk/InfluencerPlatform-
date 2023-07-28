// 'use client'
// import React from 'react';
// import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// import axios from 'axios';
// import { useState } from 'react';
// import { baseUrl } from '../BaseUrl';
// import { useRouter } from 'next/navigation'
// import Image from 'next/image';


// const SocialMedia = () => {

//   const router = useRouter()
//   const [instagram, setInstagram] = useState('')
//   const [tiktok, setTiktok] = useState('');
//   const [youtube, setYoutube] = useState('');
//   const [facebook, setFacebook] = useState('');
//   const [twitter, setTwitter] = useState('');
//   const [pinterest, setPinterest] = useState('');
//   const [linkedin, setLinkedin] = useState('');
//   const [blog, setBlog] = useState('')

//   const [message, setMessage] = useState('');


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       instagram,
//       tiktok,
//       youtube,
//       facebook,
//       twitter,
//       pinterest,
//       linkedin,
//       blog
//     };
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     };
//     const response = await axios.post(`${baseUrl}/api/social_handle`, data, config)
//       .then((response) => {
//         router.push('/pricing-plan')
//         console.log(response.data);
//         const { newUser, token, msg } = response.data;
//         console.log(newUser);
//         console.log(token);
//         console.log(msg);
//         setMessage(msg);
//         localStorage.setItem('token', token);
//       })
//       .catch((error) => {
//         console.error(error); // Handle the error
//         setMessage(error.response.data.message);
//       });
//   }
//   return (
//     <Box sx={{
//       mt: 10
//     }}>
//       <Box sx={{ display: "flex", mt: '20px', justifyContent: 'center' }}>
//         <Image
//           alt="Amplify"
//           src="/image/logo2.png"
//           width={125}
//           height={40}

//         />
//       </Box>

//       <Box sx={{
//         width: '50%', margin: 'auto', boxShadow: '4', borderRadius: '16px', marginTop: '30px',
//         backgroundColor: "#ffff",
//         px: 7, py: 5
//       }}>


//         <form onSubmit={handleSubmit}>
//           <Typography
//             color="error"
//             sx={{ mt: 1, marginBottom: '15px' }}
//             variant="body1"
//           >
//             {message}
//           </Typography>
//           <div >
//             <Typography variant="h4" sx={{ marginTop: '15px', marginBottom: '15px', fontFamily: 'plus jakarta sans', fontSize: '32px', color: '#000000',fontWeight:700,fontFamily:'Plus Jakarta Sans',lineHeight:'48px' }}>
//               Social media Handles
//             </Typography>
//             <Typography
//               color="text.secondary"
//               sx={{ mt: 1, marginBottom: '15px',fontSize:'18px',fontWeight:400,lineHeight:"27px",}}
//               variant="body1"
//             >
//               Showcase your Brand and social media presence to interested influencers who may want to work with you
//             </Typography>

//           </div>
//           <Grid
//             container
//             spacing={3}
//           >
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Instagram handle"
//                 name="insta"
//                 type='text'
//                 onChange={(e) => setInstagram(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="tiktok handle"
//                 name="tiktok"
//                 onChange={(e) => setTiktok(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="youtube handle"
//                 name="youtube"
//                 onChange={(e) => setYoutube(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="facebook handle"
//                 name="facebook"
//                 onChange={(e) => setFacebook(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="twitter handle"
//                 name="twitter"
//                 onChange={(e) => setTwitter(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="pinterest handle"
//                 name="pinterest"
//                 onChange={(e) => setPinterest(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="linkedin handle"
//                 name="linkedin"
//                 onChange={(e) => setLinkedin(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Blog url"
//                 name="blog"
//                 onChange={(e) => setBlog(e.target.value)}
//               />
//             </Grid>


//           </Grid>

//           <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end' }}>
//             <Button sx={{bgcolor: 'white', marginLeft: "5px", p: 1,color: '#000000',fontWeight:600 ,fontSize:'16px',lineHeight:'24px',borderRadius:'12px' }}
//               type="reset"
//             >
//               cancel
//             </Button>
//             <Button sx={{  marginLeft: "5px",  marginLeft: "5px", p:2,px: 2,color: '#FFFFFF',backgroundColor:'#2970FF',fontWeight:600 ,fontSize:'16px',lineHeight:'24px',borderRadius:'12px' }}
//               type="submit"
//               variant="contained"
//             >
//               Save changes and NEXT
//             </Button>
//           </Box>

//         </form>
//       </Box>
//     </Box>
//   )
// };
// export default SocialMedia

'use client'
import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SocialMedia = () => {
    
    const router = useRouter();
    const [instagram, setInstagram] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [youtube, setYoutube] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [pinterest, setPinterest] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [blog, setBlog] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user,setUser]=useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            instagram,
            tiktok,
            youtube,
            facebook,
            twitter,
            pinterest,
            linkedin,
            blog,
            userId:user._id
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.post(`${baseUrl}/api/social_handle`, data, config);
            const { newUser, token, msg } = response.data;
            console.log(newUser);
            console.log(token);
            console.log(msg);
            setMessage(msg);
            localStorage.setItem('token', token);
            router.push('/pricing-plan');
        } catch (error) {
            console.error(error); // Handle the error
            setMessage(error.response?.data?.message || 'Social handle info already exists.');
        }
        finally {
            setIsLoading(false); // Set loading state to false after API call (whether success or error)
        };
    };
    useEffect(()=>{
        let userData = localStorage.getItem('user')
let user1 = JSON.parse(userData)
setUser(user1)
    },[])
    return (
        <Box sx={{ mt: 10 }}>
            <Box sx={{ display: 'flex', mt: '20px', justifyContent: 'center' }}>
                <Image alt="Amplify" src="/image/logo2.png" width={125} height={40} />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    margin: 'auto',
                    boxShadow: 4,
                    borderRadius: '16px',
                    marginTop: '30px',
                    backgroundColor: '#ffff',
                    '@media (min-width: 768px)': {
                        width: '50%', // Change width to 50% on desktop screens
                        mt: '50px', // Add top margin on desktop screens
                        px: 5,
                        py: 3,
                    }
                }}
            >
                <Box sx={{
                    p: 2
                }}>
                    <form onSubmit={handleSubmit}>
                        <Typography color="error" sx={{ mt: 1, marginBottom: '15px' }} variant="body1">
                            {message}
                        </Typography>
                        <div>
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: '15px',
                                    marginBottom: '15px',
                                    fontFamily: 'plus jakarta sans',
                                    fontSize: '32px',
                                    color: '#000000',
                                    fontWeight: 700,
                                    fontFamily: 'Plus Jakarta Sans',
                                    lineHeight: '48px',
                                }}
                            >
                                Social media Handles
                            </Typography>
                            <Typography
                                color="text.secondary"
                                sx={{
                                    mt: 1,
                                    marginBottom: '15px',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '27px',
                                }}
                                variant="body1"
                            >
                                Showcase your Brand and social media presence to interested influencers who may want to work with you
                            </Typography>
                        </div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Instagram handle"
                                    name="insta"
                                    type="text"
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="tiktok handle"
                                    name="tiktok"
                                    onChange={(e) => setTiktok(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="youtube handle"
                                    name="youtube"
                                    onChange={(e) => setYoutube(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="facebook handle"
                                    name="facebook"
                                    onChange={(e) => setFacebook(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="twitter handle"
                                    name="twitter"
                                    onChange={(e) => setTwitter(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="pinterest handle"
                                    name="pinterest"
                                    onChange={(e) => setPinterest(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="linkedin handle"
                                    name="linkedin"
                                    onChange={(e) => setLinkedin(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Blog url" name="blog" onChange={(e) => setBlog(e.target.value)} />
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', flexDirection: { xs: 'column', md: 'row' } }}>
                            <Button sx={{ p: 1, borderRadius: '12px', mb: { xs: 2, md: 0 }, width: { xs: '100%', md: 'auto' } }} type="reset">
                                Cancel
                            </Button>
                            <Button
                                sx={{ ml: { xs: 0, md: 2 },px: { xs: 1, md: 4 }, p: 2, borderRadius: '12px', bgcolor: '#2970FF', color: '#FFFFFF', fontWeight: 600, width: { xs: '100%', md: 'auto' } }}
                                disabled={isLoading} // Disable the button while loading
                                type="submit"
                                variant="contained"
                            >
                                {isLoading ? "Loading..." : " Save changes and NEXT"} {/* Display "Loading..." while loading */}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default SocialMedia;
