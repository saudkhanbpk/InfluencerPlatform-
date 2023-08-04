"use client";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Fullscreen } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WebIcon from "@mui/icons-material/Web";
import BorderHorizontalSharpIcon from "@mui/icons-material/BorderHorizontalSharp";

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
import { space } from "postcss/lib/list";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import EightteenMpOutlinedIcon from "@mui/icons-material/EightteenMpOutlined";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import Image from "next/image";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import Youtube from "./youtubestats/page";
import Tiktokstats from "./tiktokstats/page";
import Twitterstats from "./twitterstats/page";
import Pintereststats from "./pinterest/page";
import Sidebar from "../sidebar/page";
import Navbar from "../navbar/page";
import {baseUrl} from "../BaseUrl"
import axios from "axios";

const styles = {
    coverImageContainer: {
      borderRadius: "20px",
      width: "100%",
      maxWidth: "700px", // Limit the maximum width of the image on larger screens
      margin: "0 auto", // Center the image on larger screens
    },
    // coverImage: {
    //   width: "100%",
    //   height: "auto",
    // },
    aboutAndSocialMediaContainer: {
      display: "block", // Default display as block
      "@media (min-width: 600px)": {
        display: "flex", // Change to flex on larger screens
        justifyContent: "space-between", // Add space between "About" and "Social Media Links" on larger screens
      },
    },
    aboutContainer: {
      marginBottom: "25px",
      "@media (min-width: 600px)": {
        width: "70%", // Adjust the width of "About" on larger screens
      },
    },
    socialMediaLinksContainer: {
      display: "block", // Default display as block
      // marginTop:'1px',
      // borderTopLeftRadius:'1px solid red',
      paddingLeft: "10px",
      "@media (min-width: 600px)": {
        display: "block", // Change to flex on larger screens
        justifyContent: "space-between", // Add space between social media links on larger screens
        width: "30%", // Adjust the width of "Social Media Links" on larger screens
        borderLeft: "1px solid #F2F4F7",
        paddingLeft: "20px",
      },
    },
    socialMediaLink: {
      color: "#111927",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "25px",
      letterSpacing: "0px",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
    },
    socialMediaIcon: {
      marginRight: "2px",
    },
  coverImageContainer: {
    borderRadius: "20px",
    width: "100%",
    maxWidth: "700px", // Limit the maximum width of the image on larger screens
    margin: "0 auto", // Center the image on larger screens
  },
  // coverImage: {
  //   width: "100%",
  //   height: "auto",
  // },
  aboutAndSocialMediaContainer: {
    display: "block", // Default display as block
    "@media (min-width: 600px)": {
      display: "flex", // Change to flex on larger screens
      justifyContent: "space-between", // Add space between "About" and "Social Media Links" on larger screens
    },
  },
  aboutContainer: {
    marginBottom: "25px",
    "@media (min-width: 600px)": {
      width: "70%", // Adjust the width of "About" on larger screens
    },
  },
  socialMediaLinksContainer: {
    display: "block", // Default display as block
    // marginTop:'1px',
    // borderTopLeftRadius:'1px solid red',
    paddingLeft: "10px",
    "@media (min-width: 600px)": {
      display: "block", // Change to flex on larger screens
      justifyContent: "space-between", // Add space between social media links on larger screens
      width: "30%", // Adjust the width of "Social Media Links" on larger screens
      borderLeft: "1px solid #F2F4F7",
      paddingLeft: "20px",
    },
  },
  socialMediaLink: {
    color: "#111927",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "25px",
    letterSpacing: "0px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  socialMediaIcon: {
    marginRight: "2px",
  },
};

const useStyles = makeStyles((theme) => ({
    profileImageContainer: {
      // width:'auto',
      textAlign: "center",
      marginBottom: 2, // Add some spacing at the bottom
    },
    profileImage: {
      width: "173px", // Initial width for larger screens
      height: "173px", // Initial height for larger screens
      borderRadius: "50%",
      overflow: "hidden",
      px:'10px',
      margin: "0 auto", // Center the image
      "@media (max-width: 600px)": {
        width: "170px", // Adjust width for smaller screens
        height: "170px", // Adjust height for smaller screens
        marginLeft:'15px'
      },
    },
    imageclass: {
      "@media (max-width: 600px)": {
        width: "55px", // Adjust width for smaller screens
        height: "55px", // Adjust height for smaller screens
        marginRight: "10px",
        marginLeft:'15px',
        marginTop: "17px",

      },
    },
    
    
    
    imageContainer: {
      flexShrink: "0",
      paddingLeft: "20px",
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
      borderTopLeftRadius: ["20px","80px"],
      borderTopRightRadius:["20px","80px"],
      },
    
    profileImageImg: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      
    },
    greenBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: ['5px','1px'],
      marginLeft: ['6px','0px'],

      '& p': {
        margin: '6px',
        textAlign: 'center',
      },
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
  
  // cardContainer: {
  //   display: "flex",
  //   width: "100%",
  //   // margin:'5px',
  //   mx: "5px",
  // },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'start',

  },  
  // card: {
  //   backgroundColor: "white",
  //   borderBottom: "4px solid #ddd",
  //   // borderRadius: '8px',
  //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  //   padding: "16px",
  //   width: "327px",
  //   height: "190px",
  //   borderRadius: "16px",
  //   marginLeft: "35px",
  //   marginRight: "55px",
  //   marginTop: "35px",
  // },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ['9px','15px'],
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '397px',
    height: ['155px','226px'],
    '@media (min-width: 600px)': {
      width: 'calc(40% - 10px)',
    },
    '@media (min-width: 900px)': {
      width: 'calc(26% - 16px)',
    },
  },
  
  // imageContainer: {
  //   flexShrink: "0",
  //   paddingRight: "26px",
  // },

  // lineChart: {
  //   width: "100%",
  //   height: "auto",
  // },
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
  
  profileImage: {
    // position: 'absolute',
    // top: '110%',
    // left: '6%',
    // transform: 'translate(-50%, -50%)',
    borderRadius: "50%",
    border: "5px solid primary",
    // height: 120,
    // width: 120,
    marginTop: "-40px",
    // marginLeft: "30px",
    overflow: "hidden",
    zIndex: '1',
    px:'15px',
    py:'1px'

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

const ProfileDashboard = () => {
  const classes = useStyles();
  const [overview , setOverview] = useState(0)
  const [expanded, setExpanded] = useState(true)
  const [data, setData] = useState([]);
  const [generaldata, setGeneraldata] = useState([]);
  const [companyinformations, setCompanyinformations] = useState([]);
  const [userId, setUserId] = useState(null);
 
  const getAllData = () => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData) {
      setUserId(storedUserData._id);
    }
   
    let user = JSON.parse(localStorage.getItem('user'))

    const apiUrl = `${baseUrl}/api/social/${user._id}`;

axios.post(apiUrl)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));

  }
  const generalData = () => {
    
   
    let user = JSON.parse(localStorage.getItem('user'))
   
    const apiUrl = `${baseUrl}/api/general/${user._id}`;

axios.get(apiUrl)
      .then((response) => setGeneraldata(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }
  const company_informations = () => {
    
   
    let user = JSON.parse(localStorage.getItem('user'))
   
    const apiUrl = `${baseUrl}/api/company/${user._id}`;

axios.get(apiUrl)
      .then((response) => setCompanyinformations(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }
  useEffect(() => {
getAllData();
generalData();
company_informations();
  }, []);
  console.log("data........", data)
  console.log("generaldata........", generaldata)
  console.log("companyinformations........", companyinformations)

  const handledata=(num)=>{
    setOverview(num)
  }
  return (
    <Box sx={{display:'flex'}}>
    <Sidebar expanded={expanded}/>
    <Box sx={{width:'100%'}}>
    <Navbar expanded={expanded} setExpanded={setExpanded}/>
    <Box className={classes.container} sx={{ position: "relative" }}>
      {/* <Image
        width={600}
        height={400}
        src="/image/bg.png"
        alt="Cover Image"
        className={classes.coverImage}
      />
      <Button
        variant="small"
        sx={{
          borderRadius: "20px",
          color: "black",
          backgroundColor: "#E0E0E0",
          position: "absolute",
          top: "80%",
          right: "20px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "13px",
        }}
      >
        Change Cover
      </Button>
      <Box>
        <Box
          sx={{
            // border: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box className={classes.profileImage}>
            <img
              src="/image/profile.png"
              alt="Profile Image"
              className={classes.profileImageImg}
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            className={classes.profilename}
          >
            <Box
              sx={{
                display: "flex",
                p: 2,
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <Box sx={{}}>
                <Typography sx={{ color: "#2970FF", fontWeight: 600 }}>
                {generaldata?.general?.fname} <VerifiedIcon sx={{ color: "#2970FF" }} />
                </Typography>
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
                  SOCIAL MEDIA INFLUENCER
                </Typography>
                <Typography
                  sx={{
                    color: "#2970FF",
                    backgroundColor: "#F9FAFF",
                    borderRadius: "10px",
                    mt: 1,
                    p: 1,
                    fontSize: "13px",
                    fontWeight: 400,
                    fontFamily: "inter",
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ mx: 1, fontSize: "18px", mb: 1 }}
                  />{" "}
                     {generaldata?.general?.companyaddress}

                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  p: 1,
                  height: "53px",
                  width: "33%",
                  mr: 1,
                  border: "2px solid #2970FF",
                  borderRadius: "10px",
                }}
              >
                <Box sx={{ color: "#2970FF" }}>
                  <Typography sx={{ fontSize: "10px" }}>Reach</Typography>
                  <Typography sx={{ fontWeight: "700" }}>500K</Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <TimelineIcon sx={{ fontSize: "34px" }} />
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 3 }}>
              <Box sx={{ color: "red", mx: 2 }}>
                <FavoriteIcon sx={{ fontSize: "35px" }}></FavoriteIcon>
              </Box>
              <Box sx={{ color: "#2970FF", mx: 2 }}>
                <GroupAddIcon sx={{ fontSize: "35px" }} />
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <Button variant="outlined" color="primary">
                  <PersonAddAltIcon sx={{ mr: 1 }} /> Invite to Project
                </Button>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                }}
              >
                <Button variant="contained" color="primary">
                  <QuestionAnswerIcon sx={{ mr: 1 }} /> Send Message
                </Button>
                <Box sx={{ pt: 3, mb: 1, height: "20px", color: "#111927" }}>
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
                  <Box sx={{ display: "flex" }}>
                  <a href={data?.social?.blog} target="_blank" rel="noopener noreferrer">
        <InstagramIcon sx={{ color: "#FF004F", mx: 1 }} />
      </a>
      <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                    <FaTiktok sx={{ mx: 1, mt: 2 }} />{" "}
                    </a>
                    <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon sx={{ color: "#FF004F", mx: 1 }} />{" "}
                    </a>
                    <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon sx={{ color: "#1DA1F2", mx: 1 }} />{" "}
                    </a>
                    <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                    <PinterestIcon sx={{ color: "#EE0505", mx: 1 }} />{" "}
                    </a>
                    
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ mx: "13px",color:'#2970FF'}}>
      <Box sx={{display: "flex"}}>
            <Typography sx={{borderBottom:'1px solid #2970FF',pb:'3px'}}>Overview</Typography>

      </Box>
          </Box> */}
          <Box>
            <Box sx={{ position: "relative" }}> 
              <Image
                width={700}
                height={400}
                src="/image/bg.png"
                alt="Cover Image"
                className={classes.coverImage}
              />
              <Box
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  backgroundColor: "#E0E0E0",
                  top: ["65%", "80%"],
                  right: ["7px", "20px"],
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "13px",
                  position: "absolute",
                }}
              >
                <Button
                  variant="small"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#E0E0E0",
                    fontSize: ["8px", "13px"],
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
                  boxSizing: "border-box",
                  display: ["block", "flex"],

                  // justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                  className={classes.profileImageContainer}
                >
                  <Box sx={{marginLeft:['0px','30px']}} className={classes.profileImage}>
                    <Image
                      src="/image/brandprofile.png"
                      width={100}
                      height={100}
                      alt="Profile Image"
                      className={classes.imageclass}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: ["block", "flex"],
                    }}
                  >
                    <Box
                      sx={{
                        mt: [0, 2],
                        mr: [1, 0],
                      }}
                    >
                      <Box sx={{ mr: [6, 0] }}>
                        <Typography
                          sx={{
                            color: "#2970FF",
                            fontWeight: 700,
                            fontFamily: "Plus Jakarta Sans",
                            fontSize: "22px",
                            lineHeight: "26.4px",
                          }}
                        >
                          {/* Canada Goose */}
                          {generaldata?.general?.fname}
                        </Typography>
                      </Box>
                      <Typography
                        variant="overline"
                        sx={{
                          fontSize: ["9px", "12px"],
                          fontWeight: 600,
                          color: "#6C737F",
                          lineHeight: "30px",
                          letter: "0.5px",
                          pt: 1,
                          mb: 1,
                        }}
                      >
                        SOCIAL MEDIA INFLUENCER
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
                            lineHeight: "15.73px",
                          }}
                        >
                          Toronto Canada
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          p: [1, 1],
                          pb: [2, 1],
                          height: ["23px", "38px"],
                          width: ["60%", "60%"],
                          mr: 1,
                          ml: [2, 5],
                          border: "2px solid #2970FF",
                          borderRadius: "10px",
                          mt:[1,0]
                        }}
                      >
                        <Box sx={{ color: "#2970FF", fontSize: ["14px"] }}>
                          <Typography sx={{ fontSize: "10px" }}>
                            Reach
                          </Typography>
                          <Typography sx={{ fontWeight: "700" }}>
                            500K
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 2 }}>
                          <TimelineIcon
                            sx={{ color: "#00359E", fontSize: "34px" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    // border: "1px solid blue",
                    width: ["100%", "62%"],
                    justifyContent: "end",
                    flexDirection: ["column", "row"], // Column on mobile, Row on desktop
                    mt: [1, 0],
                    mb: [5, 0],
                    mr: [0, 0], // Margin top on mobile, no margin on desktop
                    // Space between items
                    alignItems: "center", // Center items horizontally
                    // width:'100%'
                  }}
                >
                  {/* Left side content */}
                  {/* <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: ["100%", "30%"], // Full width on mobile, 30% width on desktop
                      p: [0, 2],
                    }}
                  ></Box> */}

                  {/* Right side content */}
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "end",
                      flexDirection: ["column", "row"], // Column on mobile, Row on desktop
                      alignItems: ["center", "flex-start"], // Center items horizontally on mobile, start on desktop
                      mt: [0, 0], // Margin top on mobile, no margin on desktop
                      ml: [0, 0],
                    }}
                  >
                    <Box
                      sx={{
                        width: [100, 90],
                        display: ["flex"],
                        mr: [0, 2],
                        color: "red",
                        mx: [0, 2],
                      }}
                    >
                      <FavoriteIcon sx={{ fontSize: "35px" }}></FavoriteIcon>
                      <GroupAddIcon
                        sx={{ color: "#2970FF", fontSize: "35px", mx: 2 }}
                      />
                    </Box>
                    <Box
                      sx={{
                        alignItems: "center",
                        mb: [3, 0], // Margin bottom on mobile, no margin on desktop
                        ml: [0, 0],
                        mt: [2, 0],
                      }}
                    >
                      <Button variant="outlined" color="primary">
                        <FavoriteIcon sx={{ mr: 1 }} /> Favorite
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        alignItems: "center",
                        ml: [0, 2],
                        width: "190px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ ml: 2 }}
                      >
                        <QuestionAnswerIcon sx={{ mr: 1 }} /> Send Message
                      </Button>
                      <Box
                        sx={{
                          pt: 3,
                          height: "20px",
                          color: "#111927",
                          ml: [0, 0],
                        }}
                      >
                        <Box sx={{ ml: [5, 0] }}>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              pb: 1,
                              width: "111px",
                              fontWeight: 600,
                              color: "#6C737F",
                              lineHeight: "21.78px",
                              color: "#111927",
                            }}
                          >
                            Quick links
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
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
            <Box sx={{ display: "flex", mx: "13px", mt: "10px" }}>
              <Box sx={{ mx: "13px", }}>
                <Typography
                  sx={{ color: "#2970FF",borderBottom:'1px solid #2970FF',pb:"7px" , "&:hover": { cursor: "pointer" } }}
                  
                >
                  Overview
                </Typography>
              </Box>
              
            </Box>
          </Box>
      <Divider></Divider>
      {/* <Box sx={{ display: "flex" }}>
        <Box
          sx={{ width: "75%", borderRight: "1px solid #F2F4F7", p: 1, pr: 3 }}
        >
          <Box sx={{ my: 2 }}>
            <Typography
              variant="H6"
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                fontFamily: "Inter",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Biography
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography
              variant="body1"
              sx={{
                lineHeight: "32px",
                color: "#6C737F",
                fontWeight: 500,
                fontSize: "18px",
                fontFamily: "Inter",
                fontFamily: "Inter",
              }}
            >
              {companyinformations?.company?.bio}
            </Typography>
          </Box>
          <Divider></Divider>
          <Box sx={{ display: "flex", marginTop: "30px" }}>
            <Box sx={{ width: "50%", pt: "5", pr: "60px" }}>
              <Box sx={{ p: 1, pl: 0, pr: "10px" }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <AccountCircleIcon sx={{ mr: 2 }} /> The Rock
                </Typography>
              </Box>
              <Divider></Divider>
              <Box sx={{ p: 1, pl: 0, mr: "10px" }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <LanguageOutlinedIcon sx={{ mr: 2 }} /> {generaldata?.general?.companywebsite}
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <PhoneOutlinedIcon sx={{ mr: 2 }} /> {generaldata?.general?.phone}
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <HomeOutlinedIcon sx={{ mr: 2 }} /> {generaldata?.general?.companyaddress}
                </Typography>
              </Box>
              <Divider></Divider>
            </Box>

            <Divider></Divider>

            <Box sx={{ width: "50%", pr: "60px" }}>
              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <LanguageOutlinedIcon sx={{ mr: 2 }} /> Languages:
                  English/Arabic
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <MaleOutlinedIcon sx={{ mr: 2 }} /> Gender: Male
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <EightteenMpOutlinedIcon sx={{ mr: 2 }} /> Age: 52
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color: "#111927",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  <SouthAmericaIcon sx={{ mr: 2 }} /> Ethnicity: Asian
                </Typography>
              </Box>
              <Divider></Divider>
            </Box>
          </Box>
        </Box>
        <Divider></Divider>
        <Box sx={{ width: "25%", pl: 3, p: 1, pr: 3 }}>
          <Box sx={{ my: 2 }}>
            <Typography
              variant="H6"
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                fontFamily: "Inter",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Niche
            </Typography>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgba(99, 102, 241, 0.12)",color:'black', width: "100%" }}
            >
              Clothing
            </Button>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgba(99, 102, 241, 0.12)",color:'black', width: "100%" }}
            >
              Men Fashion
            </Button>
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="H6"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  fontFamily: "Inter",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Social Media links
              </Typography>
            </Box>
            <Box sx={{ p: 1, pl: 0, pr: "10px" }}>
              <Typography
                sx={{
                  color: "#111927",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "25px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                <InstagramIcon sx={{ mr: 2, color: "#F90000" }} />{" "}
                www.instagram.com/therock
              </Typography>
            </Box>
            <Divider></Divider>

            <Box sx={{ p: 1, pl: 0, pr: "10px" }}>
              <Typography
                sx={{
                  color: "#111927",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "25px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                <YouTubeIcon sx={{ mr: 2, color: "#F90000" }} />{" "}
                www.youtube.com/therock
              </Typography>
            </Box>
            <Divider></Divider>

            <Box sx={{ p: 1, pl: 0, pr: "10px" }}>
              <Typography
                sx={{
                  color: "#111927",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "25px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                <TwitterIcon sx={{ mr: 2, color: "#1DA1F2" }} />{" "}
                www.twitter.com/therock
              </Typography>
            </Box>
            <Divider></Divider>

            <Box sx={{ p: 1, pl: 0, pr: "10px" }}>
              <Typography
                sx={{
                  color: "#111927",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "25px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                <PinterestIcon sx={{ mr: 2, color: "#F90000" }} />{" "}
                www.pinterest.com/therock
              </Typography>
            </Box>
            <Divider></Divider>
          </Box>
        </Box>
      </Box> */}

      <Box
              sx={{
                padding: "20px",
                "@media (max-width: 600px)": { padding: "10px" },
              }}
            >
              {/* About and Social Media Links */}
              <Box sx={styles.aboutAndSocialMediaContainer}>
                {/* About */}
                <Box sx={styles.aboutContainer}>
                  <Box
                    sx={{
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "18px",
                        fontFamily: "Inter",
                      }}
                    >
                      About
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "25px" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: "32px",
                        color: "#6C737F",
                        fontWeight: 500,
                        fontSize: "18px",
                        fontFamily: "Inter",
                      }}
                    >
                      Canada Goose is a premium Canadian clothing brand that was
                      founded in 1957. The brand is known for its high-quality
                      and stylish outerwear that is designed to withstand
                      extreme weather conditions. The company initially started
                      as a manufacturer of woolen vests, raincoats, and
                      snowmobile suits for Canadian Rangers and police officers.
                      However, in recent years, Canada Goose has gained
                      widespread popularity as a luxury fashion brand and is now
                      considered a status symbol.
                      {/* {companyinformations?.company?.bio} */}
                    </Typography>
                  </Box>
                  <Divider />
<Box sx={{display: ["block","flex"],gap:'15px'}}>
                  <Box sx={{ width:["100%","45%"],display: "flex", flexDirection: "column", mt: 2 }}>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                        // borderBottom: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AccountCircleIcon sx={{ mr: 2 }} />{" "}
                        www.canadagoose.com/shop
                        {/* {generaldata?.general?.companywebsite} */}
                      </Typography>
                    </Box>
                    
                    <Divider light={true}></Divider>

                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <PhoneOutlinedIcon sx={{ mr: 2 }} /> 
                        +92313524856
                        {/* {generaldata?.general?.phone} */}
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <HomeOutlinedIcon sx={{ mr: 2 }} /> 
                        Toronto, Ontario, Canada
                        {/* {generaldata?.general?.companyaddress} */}
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "inter",  
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <WebIcon sx={{ mr: 2 }} /> katarina.smith@devias.io
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <BorderHorizontalSharpIcon sx={{ mr: 2 }} /> 
                        25-75
                        {/* {companyinformations?.company?.companysize} */}
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                  </Box>
                  <Box sx={{width:["100%","45%"],mx:[0,7], display: "flex", flexDirection: "column", mt: 2 }}>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                        // borderBottom: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AccountCircleIcon sx={{ mr: 2 }} />{" "}
                        www.canadagoose.com/shop
                        {/* {generaldata?.general?.companywebsite} */}
                      </Typography>
                    </Box>
                    
                    <Divider light={true}></Divider>

                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <PhoneOutlinedIcon sx={{ mr: 2 }} /> 
                        +92313524856
                        {/* {generaldata?.general?.phone} */}
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <HomeOutlinedIcon sx={{ mr: 2 }} /> 
                        Toronto, Ontario, Canada
                        {/* {generaldata?.general?.companyaddress} */}
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "inter",  
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <WebIcon sx={{ mr: 2 }} /> katarina.smith@devias.io
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                    <Box
                      sx={{
                        p: 1,
                        pl: 0,
                        pr: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#111927",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "25px",
                          letterSpacing: "0px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <BorderHorizontalSharpIcon sx={{ mr: 2 }} /> 
                        25-75
                        {/* {companyinformations?.company?.companysize} */}
                      </Typography>
                    </Box>
                    <Divider light={true}></Divider>
                  </Box>

</Box>
                </Box>

                {/* Social Media Links */}
                <Box sx={styles.socialMediaLinksContainer}>
                  <Box sx={{ my: 2 }}>
                    <Typography
                      variant="H6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "18px",
                        fontFamily: "Inter",
                        fontFamily: "Plus Jakarta Sans",
                      }}
                    >
                      Niche
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "rgba(99, 102, 241, 0.12)",
                        color: "#312E81",
                        width: "100%",
                      }}
                    >
                      Clothing
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 3,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "rgba(99, 102, 241, 0.12)",
                        color: "#312E81",
                        width: "100%",
                      }}
                    >
                      Men Fashion
                    </Button>
                  </Box>
                  <Box sx={{ mb: 2, mt: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "18px",
                        fontFamily: "Plus Jakarta Sans",
                      }}
                    >
                      Social Media Links
                    </Typography>
                  </Box>

                  <Box
                    sx={{ p: 1, pl: 0, pr: "10px", ...styles.socialMediaLink }}
                  >
                    <InstagramIcon
                      sx={{ ...styles.socialMediaIcon, color: "#F90000" }}
                    />{" "}
                    <Typography
                      sx={{
                        fontFamily: "inter",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "25.12px",
                        ml: 1,
                      }}
                    >
                      www.instagram.com/therock
                    </Typography>
                  </Box>
                  <Divider />

                  <Box
                    sx={{ p: 1, pl: 0, pr: "10px", ...styles.socialMediaLink }}
                  >
                    <YouTubeIcon
                      sx={{ ...styles.socialMediaIcon, color: "#F90000" }}
                    />{" "}
                    <Typography
                      sx={{
                        fontFamily: "inter",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "25.12px",
                        ml: 1,
                      }}
                    >
                      www.youtube.com/therock
                    </Typography>{" "}
                  </Box>
                  <Divider />

                  <Box
                    sx={{ p: 1, pl: 0, pr: "10px", ...styles.socialMediaLink }}
                  >
                    <TwitterIcon
                      sx={{ ...styles.socialMediaIcon, color: "#1DA1F2" }}
                    />{" "}
                    <Typography
                      sx={{
                        fontFamily: "inter",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "25.12px",
                        ml: 1,
                      }}
                    >
                      www.twitter.com/therock
                    </Typography>{" "}
                  </Box>
                  <Divider />

                  <Box
                    sx={{ p: 1, pl: 0, pr: "10px", ...styles.socialMediaLink }}
                  >
                    <PinterestIcon
                      sx={{ ...styles.socialMediaIcon, color: "#F90000" }}
                    />{" "}
                    <Typography
                      sx={{
                        fontFamily: "inter",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "25.12px",
                        ml: 1,
                      }}
                    >
                      www.pinterest.com/therock
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
              </Box>

              {/* ... (rest of the code) ... */}
            </Box>
      <Divider sx={{ mt: "80px" }}></Divider>

      <Box sx={{}}>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="H6"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              fontFamily: "Inter",
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Stats
          </Typography>
        </Box>
        <Box sx={{ display: ["block","flex"] }}>
          <Box sx={{ mx: "13px",
          '&:hover': {
            cursor: 'pointer',
          }, }}>
            <Typography  className={`${overview === 0 && "youtubestats"} `} onClick={()=>handledata(0)}>Instagram statistics</Typography>  
          </Box>
          <Box sx={{ mx: "13px",'&:hover': {
            cursor: 'pointer',
          }, }}>
            <Typography className={`${overview === 1 && "youtubestats"} `}  onClick={()=>handledata(1)}>Youtube statistics</Typography>
          </Box>
          <Box sx={{ mx: "13px",'&:hover': {
            cursor: 'pointer',
          }, }}>
            <Typography  className={`${overview === 2 && "youtubestats"} `}   onClick={()=>handledata(2)}>tiktok statistics</Typography>
          </Box>
          <Box sx={{ mx: "13px" ,'&:hover': {
            cursor: 'pointer',
          },}}>
            <Typography  className={`${overview === 3 && "youtubestats"} `}  onClick={()=>handledata(3)}>Twitter statistics</Typography>
          </Box>
          <Box sx={{ mx: "13px",'&:hover': {
            cursor: 'pointer',
          }, }}>
            <Typography  className={`${overview === 4 && "youtubestats"} `}  onClick={()=>handledata(4)}>Pinetrest statistics</Typography>
          </Box>
        </Box>

        <Divider></Divider>

{
  overview === 0 && 
  <Box>
    <Box sx={{ p: { xs: '5px', sm: '10px', md: '15px' } }}>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={{ xs: '5px', sm: '10px', md: '16px' }}
        justifyContent="center"
      >
         <Box sx={{ width: { xs: '80%', sm: '90%', md: '100%' } }}>
          
            <Box className={classes.cardContainer}>
              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3],}} className={classes.imageContainer}>
                    <Image
                      src="/image/grouped.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Followers Count
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px'
                        }}
                      >
                        500K
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#008EAD",
                         
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Macro
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                       display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                        alignContent:'baseline'
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3,mb:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/cardgroup.png"
                      width={"104"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box sx={{mt:'13px'}}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Followers Count
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px',mt:9
                        }}
                      >
                        1k
                      </Typography>
                      
                    </Box>
                    
                  </Box>
                </Box>
              </Box>

              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/heart.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Average Likes
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px'
                        }}
                      >
                        5 %
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#008EAD",
                         
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> High Average Likes
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                        alignContent:'baseline'
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
            
              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/message.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Average Comments
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px'
                        }}
                      >
                        45
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#08DCA9",
                         
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Very High Average Comment
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                        alignContent:'baseline'
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/connect.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Engagement Rate
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px'
                        }}
                      >
                        2.5%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#08DCA9",
                         
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Average Engagement rate
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                        alignContent:'baseline'
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/comment.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Like/Comment ratio
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px'
                        }}
                      >
                        7%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#08DCA9",
                         
                          fontSize: "14px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> very High Balance
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                        alignContent:'baseline'
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}}  className="flex flex-row items-center px-7">
                  <Box sx={{ml:2,mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/like.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                       View /Subscriber rate
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                        }}
                      >
                        5 %
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#008EAD",
                         
                          fontSize: ["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Low view to
                        Subscriber rate
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}}  className="flex flex-row items-center px-7">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/clock.png"
                      width={"84"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",
                         
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                       Average Post Intervals
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                        }}
                      >
                        0.2%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#008EAD",
                         
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Average Post Interval
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        display:'flex',
                       alignItems:'center',
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        textAlign: "left",
                        marginTop: "8px",
                      }}
                    >
                      Details <ExpandMoreIcon />
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3,mb:3}} className="flex flex-row items-center ">
                  <Box sx={{mr:['7px',2],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/reel.png"
                      width={"90"}
                      height={"84"}
                    ></Image>
                  </Box>
                  <Box className={classes.greenBox}>
                    <Box sx={{mt:'13px'}}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#9D9D9D",                        
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Reels Count
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                         
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          m:'7px',
                        }}
                      >
                        3.2 M
                      </Typography>
                      
                    </Box>
                    
                  </Box>
                </Box>
              </Box>
            
            </Box>
         </Box>
        </Box>
      </Box>
    </Box>
}
{
  overview === 1 && 
  <Youtube />
}
{
  overview === 2 && 
  <Tiktokstats />
}
{
  overview === 3 && 
  <Twitterstats />
}
{
  overview === 4 && 
  <Pintereststats />
}
      </Box>
      <Divider></Divider>
    </Box>
    </Box>
    </Box>
  );
};

export default ProfileDashboard;