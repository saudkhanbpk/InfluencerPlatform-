"use client";
import  {useEffect,React, useState } from "react";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Fullscreen } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TimelineIcon from "@mui/icons-material/Timeline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VerifiedIcon from "@mui/icons-material/Verified";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { FaTiktok, FaUserCheck } from "react-icons/fa";
import BorderHorizontalSharpIcon from '@mui/icons-material/BorderHorizontalSharp';
import { space } from "postcss/lib/list";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import EightteenMpOutlinedIcon from "@mui/icons-material/EightteenMpOutlined";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import WebIcon from '@mui/icons-material/Web';
import Image from "next/image";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import Jobs from "./jobposted/page";
import Sidebar from "../sidebar/page";
import Navbar from "../navbar/page";
import { useTheme } from '@mui/material';
import {baseUrl} from "../BaseUrl"
import axios from "axios";

const styles = {
  coverImageContainer: {
    borderRadius: '20px',
    width: '100%',
    maxWidth: '700px', // Limit the maximum width of the image on larger screens
    margin: '0 auto', // Center the image on larger screens
  },
  coverImage: {
    width: '100%',
    height: 'auto',
  },
  aboutAndSocialMediaContainer: {
    display: 'block', // Default display as block
    '@media (min-width: 600px)': {
      display: 'flex', // Change to flex on larger screens
      justifyContent: 'space-between', // Add space between "About" and "Social Media Links" on larger screens
    },
  },
  aboutContainer: {
    marginBottom: '25px',
    '@media (min-width: 600px)': {
      width: '70%', // Adjust the width of "About" on larger screens
    },
  },
  socialMediaLinksContainer: {
    display: 'block', // Default display as block
    // marginTop:'1px',
    // borderTopLeftRadius:'1px solid red',
  paddingLeft:'10px',
    '@media (min-width: 600px)': {
      display: 'block', // Change to flex on larger screens
      justifyContent: 'space-between', // Add space between social media links on larger screens
      width: '30%', // Adjust the width of "Social Media Links" on larger screens
    },
  },
  socialMediaLink: {
    color: '#111927',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '25px',
    letterSpacing: '0px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  socialMediaIcon: {
    marginRight: '2px',
  },
};
const useStyles = makeStyles((theme) => ({
  profileImageContainer: {
    // width:'auto',
    textAlign: 'center',
    marginBottom: 2, // Add some spacing at the bottom
  },
  profileImage: {
    width: '173px', // Initial width for larger screens
    height: '173px', // Initial height for larger screens
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto', // Center the image
    '@media (max-width: 600px)': {
      width: '100px', // Adjust width for smaller screens
      height: '100px', // Adjust height for smaller screens
      
    },
  },
  imageclass: {
    '@media (max-width: 600px)': {
      width: '55px', // Adjust width for smaller screens
      height: '55px', // Adjust height for smaller screens
      marginRight:'0px',
      marginTop:'17px'
    },
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    // margin:'5px',
    mx: "25px",
  },
  card: {
    backgroundColor: "white",
    borderBottom: "4px solid #ddd",
    // borderRadius: '8px',
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    width: "327px",
    height: "190px",
    borderRadius: "16px",
    marginLeft: "35px",
    marginRight: "55px",
    marginTop: "35px",
  },
  greenBox: {
    flex: "1",
    backgroundColor: "white",
    padding: "6px",
    borderRadius: "8px",
    color: "black",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    flexShrink: "0",
    paddingRight: "26px",
  },
  lineChart: {
    width: "100%",
    height: "auto",
  },
  container: {
    position: "relative",
    height: 300,
    width: Fullscreen,
    margin: 5,
  },
  coverImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: ["2px","80px"],
    borderTopRightRadius: ["2px","80px"],
  },
  profileImage: {
    // position: 'absolute',
    // top: '110%',
    // left: '6%',
    // transform: 'translate(-50%, -50%)',
    borderRadius: "50%",
    border: "5px solid primary",
    height: 120,
    width: 120,
    marginTop: "-40px",
    marginLeft: "30px",
    overflow: "hidden",
    zIndex: "1",
    '@media (max-width: 600px)': {
    marginLeft: "0px",
    width:'90px'

    }
  },
  profileImageImg: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  profilename: {
    // position: 'absolute',
    // top: '100%',
    // left: '10%',
    // transform: 'translate(-50%, -50%)',
    // borderRadius: '50%',
    // border: "5px solid black",
    height: 155,
    width: "90%",
    overflow: "hidden",
  },
}));

const BrandProfile = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [overview, setOverview] = useState(0);
  const [data, setData] = useState([]);
  const [generaldata, setGeneraldata] = useState([]);
  const [userId, setUserId] = useState(null);
 
  const getAllData = () => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    // If user data is available in local storage, extract the _id and set the state
    if (storedUserData) {
      setUserId(storedUserData._id);
    }
   
    let user = JSON.parse(localStorage.getItem('user'))
    // console.log("user...", user._id)
    // Fetch data from the API endpoint
    const apiUrl = `${baseUrl}/api/social/${user._id}`;
// console.log(apiUrl)
axios.post(apiUrl)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
    // fetch(apiUrl).then((response) => response.json())
    //   .then((result) => console.log("result", result))
    //   .catch((error) => console.error('Error fetching data:', error));
  }
  const generalData = () => {
    
   
    let user = JSON.parse(localStorage.getItem('user'))
    // console.log("user...", user._id)
    // Fetch data from the API endpoint
    const apiUrl = `${baseUrl}/api/general/${user._id}`;
// console.log(apiUrl)
axios.get(apiUrl)
      .then((response) => setGeneraldata(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }
  useEffect(() => {
getAllData();
generalData();
  }, []);
  console.log("user id", userId)
  console.log("storedUserData", data?.social?.blog)
  console.log("Generaldata........", generaldata)
  // console.log("kdfjksdj", baseUrl)

  const handledata = (num) => {
    setOverview(num);
  };
  return (
    <Box sx={{display:'flex'}}>
    {/* <Sidebar/> */}
    <Box sx={{width: "100%"}}>
    <Navbar/>
    <Box className={classes.container} sx={{ position: "relative" }}>
    <Box> 
    <Box sx={{position: "relative"}}>
    <Image
        width={700}
        height={400}
        src="/image/bg.png"
        alt="Cover Image"
        className={classes.coverImage}
      />
       <Box sx={{
          borderRadius: "20px",
          color: "black",
          backgroundColor: "#E0E0E0",
          top: ["65%", "80%"],
          right: ["7px","20px"],
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "13px",
          position: "absolute",

        }}>
        
      <Button
        variant="small"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#E0E0E0", 
          fontSize: ["8px","13px"],
        }}
      >
        Change Cover
      </Button>
      </Box>
    </Box>
     
      <Box>
        <Box
          sx={{
            // border: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{
            display:'flex',
          }} className={classes.profileImageContainer}>
      <Box className={classes.profileImage}>
        <Image
          src="/image/brandprofile.png"
          width={100}
          height={100}
          alt="Profile Image"
          className={classes.imageclass}
        />
      </Box>
      <Box sx={{
            mt:[0,2],
            mr:[1,0],

      }}>
          <Box sx={{mr:[6,0] }}>
          <Typography sx={{ color: "#2970FF", fontWeight: 600,}}>
            Canada Goose
          </Typography>
          </Box>
          <Typography
            variant="overline"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "inter",
              color: "#6C737F",
              lineHeight: "30px",
              pt: 1,
              mb: 1,
            }}
          >
            Established since 2010
          </Typography>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F9FAFF",
              borderRadius: "10px",
              padding: "5px",
              width: "100%",
              pl: "5px",
            }}
          >
            <LocationOnOutlinedIcon
              sx={{
                pt: "2",
                fontSize: "18px",
                color: "#2970FF",
              }}
            />
            <Typography
              sx={{
                color: "#2970FF",
                backgroundColor: "#F9FAFF",
                borderRadius: "10px",
                mt: 0,
                pl: "12px",
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "inter",
                paddingBottom: "3px",
              }}
            >
              Toronto Canada
            </Typography>
          </Box>
        </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"], // Column on mobile, Row on desktop
        mt: [1, 0],
        mb: [5, 0],
        mr: [4, 0], // Margin top on mobile, no margin on desktop
        justifyContent: "space-between", // Space between items
        alignItems: "center", // Center items horizontally
      }}
    >
      {/* Left side content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: ["100%", "30%"], // Full width on mobile, 30% width on desktop
          p: [0,2],
        }}
      >
        
      </Box>

      {/* Right side content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"], // Column on mobile, Row on desktop
          alignItems: ["center", "flex-start"], // Center items horizontally on mobile, start on desktop
          mt: [13, 0], // Margin top on mobile, no margin on desktop
          ml:[-18,0]
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            mb: [3, 0], // Margin bottom on mobile, no margin on desktop
          ml:[-12,0],

          }}
        >
          <Button variant="outlined" color="primary">
            <FavoriteIcon sx={{ mr: 1 }} /> Favorite
          </Button>
        </Box>
        <Box
          sx={{
            alignItems: "center",
          ml:[-12,2],
width:"190px"
          }}
        >
          <Button variant="contained" color="primary">
            <QuestionAnswerIcon sx={{ mr: 1 }} /> Send Message
          </Button>
          <Box sx={{ pt: 3, height: "20px", color: "#111927",
          ml:[-1,0]
           }}>
            
            <Box sx={{ml:[5,0]}}>
            <Typography
              sx={{
                fontSize: "18px",
                pb: 1,
                width: "111px",
                fontWeight: 600,
                fontFamily: "inter",
                color: "#6C737F",
                lineHeight: "21.78px",
              }}
            >
              Quick Links
            </Typography>

            </Box>
            <Box sx={{ display: "flex",
             }}>
              <InstagramIcon sx={{ color: "#FF004F", mx: 1 }} />{" "}
              <FaTiktok sx={{ mx: 1, mt: 2 }} />{" "}
              <YouTubeIcon sx={{ color: "#FF004F", mx: 1 }} />{" "}
              <TwitterIcon sx={{ color: "#1DA1F2", mx: 1 }} />{" "}
              <PinterestIcon sx={{ color: "#EE0505", mx: 1 }} />{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
        </Box>
      </Box>
      <Box sx={{  display:"flex", mx: "13px",mt:'10px'}}>
        <Box sx={{mx: "13px", }}>
          <Typography sx={{'&:hover': { cursor: 'pointer'}}} className={`${overview === 0 && "youtubestats"}  `} onClick={()=>handledata(0)}>
            Overview
          </Typography>
        </Box>
          <Box>
          <Typography sx={{'&:hover': { cursor: 'pointer'}}}  className={`${overview === 1 && "youtubestats"}  `} onClick={()=>handledata(1)}>
            Jobs Posted
          </Typography>
          </Box>
      </Box>
    
    </Box>
      <Divider></Divider>
      {
  overview === 0 && 
  <Box sx={{ padding: '20px', '@media (max-width: 600px)': { padding: '10px' } }}>
      {/* About and Social Media Links */}
      <Box sx={styles.aboutAndSocialMediaContainer}>
        {/* About */}
        <Box sx={styles.aboutContainer}>
          <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                fontFamily: 'Inter',
              }}
            >
              About
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '25px' }}>
            <Typography
              variant="body1"
              sx={{
                lineHeight: '32px',
                color: '#6C737F',
                fontWeight: 500,
                fontSize: '18px',
                fontFamily: 'Inter',
              }}
            >
              Canada Goose is a premium Canadian clothing brand that was founded in 1957. The brand is known for its high-quality and stylish outerwear that is designed to withstand extreme weather conditions. The company initially started as a manufacturer of woolen vests, raincoats, and snowmobile suits for Canadian Rangers and police officers. However, in recent years, Canada Goose has gained widespread popularity as a luxury fashion brand and is now considered a status symbol.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
        <Box sx={{ p: 1, pl: 0, pr: '10px', borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography
            sx={{
              color: '#111927',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AccountCircleIcon sx={{ mr: 2 }} /> www.canadagoose.com/shop
          </Typography>
        </Box>

        <Box sx={{ p: 1, pl: 0, pr: '10px', borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography
            sx={{
              color: '#111927',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PhoneOutlinedIcon sx={{ mr: 2 }} /> +92313524856
          </Typography>
        </Box>

        <Box sx={{ p: 1, pl: 0, pr: '10px', borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography
            sx={{
              color: '#111927',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HomeOutlinedIcon sx={{ mr: 2 }} /> Toronto, Ontario, Canada
          </Typography>
        </Box>

        <Box sx={{ p: 1, pl: 0, pr: '10px', borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography
            sx={{
              color: '#111927',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <WebIcon sx={{ mr: 2 }} /> katarina.smith@devias.io
          </Typography>
        </Box>

        <Box sx={{ p: 1, pl: 0, pr: '10px', borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography
            sx={{
              color: '#111927',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '25px',
              letterSpacing: '0px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <BorderHorizontalSharpIcon sx={{ mr: 2 }} /> 25-75
          </Typography>
        </Box>
      </Box>
        </Box>

        {/* Social Media Links */}
        <Box sx={styles.socialMediaLinksContainer}>
          <Box sx={{ my: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                fontFamily: 'Inter',
              }}
            >
              Social Media Links
            </Typography>
          </Box>

          <Box sx={{ p: 1, pl: 0, pr: '10px', ...styles.socialMediaLink }}>
            <InstagramIcon sx={{ ...styles.socialMediaIcon, color: '#F90000' }} /> www.instagram.com/therock
          </Box>
          <Divider />

          <Box sx={{ p: 1, pl: 0, pr: '10px', ...styles.socialMediaLink }}>
            <YouTubeIcon sx={{ ...styles.socialMediaIcon, color: '#F90000' }} /> www.youtube.com/therock
          </Box>
          <Divider />

          <Box sx={{ p: 1, pl: 0, pr: '10px', ...styles.socialMediaLink }}>
            <TwitterIcon sx={{ ...styles.socialMediaIcon, color: '#1DA1F2' }} /> www.twitter.com/therock
          </Box>
          <Divider />

          <Box sx={{ p: 1, pl: 0, pr: '10px', ...styles.socialMediaLink }}>
            <PinterestIcon sx={{ ...styles.socialMediaIcon, color: '#F90000' }} /> www.pinterest.com/therock
          </Box>
          <Divider />
          
        </Box>
        
      </Box>

      {/* ... (rest of the code) ... */}
    </Box>
      
      } 
      {
  overview === 1 && <Jobs />}

      <Divider sx={{ mt: "80px" }}></Divider>

     
      <Divider></Divider>
    </Box>

    </Box>

    </Box>
  );
};

export default BrandProfile;