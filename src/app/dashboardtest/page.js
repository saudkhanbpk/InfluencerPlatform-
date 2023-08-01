"use client";
import React, { useState, useEffect } from "react";
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
import { baseUrl } from "../BaseUrl";
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

const styles = {
  coverImageContainer: {
    borderRadius: "20px",
    width: "100%",
    maxWidth: "700px", // Limit the maximum width of the image on larger screens
    margin: "0 auto", // Center the image on larger screens
  },
  coverImage: {
    width: "100%",
    height: "auto",
  },
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
    margin: "0 auto", // Center the image
    "@media (max-width: 600px)": {
      width: "100px", // Adjust width for smaller screens
      height: "100px", // Adjust height for smaller screens
    },
  },
  imageclass: {
    "@media (max-width: 600px)": {
      width: "55px", // Adjust width for smaller screens
      height: "55px", // Adjust height for smaller screens
      marginRight: "0px",
      marginTop: "17px",
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
    borderTopLeftRadius: ["2px", "80px"],
    borderTopRightRadius: ["2px", "80px"],
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
    "@media (max-width: 600px)": {
      marginLeft: "0px",
      width: "90px",
    },
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
  const [overview, setOverview] = useState(0);
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(true);
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
  // console.log("user id", userId)
  // console.log("storedUserData", data?.social?.blog)
  console.log("companyinformations........", companyinformations)
  const handledata = (num) => {
    setOverview(num);
  };
  
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box>
        <Navbar />
        <Box className={classes.container} sx={{ position: "relative" }}>
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
          <Box>
              <Box
                sx={{
                  // border: "2px solid green",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                  className={classes.profileImageContainer}
                >
                  <Box className={classes.profileImage}>
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
                      mt: [0, 2],
                      mr: [1, 0],
                      justifyContent:'start'
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
                          textAlign: "start"
                        }}
                      >
                        {/* Canada Goose */}
                        {generaldata?.general?.fname}
                      </Typography>
                    </Box>
                    <Typography
                     
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#6C737F",
                        lineHeight: "30px",
                        letter: "0.5px",
                        textAlign: "start",
                        pt: 1,
                        mb: 1,
                      }}
                    >
                      Established since {companyinformations?.company?.companyfounded}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        backgroundColor: "#F9FAFF",
                        borderRadius: "10px",
                        padding: "5px",
                        width: "100%",
                        alignItems:"center",
                        pl: "0px",
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{
                          pt: "0",
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
                          pl: "6px",
                          fontSize: "13px",
                          fontWeight: 400,
                          fontFamily: "inter",
                          paddingTop: "2px",
                          lineHeight: "15.73px",
                        }}
                      >
                        {/* Toronto Canada */}
                        {generaldata?.general?.companyaddress}
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
                      p: [0, 2],
                    }}
                  ></Box>

                  {/* Right side content */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: ["column", "row"], // Column on mobile, Row on desktop
                      alignItems: ["center", "flex-start"], // Center items horizontally on mobile, start on desktop
                      mt: [13, 0], // Margin top on mobile, no margin on desktop
                      ml: [-18, 0],
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        mb: [3, 0], // Margin bottom on mobile, no margin on desktop
                        ml: [-12, 0],
                      }}
                    >
                      <Button variant="outlined" color="primary">
                        <FavoriteIcon sx={{ mr: 1 }} /> Favorite
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        alignItems: "center",
                        ml: [-9, 2],
                        width: "190px",
                      }}
                    >
                      <Button variant="contained" color="primary">
                        <QuestionAnswerIcon sx={{ mr: 1 }} /> Send Message
                      </Button>
                      <Box
                        sx={{
                          pt: 3,
                          height: "20px",
                          color: "#111927",
                          ml: [-1, 0],
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
                         <a href={data?.social?.blog} target="_blank" rel="noopener noreferrer"> 
                         <InstagramIcon sx={{ color: "#FF004F", mx: 1 }} />
                         </a>
                          <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                          <FaTiktok sx={{ mx: 1, mt: 2,color:'#000000' }} />
                          </a>
                          <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                          <YouTubeIcon sx={{ color: "#FF004F", mx: 1 }} />
                          </a>
                          <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                          <TwitterIcon sx={{ color: "#1DA1F2", mx: 1 }} />
                          </a>
                          <a href={data?.social?.pinterest} target="_blank" rel="noopener noreferrer">
                          <PinterestIcon sx={{ color: "#EE0505", mx: 1 }} />
                          </a>

                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mx: "13px", color: "#2970FF" }}>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ borderBottom: "1px solid #2970FF", pb: "3px" }}>
                Overview
              </Typography>
            </Box>
          </Box>
          <Divider></Divider>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "75%",
                borderRight: "1px solid #F2F4F7",
                p: 1,
                pr: 3,
              }}
            >
              <Box sx={{ my: 2 }}>
                <Typography
                  variant="H6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",

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
                  }}
                >
                  Hey there, thanks for checking out my page! I'm a social media
                  influencer who loves to connect with people from all over the
                  world. My passion is to inspire others to live their best
                  lives and to chase their dreams. Through my content, I hope to
                  motivate and uplift my followers, while also sharing my own
                  personal journey and experiences. I'm committed to creating
                  high-quality content that resonates with my followers and
                  promotes products that I genuinely believe in. So, if you're
                  interested in working together, feel free to reach out and
                  let's see what we can create together!
                </Typography>
              </Box>
              <Divider></Divider>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Box sx={{ width: "50%", pt: "5", pr: "60px" }}>
                  <Box sx={{ p: 1, pl: 0, pr: "10px" }}>
                    <Typography
                      sx={{
                        color: "#111927",

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

                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "25px",
                        letterSpacing: "0px",
                        textAlign: "left",
                      }}
                    >
                      <LanguageOutlinedIcon sx={{ mr: 2 }} /> www.therock.com
                    </Typography>
                  </Box>
                  <Divider></Divider>

                  <Box sx={{ p: 1, pl: 0 }}>
                    <Typography
                      sx={{
                        color: "#111927",

                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "25px",
                        letterSpacing: "0px",
                        textAlign: "left",
                      }}
                    >
                      <PhoneOutlinedIcon sx={{ mr: 2 }} /> +92313524856
                    </Typography>
                  </Box>
                  <Divider></Divider>

                  <Box sx={{ p: 1, pl: 0 }}>
                    <Typography
                      sx={{
                        color: "#111927",

                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "25px",
                        letterSpacing: "0px",
                        textAlign: "left",
                      }}
                    >
                      <HomeOutlinedIcon sx={{ mr: 2 }} /> Toronto, Ontario,
                      Canada
                    </Typography>
                  </Box>
                  <Divider></Divider>
                </Box>

                <Divider></Divider>

                <Box
                  sx={{
                    width: "50%",
                    pr: "60px",
                    "@media (max-width: 600px)": { pr: "10px" },
                  }}
                >
                  <Box sx={{ p: 1, pl: 0 }}>
                    <Typography
                      sx={{
                        color: "#111927",

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
            <Box sx={{ width: "25%", pl: 3, p: 1, pr: 3,'@media (max-width: 600px)': {pr:'5px'},
            }}>
              <Box sx={{ my: 2 }}>
                <Typography
                  variant="H6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",

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
                    color: "black",
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
                    color: "black",
                    width: "100%",
                  }}
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
          </Box>
          <Divider sx={{ mt: "80px" }}></Divider>

          <Box sx={{}}>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="H6"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",

                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Stats
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mx: "13px" }}>
                <Typography
                  className={`${overview === 0 && "youtubestats"} `}
                  onClick={() => handledata(0)}
                >
                  Instagram statistics
                </Typography>
              </Box>
              <Box sx={{ mx: "13px" }}>
                <Typography
                  className={`${overview === 1 && "youtubestats"} `}
                  onClick={() => handledata(1)}
                >
                  Youtube statistics
                </Typography>
              </Box>
              <Box sx={{ mx: "13px" }}>
                <Typography
                  className={`${overview === 2 && "youtubestats"} `}
                  onClick={() => handledata(2)}
                >
                  tiktok statistics
                </Typography>
              </Box>
              <Box sx={{ mx: "13px" }}>
                <Typography
                  className={`${overview === 3 && "youtubestats"} `}
                  onClick={() => handledata(3)}
                >
                  Twitter statistics
                </Typography>
              </Box>
              <Box sx={{ mx: "13px" }}>
                <Typography
                  className={`${overview === 4 && "youtubestats"} `}
                  onClick={() => handledata(4)}
                >
                  Pinetrest statistics
                </Typography>
              </Box>
            </Box>

            <Divider></Divider>

            {overview === 0 && (
              <Box sx={{ p: { xs: "5px", sm: "10px", md: "15px" } }}>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={{ xs: "5px", sm: "10px", md: "16px" }}
                  justifyContent="center"
                >
                  <Box sx={{ width: { xs: "80%", sm: "90%", md: "100%" } }}>
                    <Box className={classes.cardContainer}>
                      <Box className={classes.card}>
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            <Image
                              src="/image/grouped.png"
                              width={"84"}
                              height={"84"}
                            ></Image>
                          </Box>
                          <Box sx={{ mt: 1 }} className={classes.greenBox}>
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
                                <FiberManualRecordSharpIcon fontSize="10px" />{" "}
                                Macro
                              </Typography>
                            </Box>
                            <Box sx={{display:'flex'}}> 
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

                                fontSize: "12px",
                                fontWeight: "600",
                                lineHeight: "15px",
                                letterSpacing: "8%",
                                textAlign: "left",
                                marginTop: "8px",
                                alignItems:'center'
                              }}
                            >
                              Details </Typography>  <ExpandMoreIcon /> </Box>
                            
                          </Box>
                        </Box>
                      </Box>
                      {/* Add more card components here */}
                      <Box className={classes.card}>
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-6"
                          // sx={{ pt: "18px" }}
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                            <Image
                              src="/image/cardgroup.png"
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
                                Following Count
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
                                1K
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={classes.card}>
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
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
                                }}
                              >
                                5 %
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
                                <FiberManualRecordSharpIcon fontSize="12px" />{" "}
                                Very High Average Likes
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
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
                                }}
                              >
                                45
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
                                <FiberManualRecordSharpIcon fontSize="10px" />{" "}
                                High Average Comments
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
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
                                Engagment Rate
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
                                2.5 %
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
                                <FiberManualRecordSharpIcon fontSize="12px" />{" "}
                                Average Engagement rate
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
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
                                Like/Comment Ratio
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
                                7 %
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
                                <FiberManualRecordSharpIcon fontSize="12px" />{" "}
                                Very High Balance
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
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
                                Like Spread
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
                                8 %
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
                                <FiberManualRecordSharpIcon fontSize="10px" />{" "}
                                Very High Spread
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                            <Image
                              src="/image/interval.png"
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
                                Average Post Interval
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
                                0.2 %
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
                                <FiberManualRecordSharpIcon fontSize="12px" />{" "}
                                Average Post Intervals
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                        <Box
                          sx={{ display: "flex", mt: 3 }}
                          className="flex flex-row items-center px-7"
                        >
                          <Box
                            sx={{ mr: 4, mt: 1 }}
                            className={classes.imageContainer}
                          >
                            {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
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
                                Like/Comment Ratio
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
                                7 %
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
                                <FiberManualRecordSharpIcon fontSize="12px" />{" "}
                                Very High Balance
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#4466F2",

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
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
            {overview === 1 && <Youtube />}
            {overview === 2 && <Tiktokstats />}
            {overview === 3 && <Twitterstats />}
            {overview === 4 && <Pintereststats />}
          </Box>
          <Divider></Divider>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDashboard;
