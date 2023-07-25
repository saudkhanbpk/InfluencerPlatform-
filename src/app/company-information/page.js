// 'use client'
// import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// import axios from 'axios';
// import { useState } from 'react';
// import { baseUrl } from '../BaseUrl';
// import { useRouter } from 'next/navigation'
// import Image from 'next/image';

// const CompanyInfo = () => {
//   const router = useRouter()
//   const [niche, setNiche] = useState('')
//   const [budget, setBudget] = useState('')
//   const [companysize, setCompanysize] = useState('')
//   const [companyfounded, setCompanyfounded] = useState('')
//   const [bio, setBio] = useState('')

//   const [message, setMessage] = useState('');

//   const handelSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       niche,
//       budget,
//       companysize,
//       companyfounded,
//       bio
//     };
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     };
//     const response = await axios.post(`${baseUrl}/api/company_info`, data, config)
//       .then((response) => {
//         router.push('/social-handle')
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
//     <Box
//       sx={{
//         mt: 10
//       }}>
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
//         px: 7, py: 5,marginBottom: '30px'
//       }}>


//         <form onSubmit={handelSubmit}>
//           <Typography
//             color="error"
//             sx={{ mt: 1, marginBottom: '15px' }}
//             variant="body1"
//           >
//             {message}
//           </Typography>
//           <Box >
//             <Typography variant="h4" sx={{marginTop: '0px', marginBottom: '25px', fontFamily: 'plus jakarta sans', fontSize: '32px', color: '#000000',fontWeight:700,fontFamily:'Plus Jakarta Sans',lineHeight:'48px'  }}>
//               General Bussiness Information
//             </Typography>

//           </Box>
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
//                 label="Niche category"
//                 name="niche"
//                 type='text'
//                 onChange={(e) => setNiche(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="budget"
//                 name="budget"
//                 onChange={(e) => setBudget(e.target.value)}

//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Company size"
//                 name="csize"
//                 onChange={(e) => setCompanysize(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Company founded"
//                 name="cfound"
//                 onChange={(e) => setCompanyfounded(e.target.value)}
//               />
//             </Grid>
//             <Grid xs={12}
//               md={12}>
//               <TextField
//                 fullWidth
//                 name="message"
//                 label='Bio'
//                 multiline
//                 rows={3}
//                 onChange={(e) => setBio(e.target.value)}
//               />
//             </Grid>



//           </Grid>
//           <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end' }}>
//             <Button sx={{bgcolor: 'white', marginLeft: "5px", p: 1,color: '#000000',fontWeight:600 ,fontSize:'16px',lineHeight:'24px',borderRadius:'12px' }}
//               type="reset"
//             >
//               cancel
//             </Button>
//             <Button sx={{  marginLeft: "5px",  marginLeft: "5px", px: 2,color: '#FFFFFF',backgroundColor:'#2970FF',fontWeight:600 ,fontSize:'16px',lineHeight:'24px',borderRadius:'12px' }}
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
// export default CompanyInfo


'use client';
import { Box, Button, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CompanyInfo = () => {
    const router = useRouter();
    const [niche, setNiche] = useState('');
    const [budget, setBudget] = useState('');
    const [companysize, setCompanysize] = useState('');
    const [companyfounded, setCompanyfounded] = useState('');
    const [bio, setBio] = useState('');
    const [message, setMessage] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();
        const data = {
            niche,
            budget,
            companysize,
            companyfounded,
            bio,
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.post(`${baseUrl}/api/company_info`, data, config);
            router.push('/social-handle');
            const { newUser, token, msg } = response.data;
            setMessage(msg);
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error); // Handle the error
            setMessage(error.response?.data?.message || 'An error occurred.');
        }
    };

    return (
        <Box sx={{ mt: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Image alt="Amplify" src="/image/logo2.png" width={125} height={40} />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    margin: 'auto',
                    boxShadow: '4',
                    borderRadius: '16px',
                    marginTop: '30px',
                    backgroundColor: "#ffff",
                    boxShadow: '4',
                    '@media (min-width: 768px)': {
                        width: '50%', // Change width to 50% on desktop screens
                        mt: '50px', // Add top margin on desktop screens
                        px: 5,
                        py: 2,
                    }
                }}
            >
                <Box sx={{
                    p: 2
                }}>
                    <form onSubmit={handelSubmit}>
                        <Typography
                            color="error"
                            sx={{ mt: 1, mb: 2 }}
                            variant="body1"
                        >
                            {message}
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 0, mb: 3, fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: 700 }}>
                            General Business Information
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Niche category"
                                    name="niche"
                                    type="text"
                                    onChange={(e) => setNiche(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Budget"
                                    name="budget"
                                    onChange={(e) => setBudget(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Company size"
                                    name="csize"
                                    onChange={(e) => setCompanysize(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Company founded"
                                    name="cfound"
                                    onChange={(e) => setCompanyfounded(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    name="message"
                                    label="Bio"
                                    multiline
                                    rows={3}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', flexDirection: { xs: 'column', md: 'row' } }}>
                            <Button sx={{ p: 1, borderRadius: '12px', mb: { xs: 2, md: 0 }, width: { xs: '100%', md: 'auto' } }} type="reset">
                                Cancel
                            </Button>
                            <Button
                                sx={{ ml: { xs: 0, md: 2 }, p: 2, borderRadius: '12px', bgcolor: '#2970FF', color: '#FFFFFF', fontWeight: 600, width: { xs: '100%', md: 'auto' } }}
                                type="submit"
                                variant="contained"
                            >
                                Save changes and NEXT
                            </Button>
                        </Box>

                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default CompanyInfo;
