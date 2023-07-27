'use client'
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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


const useStyles = makeStyles((theme) => ({
  // Styles for mobile screen
  container: {
    padding: "0px",
    boxSizing: "border-box",
  },
  coverImage: {
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "80px",
    borderTopRightRadius: "80px",
  },
  profileImage: {
    borderRadius: "50%",
    border: "5px solid primary",
    height: "120px",
    width: "120px",
    marginTop: "-40px",
    marginLeft: "30px",
    overflow: "hidden",
  },
  profilename: {
    height: "155px",
    width: "90%",
    overflow: "hidden",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    mx: "10px",
    flexDirection: "column",
  },
  card: {
    backgroundColor: "white",
    borderBottom: "4px solid #ddd",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    width: "100%",
    height: "190px",
    borderRadius: "16px",
    margin: "10px 0",
  },
  // Other styles...

  // Styles for tablet screen
  "@media (min-width: 768px)": {
    container: {
      padding: "20px",
    },
    coverImage: {
      height: "300px",
    },
    card: {
      width: "45%",
      marginLeft: "35px",
      marginRight: "35px",
      marginTop: "35px",
    },
    profileImage: {
      height: "140px",
      width: "140px",
      marginTop: "-70px",
      marginLeft: "30px",
    },
    profilename: {
      height: "100px",
      width: "70%",
    },
    // Other styles...
  },

  // Styles for desktop screen
  "@media (min-width: 1200px)": {
    container: {
      padding: "50px",
    },
    coverImage: {
      height: "400px",
    },
    card: {
      width: "30%",
      marginLeft: "55px",
      marginRight: "55px",
      marginTop: "35px",
    },
    profileImage: {
      height: "180px",
      width: "180px",
      marginTop: "-90px",
      marginLeft: "30px",
    },
    profilename: {
      height: "120px",
      width: "50%",
    },
    // Other styles...
  },
}));

const BrandProfile = () => {
  const classes = useStyles();
  const [overview, setOverview] = useState(0);

  const handledata = (num) => {
    setOverview(num);
  };

  return (
    <Box className={classes.container}>
      <img
        src="/image/cover.png"
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
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box className={classes.profileImage}>
            {/* ...Rest of the code... */}
            <img src="/image/brandprofile.png" alt="Profile Image" />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            className={classes.profilename}
          >
            {/* ...Rest of the code... */}
          </Box>
        </Box>
      </Box>
      {/* Rest of the code */}
    </Box>
  );
};

export default BrandProfile;
