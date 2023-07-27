// 'use client'
// import React from 'react';
// import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// import axios from 'axios';
// import { useState } from 'react';
// import { baseUrl } from '../BaseUrl';
// import { useRouter } from 'next/navigation'

// const GeneralInfo = () => {
//   const router = useRouter()

//   const [fname, setFname] = useState('')
//   const [lname, setLname] = useState('')
//   const [phone, setPhone] = useState('')
//   const [companyname, setCompanyname] = useState('')
//   const [companywebsite, setCompanywebsite] = useState('')
//   const [companyaddress, setCompanyaddress] = useState('')

//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const data = {
//       fname,
//       lname,
//       phone,
//       companyname,
//       companywebsite,
//       companyaddress
//     };
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     };
//     const response = await axios.post(`${baseUrl}/api/general_info`, data, config)
//       .then((response) => {
//         router.push('/company-information')
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
//     < Box sx={{ mt: 10,mb:10 }}>

//       <Box sx={{ display: "flex", mt: '20px', justifyContent: 'center' }}>
//         <img
//           alt="Amplify"
//           src="/image/logo2.png"
//           style={{ maxWidth: '150px', width: '100%' }}
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
//             <Typography variant="h4" sx={{ marginTop: '15px', marginBottom: '25px', fontFamily: 'plus jakarta sans', fontSize: '32px', color: '#000000',fontWeight:700,fontFamily:'Plus Jakarta Sans',lineHeight:'48px' }}>
//               General Bussiness Information
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
//                 label="First Name"
//                 name="fname"
//                 type='text'
//                 value={fname}
//                 onChange={(e) => setFname(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Last Name"
//                 name="lname"
//                 value={lname}
//                 onChange={(e) => setLname(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Phone"
//                 name="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Company Name"
//                 name="cname"
//                 value={companyname}
//                 onChange={(e) => setCompanyname(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Company Website"
//                 name="cwebsite"
//                 value={companywebsite}
//                 onChange={(e) => setCompanywebsite(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               xs={12}
//               md={6}
//             >
//               <TextField
//                 fullWidth
//                 label="Company Address"
//                 name="caddress"
//                 value={companyaddress}
//                 onChange={(e) => setCompanyaddress(e.target.value)}
//               />
//             </Grid>


//           </Grid>
//           <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end', }}>
//             <Button sx={{ fontFamily:'inter', color: '#111927',textTransform:'capitalize',fontWeight:600 ,fontSize:'16px',lineHeight:'24px',borderRadius:'16px' }}
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
//     </Box >
//   )
// };
// export default GeneralInfo

'use client'
import React from 'react';
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
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true);
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
                setMessage(error.response?.data?.message || 'Company info already exists.');
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false after API call (whether success or error)
            });

    }
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Box sx={{ display: "flex", mt: '20px', justifyContent: 'center' }}>
                <img
                    alt="Amplify"
                    src="/image/logo2.png"
                    style={{ maxWidth: '150px', width: '100%' }}
                />
            </Box>

            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '4',
                borderRadius: '16px',
                marginTop: '30px',
                backgroundColor: "#ffff",
                '@media (min-width: 768px)': {
                    width: '50%', // Change width to 50% on desktop screens
                    mt: '50px', // Add top margin on desktop screens
                    px: 5,
                    py: 3,
                }
            }}>
                <Box sx={{
                    p: 2
                }}>

                    <form onSubmit={handleSubmit}>
                        {message}
                        <Typography
                            color="error"
                            sx={{ mt: 1, marginBottom: '15px' }}
                            variant="body1"
                        >

                        </Typography>
                        <div>
                            <Typography variant="h4" sx={{ marginTop: '15px', marginBottom: '25px', fontFamily: 'plus jakarta sans', fontSize: '32px', color: '#000000', fontWeight: 700, fontFamily: 'Plus Jakarta Sans', lineHeight: '48px' }}>
                                General Business Information
                            </Typography>
                        </div>
                        <Grid
                            container
                            spacing={{ xs: 1, md: 3 }}
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
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                            <Button
                                sx={{
                                    fontFamily: 'inter',
                                    color: '#111927',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    borderRadius: '16px',
                                    mb: { xs: 2, md: 0 } // Adjusted margin bottom for mobile and tablet
                                }}
                                type="reset"
                            >
                                Cancel
                            </Button>
                            <Button
                                sx={{
                                    ml: { xs: 0, md: 2 }, // Adjusted margin left for mobile and tablet
                                    px: { xs: 1, md: 2 }, // Adjusted padding for mobile and tablet
                                    py: { xs: 1, md: 2 }, // Adjusted padding for mobile and tablet
                                    color: '#FFFFFF',
                                    backgroundColor: '#2970FF',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    borderRadius: '12px',
                                    mb: { xs: 2, md: 0 } // Adjusted margin bottom for mobile and tablet
                                }}
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
    )
};

export default GeneralInfo;
