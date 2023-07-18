"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Box, Button ,Divider} from "@mui/material";
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
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { FaTiktok } from "react-icons/fa";
import { space } from "postcss/lib/list";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import EightteenMpOutlinedIcon from '@mui/icons-material/EightteenMpOutlined';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';



const useStyles = makeStyles((theme) => ({
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

const ProfileDashboard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img
        src="/image/cover.png"
        alt="Cover Image"
        className={classes.coverImage}
      />

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
                  @therock <VerifiedIcon sx={{ color: "#2970FF" }} />
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
                  Toronto Canada
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  p: 1,
                  height: "53px",
                  width: "30%",
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
      <Divider></Divider>
      <Box sx={{ display: "flex", }}>
        <Box sx={{ width: "75%", borderRight:"1px solid #F2F4F7", p: 1, pr: 3 }}>
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
          <Box sx={{marginBottom:'25px'}}>
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
              Hey there, thanks for checking out my page! I'm a social media
              influencer who loves to connect with people from all over the
              world. My passion is to inspire others to live their best lives
              and to chase their dreams. Through my content, I hope to motivate
              and uplift my followers, while also sharing my own personal
              journey and experiences. I'm committed to creating high-quality
              content that resonates with my followers and promotes products
              that I genuinely believe in. So, if you're interested in working
              together, feel free to reach out and let's see what we can create
              together!
            </Typography>
          </Box>
<Divider></Divider>
          <Box sx={{ display: "flex" ,marginTop:'30px'}}>
            <Box sx={{ width: "50%", pt: "5" ,pr:'60px' }}>
              <Box sx={{ p: 1, pl: 0,pr:'10px' }}>
                <Typography
                  sx={{
                    color:'#111927',
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
              <Box sx={{ p: 1, pl: 0 ,mr:'10px'}}>
                <Typography
                  sx={{
                    color:'#111927',
                    fontFamily: "Inter",
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
                    color:'#111927',
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
                    color:'#111927',
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

    
              
            </Box>

            <Divider></Divider>

            <Box sx={{ width: "50%",pr:'60px' }}>
            <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color:'#111927',
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                > 
                  <LanguageOutlinedIcon sx={{ mr: 2 }} /> Languages: English/Arabic
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0 }}>
                <Typography
                  sx={{
                    color:'#111927',
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
                    color:'#111927',
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
                    color:'#111927',
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
        <Box sx={{ width: "25%",pl:3,  p: 1, pr: 3 }}>
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
              sx={{ backgroundColor: "gray", width: "100%" }}
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
              sx={{ backgroundColor: "gray", width: "100%" }}
            >
              Men Fashion
            </Button>
          </Box>


            <Box sx={{marginTop:'20px'}}>
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
          <Box sx={{ p: 1, pl: 0,pr:'10px' }}>
                <Typography
                  sx={{
                    color:'#111927',
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                > 
                  <InstagramIcon sx={{ mr: 2,color:'#F90000' }} /> www.instagram.com/therock
                </Typography>
              </Box>
              <Divider></Divider>
              

              <Box sx={{ p: 1, pl: 0,pr:'10px' }}>
                <Typography
                  sx={{
                    color:'#111927',
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                > 
                  <YouTubeIcon sx={{ mr: 2,color:'#F90000' }} /> www.youtube.com/therock
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0,pr:'10px' }}>
                <Typography
                  sx={{
                    color:'#111927',
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                > 
                  <TwitterIcon sx={{ mr: 2,color:'#1DA1F2' }} /> www.twitter.com/therock
                </Typography>
              </Box>
              <Divider></Divider>

              <Box sx={{ p: 1, pl: 0,pr:'10px' }}>
                <Typography
                  sx={{
                    color:'#111927',
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                > 
                  <PinterestIcon sx={{ mr: 2,color:'#F90000' }} /> www.pinterest.com/therock
                </Typography>
              </Box>
              <Divider></Divider>

            </Box>

        </Box>
      </Box>


      <Box sx={{border:'1px solid red'}}>
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
          <Box sx={{display:'flex'}}>
          <Box sx={{mx:'13px'}}>
          <Link href='#' >Instagram statistics</Link>
          </Box>
          <Box sx={{mx:'13px'}}>
          <Link href='#' >Youtube statistics</Link>
          </Box>
          <Box sx={{mx:'13px'}}>
          <Link href='#' >tiktok statistics</Link>
          </Box>
          <Box sx={{mx:'13px'}}>
          <Link href='#' >Twitter statistics</Link>
          </Box>
          <Box sx={{mx:'13px'}}>
          <Link href='#' >Pinetrest statistics</Link>
          </Box>
          </Box>

          <Box sx={{border:'1px solid green'}}>

          </Box>
      </Box>
    </Box>
  );
};

export default ProfileDashboard;
