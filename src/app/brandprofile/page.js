"use client";
import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
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
    borderTopLeftRadius: "80px",
    borderTopRightRadius: "80px",
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
  const classes = useStyles();
  const [overview, setOverview] = useState(0);

  const handledata = (num) => {
    setOverview(num);
  };
  return (
    <Box sx={{display:'flex'}}>
    <Sidebar/>
    <Box sx={{width: "100%"}}>
    <Navbar/>
    <Box className={classes.container} sx={{ position: "relative" }}>
      <img
        src="/image/cover.png"
        alt="Cover Image"
        className={classes.coverImage}
      />
      <Box sx={{
          borderRadius: "20px",
          color: "black",
          backgroundColor: "#E0E0E0",
          position: "absolute",
          top: "80%",
          right: "20px",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "13px",
        }}>
        
      <Button
        variant="small"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#E0E0E0",        
        }}
      >
        Change Cover
      </Button>
      </Box>
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
              src="/image/brandprofile.png"
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
              <Box>
                <Typography sx={{ color: "#2970FF", fontWeight: 600 }}>
                Canada Goose
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
                  Established since 2010
                </Typography>
                
                <Box  sx={{
                    display:'flex',
                    backgroundColor: "#F9FAFF",
                    borderRadius: "10px",
                    padding:'5px',width:'100%',pl:'5px'
                  }}>
                <LocationOnOutlinedIcon
                    sx={{ pt:'2', fontSize: "18px",
                    color: "#2970FF",
                    }}
                  />
                <Typography
                  sx={{
                    color: "#2970FF",
                    backgroundColor: "#F9FAFF",
                    borderRadius: "10px",
                    mt: 0,
                    pl:'12px',
                    fontSize: "13px",
                    fontWeight: 400,
                    fontFamily: "inter",
                    paddingBottom:'3px'
                  }}
                >
                  {/* <LocationOnOutlinedIcon
                    sx={{ mx: 1, fontSize: "18px", mb: 1 }}
                  /> */}
                  Toronto Canada
                </Typography>

                </Box>
              </Box>
              
            </Box>

            <Box sx={{ display: "flex", mt: 3 }}>
              <Box
                sx={{
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <Button variant="outlined" color="primary">
                  <FavoriteIcon sx={{ mr: 1 }} /> Favorite
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
      <Divider></Divider>
      {
  overview === 0 && 
  <Box sx={{ display: "flex",}}>
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
                fontFamily: "Inter",
              }}
            >
              Canada Goose is a premium Canadian clothing brand that was founded
              in 1957. The brand is known for its high-quality and stylish
              outerwear that is designed to withstand extreme weather
              conditions. The company initially started as a manufacturer of
              woolen vests, raincoats, and snowmobile suits for Canadian Rangers
              and police officers. However, in recent years, Canada Goose has
              gained widespread popularity as a luxury fashion brand and is now
              considered a status symbol.
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
                  <AccountCircleIcon sx={{ mr: 2 }} /> www.canadagoose.com/shop
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
                  <PhoneOutlinedIcon sx={{ mr: 2 }} /> +92313524856
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
                  <HomeOutlinedIcon sx={{ mr: 2 }} /> Toronto, Ontario, Canada
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
                    textAlign: "left",display:'flex',
                  }}
                >
                  <WebIcon sx={{ mr: 2 }} /> katarina.smith@devias.io
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
                  <BorderHorizontalSharpIcon sx={{ mr: 2 }} /> 25-75
                </Typography>
              </Box>
            <Divider></Divider>
            </Box>

            <Divider></Divider>

            {/* <Box sx={{ width: "50%", pr: "60px" }}>
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
            </Box> */}
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
      </Box> } 
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