// "use client";
// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import Link from "next/link";
// import { Box, Button, Divider } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { Fullscreen } from "@mui/icons-material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import { FaTiktok, FaUserCheck } from "react-icons/fa";
// import BorderHorizontalSharpIcon from "@mui/icons-material/BorderHorizontalSharp";
// import { space } from "postcss/lib/list";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
// import EightteenMpOutlinedIcon from "@mui/icons-material/EightteenMpOutlined";
// import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
// import WebIcon from "@mui/icons-material/Web";
// import Image from "next/image";
// import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
// import GroupSharpIcon from "@mui/icons-material/GroupSharp";
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';


// const useStyles = makeStyles((theme) => ({
//   cardContainer: {
//     display: "flex",
//     width: "100%",
//     // margin:'5px',
//     mx: "25px",
//   },
//   card: {
//     backgroundColor: "white",
//     borderBottom: "4px solid #ddd",
//     // borderRadius: '8px',
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//     padding: "16px",
//     width: "327px",
//     height: "190px",
//     borderRadius: "16px",
//     marginLeft: "35px",
//     marginRight: "55px",
//     marginTop: "35px",
//   },
//   greenBox: {
//     flex: "1",
//     backgroundColor: "white",
//     padding: "6px",
//     borderRadius: "8px",
//     color: "black",
//     display: "flex",
//     flexDirection: "column",
//   },
//   imageContainer: {
//     flexShrink: "0",
//     paddingRight: "26px",
//   },
//   lineChart: {
//     width: "100%",
//     height: "auto",
//   },
//   container: {
//     position: "relative",
//     height: 300,
//     width: Fullscreen,
//     margin: 5,
//   },
//   coverImage: {
//     height: "100%",
//     width: "100%",
//     objectFit: "cover",
//     borderTopLeftRadius: "80px",
//     borderTopRightRadius: "80px",
//   },
//   profileImage: {
//     // position: 'absolute',
//     // top: '110%',
//     // left: '6%',
//     // transform: 'translate(-50%, -50%)',
//     borderRadius: "50%",
//     border: "5px solid primary",
//     height: 120,
//     width: 120,
//     marginTop: "-40px",
//     marginLeft: "30px",
//     overflow: "hidden",
//   },
//   profileImageImg: {
//     height: "100%",
//     width: "100%",
//     objectFit: "cover",
//   },

//   profilename: {
//     // position: 'absolute',
//     // top: '100%',
//     // left: '10%',
//     // transform: 'translate(-50%, -50%)',
//     // borderRadius: '50%',
//     // border: "5px solid black",
//     height: 155,
//     width: "90%",
//     overflow: "hidden",
//   },
// }));
// const Jobs = () => {
//   const classes = useStyles();

//   return (
//     <Box>
//       <Box sx={{ display: "flex",mb:'20px'}}>
//         <Box sx={{ borderRight: "1px solid #F2F4F7", p: 1, pr: 3 , width: "100%"}}>
//           <Box sx={{ display: "flex", m: 2 }}>
//             <Box>
//               <Image
//                 src="/image/brandprofile.png"
//                 width={35}
//                 height={35}
//               ></Image>
//             </Box>

//             <Box sx={{ ml: "10px" }}>
//               <Box>
//                 <Typography
//                   variant="H6"
//                   sx={{
//                     fontWeight: 700,
//                     fontSize: "18px",
//                     fontFamily: "Plus Jakarta Sans",
//                     lineHeight: "21.6 px",
//                   }}
//                 >
//                   Canada Goose
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "22px",
//                     pt: 0,
//                     mb: 0,
//                   }}
//                 >
//                   Established since 2010
//                 </Typography>
//               </Box>

//              <Box sx={{display:'flex'}}>
            
//              <Box sx={{pt:1}}>
//             <PeopleOutlinedIcon sx={{fontSize:"28px"}}/>
//             </Box>

//             <Box sx={{pt:1,ml:2}}>
//             <Typography
//                   variant="overline"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "30px",
//                     pt: 3,
//                     mb: 1,
//                     ml:'3px'
//                   }}
//                 >
//                   25-75
//             </Typography>
//             </Box>

//             <Box sx={{pt:1,ml:3}}>
//             <VerifiedOutlinedIcon />
//             </Box>

//             <Box sx={{pt:1,ml:2}}>
//             <Typography
//                   variant="overline"
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#15B79E",
//                     lineHeight: "30px",
//                     pt: 3,
//                     mb: 1,
//                     ml:'1px'
//                   }}
//                 >
//                   VERIFIED
//             </Typography>
//             </Box>


//              </Box> 



//             </Box>

            
//           </Box>

//           <Box sx={{backgroundColor:'white',boxShadow:'1',borderRadius:'10px',ml:1,p: 2,}}>
//             <Box>
//             <Typography
                  
//                   sx={{
//                     fontSize: "16px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#111927",
//                     lineHeight: "25px",
                                  
//                   }}
//                 >
//                   Instagram Influencer for a clothing brand who can market our products for a week
//                 </Typography>
//             </Box>

//             <Box sx={{display:'flex',justifyContent:'space-between'}}>
//             <Box sx={{display:'flex'}}>
//                 <Box>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                   Budget • $400- $600 
//             </Typography>
//                 </Box>
//                 <Box sx={{ml:'30px'}}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                   Job type • Content creation & Shoutouts
//             </Typography>
//                 </Box>
//                 <Box sx={{ml:'30px'}}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                 Payment type • Paid
//             </Typography>
//                 </Box>
//             </Box>
//       <Box sx={{display:'flex'}}>
//     <Typography variant="caption" sx={{
//                     fontSize: "12px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "19px",
//                     mt:1,mr:2
                                  
//                   }}>5d Ago</Typography>
//     <Button sx={{color:'#2970FF', fontSize: "14px",
//                     fontWeight: 600,
//                     lineHeight: "24px",
//                     fontFamily: "Inter",backgroundColor:'white',}}>Apply</Button>
//      </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Box sx={{ display: "flex",mb:'20px'}}>
//         <Box sx={{ borderRight: "1px solid #F2F4F7", p: 1, pr: 3 , width: "100%"}}>
//           <Box sx={{ display: "flex", m: 2 }}>
//             <Box>
//               <Image
//                 src="/image/brandprofile.png"
//                 width={35}
//                 height={35}
//               ></Image>
//             </Box>

//             <Box sx={{ ml: "10px" }}>
//               <Box>
//                 <Typography
//                   variant="H6"
//                   sx={{
//                     fontWeight: 700,
//                     fontSize: "18px",
//                     fontFamily: "Plus Jakarta Sans",
//                     lineHeight: "21.6 px",
//                   }}
//                 >
//                   Canada Goose
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "22px",
//                     pt: 0,
//                     mb: 0,
//                   }}
//                 >
//                   Established since 2010
//                 </Typography>
//               </Box>

//              <Box sx={{display:'flex'}}>
            
//              <Box sx={{pt:1}}>
//             <PeopleOutlinedIcon sx={{fontSize:"28px"}}/>
//             </Box>

//             <Box sx={{pt:1,ml:2}}>
//             <Typography
//                   variant="overline"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "30px",
//                     pt: 3,
//                     mb: 1,
//                     ml:'3px'
//                   }}
//                 >
//                   25-75
//             </Typography>
//             </Box>

//             <Box sx={{pt:1,ml:3}}>
//             <VerifiedOutlinedIcon />
//             </Box>

//             <Box sx={{pt:1,ml:2}}>
//             <Typography
//                   variant="overline"
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#15B79E",
//                     lineHeight: "30px",
//                     pt: 3,
//                     mb: 1,
//                     ml:'1px'
//                   }}
//                 >
//                   VERIFIED
//             </Typography>
//             </Box>


//              </Box> 



//             </Box>

            
//           </Box>

//           <Box sx={{backgroundColor:'white',boxShadow:'1',borderRadius:'10px',ml:1,p: 2,}}>
//             <Box>
//             <Typography
                  
//                   sx={{
//                     fontSize: "16px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#111927",
//                     lineHeight: "25px",
                                  
//                   }}
//                 >
//                   Instagram Influencer for a clothing brand who can market our products for a week
//                 </Typography>
//             </Box>

//             <Box sx={{display:'flex',justifyContent:'space-between'}}>
//             <Box sx={{display:'flex'}}>
//                 <Box>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                   Budget • $400- $600 
//             </Typography>
//                 </Box>
//                 <Box sx={{ml:'30px'}}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                   Job type • Content creation & Shoutouts
//             </Typography>
//                 </Box>
//                 <Box sx={{ml:'30px'}}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                 Payment type • Paid
//             </Typography>
//                 </Box>
//             </Box>
//       <Box sx={{display:'flex'}}>
//     <Typography variant="caption" sx={{
//                     fontSize: "12px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "19px",
//                     mt:1,mr:2
                                  
//                   }}>5d Ago</Typography>
//     <Button sx={{color:'#2970FF', fontSize: "14px",
//                     fontWeight: 600,
//                     lineHeight: "24px",
//                     fontFamily: "Inter",backgroundColor:'white',}}>Apply</Button>
//      </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Box sx={{ display: "flex",mb:'20px'}}>
//         <Box sx={{ borderRight: "1px solid #F2F4F7", p: 1, pr: 3 , width: "100%"}}>
//           <Box sx={{ display: "flex", m: 2 }}>
//             <Box>
//               <Image
//                 src="/image/brandprofile.png"
//                 width={35}
//                 height={35}
//               ></Image>
//             </Box>

//             <Box sx={{ ml: "10px" }}>
//               <Box>
//                 <Typography
//                   variant="H6"
//                   sx={{
//                     fontWeight: 700,
//                     fontSize: "18px",
//                     fontFamily: "Plus Jakarta Sans",
//                     lineHeight: "21.6 px",
//                   }}
//                 >
//                   Canada Goose
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "22px",
//                     pt: 0,
//                     mb: 0,
//                   }}
//                 >
//                   Established since 2010
//                 </Typography>
//               </Box>

//              <Box sx={{display:'flex'}}>
            
//              <Box sx={{pt:1}}>
//             <PeopleOutlinedIcon sx={{fontSize:"28px"}}/>
//             </Box>

//             <Box sx={{pt:1,ml:2}}>
//             <Typography
//                   variant="overline"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "30px",
//                     pt: 3,
//                     mb: 1,
//                     ml:'3px'
//                   }}
//                 >
//                   25-75
//             </Typography>
//             </Box>

//             <Box sx={{pt:1,ml:3}}>
//             <VerifiedOutlinedIcon />
//             </Box>

//             <Box sx={{pt:1,ml:2}}>
//             <Typography
//                   variant="overline"
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: 600,
//                     fontFamily: "Inter",
//                     color: "#15B79E",
//                     lineHeight: "30px",
//                     pt: 3,
//                     mb: 1,
//                     ml:'1px'
//                   }}
//                 >
//                   VERIFIED
//             </Typography>
//             </Box>


//              </Box> 



//             </Box>

            
//           </Box>

//           <Box sx={{backgroundColor:'white',boxShadow:'1',borderRadius:'10px',ml:1,p: 2,}}>
//             <Box>
//             <Typography
                  
//                   sx={{
//                     fontSize: "16px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#111927",
//                     lineHeight: "25px",
                                  
//                   }}
//                 >
//                   Instagram Influencer for a clothing brand who can market our products for a week
//                 </Typography>
//             </Box>

//             <Box sx={{display:'flex',justifyContent:'space-between'}}>
//             <Box sx={{display:'flex'}}>
//                 <Box>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                   Budget • $400- $600 
//             </Typography>
//                 </Box>
//                 <Box sx={{ml:'30px'}}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                   Job type • Content creation & Shoutouts
//             </Typography>
//                 </Box>
//                 <Box sx={{ml:'30px'}}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "20px",
                    
//                   }}
//                 >
//                 Payment type • Paid
//             </Typography>
//                 </Box>
//             </Box>
//       <Box sx={{display:'flex'}}>
//     <Typography variant="caption" sx={{
//                     fontSize: "12px",
//                     fontWeight: 500,
//                     fontFamily: "Inter",
//                     color: "#6C737F",
//                     lineHeight: "19px",
//                     mt:1,mr:2
                                  
//                   }}>5d Ago</Typography>
//     <Button sx={{color:'#2970FF', fontSize: "14px",
//                     fontWeight: 600,
//                     lineHeight: "24px",
//                     fontFamily: "Inter",backgroundColor:'white',}}>Apply</Button>
//      </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Jobs;

import Image from 'next/image';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Jobs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '20px', '@media (max-width: 600px)': { padding: '10px' } }}>
      {/* Individual influencer opportunity entries */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <Image src="/image/brandprofile.png" width={35} height={35} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                  fontFamily: 'Plus Jakarta Sans',
                  lineHeight: '21.6px',
                }}
              >
                Canada Goose
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '22px',
                  pt: 0,
                  mb: 0,
                }}
              >
                Established since 2010
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ mr: 2 }}>
              <PeopleOutlinedIcon sx={{ fontSize: '28px' }} />
            </Box>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '30px',
                }}
              >
                25-75
              </Typography>
            </Box>

            <Box sx={{ ml: 3 }}>
              <VerifiedOutlinedIcon />
            </Box>

            <Box sx={{ ml: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#15B79E',
                  lineHeight: '30px',
                }}
              >
                VERIFIED
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: 'white', boxShadow: '1', borderRadius: '10px', mt: 2 }}>
          <Box sx={{ padding: '16px' }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: 'Inter',
                color: '#111927',
                lineHeight: '25px',
              }}
            >
              Instagram Influencer for a clothing brand who can market our products for a week
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '20px',
                  mb: 1,
                }}
              >
                Budget • $400- $600
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '20px',
                  mb: 1,
                }}
              >
                Job type • Content creation & Shoutouts
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '20px',
                }}
              >
                Payment type • Paid
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '19px',
                  mt: 1,
                  mr: 2,
                }}
              >
                5d Ago
              </Typography>
              <Button sx={{ color: '#2970FF', fontSize: '14px', fontWeight: 600, lineHeight: '24px', fontFamily: 'Inter', backgroundColor: 'white' }}>
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobs;
