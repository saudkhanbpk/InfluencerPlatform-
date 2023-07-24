'use client'
import React from 'react'
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





const Tiktokstats = () => {

  const classes = useStyles();

  return (
    <div>
      <Box sx={{}}>
        {/* <Box sx={{ my: 2 }}>
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
        <Box sx={{ display: "flex" }}>
          <Box sx={{ mx: "13px",color:'#2970FF' }}>
            <Typography sx={{borderBottom:'1px solid #2970FF',pb:'3px'}}>Instagram statistics</Typography>  
          </Box>
          <Box sx={{ mx: "13px" }}>
            <Typography href="#">Youtube statistics</Typography>
          </Box>
          <Box sx={{ mx: "13px" }}>
            <Typography href="#">tiktok statistics</Typography>
          </Box>
          <Box sx={{ mx: "13px" }}>
            <Typography href="#">Twitter statistics</Typography>
          </Box>
          <Box sx={{ mx: "13px" }}>
            <Typography href="#">Pinetrest statistics</Typography>
          </Box>
        </Box>

        <Divider></Divider> */}
        <Box sx={{ p: "15px" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            gap="16px"
            justifyContent="center"
          >
            <Box className={classes.cardContainer}>
              <Box className={classes.card}>
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
                    <Image
                      src="/image/addperson.png"
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
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Subscribers
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
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
                        fontFamily: "Inter",
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
                  className="flex flex-row items-center px-6"
                  sx={{ pt: "18px" }}
                >
                  <Box className={classes.imageContainer}>
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
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
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="12px" /> Very High
                        Average Likes
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        fontFamily: "Inter",
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
            <Box className={classes.cardContainer}>
              <Box className={classes.card}>
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" />High Average
                        Comments
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        fontFamily: "Inter",
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
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
                    {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                    <Image
                      src="/image/share.png"
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
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Average Shared
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                          fontFamily: "Inter",
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                        }}
                      >
                        1.5 %
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#008EAD",
                          fontFamily: "Inter",
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="12px" />
                        High average comments
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        fontFamily: "Inter",
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
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
                    {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                    <Image
                      src="/image/play.png"
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
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Average Plays
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                          fontFamily: "Inter",
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                          width:'30px'
                        }}
                      >
                        65%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#008EAD",
                          fontFamily: "Inter",
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="12px" /> High average Comments
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        fontFamily: "Inter",
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
            <Box className={classes.cardContainer}>
              <Box className={classes.card}>
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
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
                          fontFamily: "Inter",
                          fontSize: "10px",
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Average Engagement Rate
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        fontFamily: "Inter",
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
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
                    {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                    <Image
                      src="/image/heartsearch.png"
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
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Total Likes
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                          fontFamily: "Inter",
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                        }}
                      >
                        3.2 m
                      </Typography>
                      
                    </Box>
                    
                  </Box>
                </Box>
              </Box>
              <Box className={classes.card}>
                <Box className="flex flex-row items-center px-7">
                  <Box className={classes.imageContainer}>
                    {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                    <Image
                      src="/image/record.png"
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
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "19px",
                          letterSpacing: "0.08em",
                          textAlign: "left",
                        }}
                      >
                        Media Count
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4466F2",
                          fontFamily: "Inter",
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "49px",
                          letterSpacing: "9%",
                          textAlign: "left",
                        }}
                      >
                        100+
                      </Typography>
                      
                    </Box>
                    
                  </Box>
                </Box>
              </Box>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Tiktokstats