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
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'start',

    },
    
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
        width: 'calc(30% - 16px)',
      },
    },
    // imageContainer: {
    //   width: '84px',
    //   height: '84px',
    // },
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
  
//   cardContainer: {
//     display: "flex",
//     width: "100%",
//     // margin:'5px',
//     mx: "5px",
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
// profileImage: {
// // position: 'absolute',
// // top: '110%',
// // left: '6%',
// // transform: 'translate(-50%, -50%)',
// borderRadius: "50%",
// border: "5px solid primary",
// height: 120,
// width: 120,
// marginTop: "-40px",
// marginLeft: "30px",
// overflow: "hidden",
// },
// profileImageImg: {
// height: "100%",
// width: "100%",
// objectFit: "cover",
// },

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
  //   mx: "25px",
  // },
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
  // greenBox: {
  //   flex: "1",
  //   backgroundColor: "white",
  //   padding: "6px",
  //   borderRadius: "8px",
  //   color: "black",
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // imageContainer: {
  //   flexShrink: "0",
  //   paddingRight: "26px",
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





const Youtube = () => {

  const classes = useStyles();

  return (
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
                  <Box sx={{mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
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
                         
                          fontSize: ["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Macro
                      </Typography>
                    </Box>
                    <Box sx={{
                        alignItems:'center',
                       display:'flex',
                       textAlign: "left",


                    }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4466F2",
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "15px",
                        letterSpacing: "8%",
                        display:'flex',
                       alignItems:'center',
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
              <Box className={classes.card}>
                <Box sx={{display:'flex',mt:3}} className="flex flex-row items-center ">
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/graph.png"
                      width={84}
                      height={70}
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
                        Average Views
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
                          color: "#008EAD",
                         
                          fontSize: ["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> High Average Views
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
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
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
                          color: "#08DCA9",
                         
                          fontSize: ["11px","14px"],
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
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/one.png"
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
                        Like/Dislike rate
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
                          color: "#08DCA9",
                         
                          fontSize: ["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Very High Like/dislike rate
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
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/hearteye.png"
                      width={"110"}
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
                        Like/View rate
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
                          color: "#08DCA9",
                         
                          fontSize:["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> Very High Like/view rate
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
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
                    <Image
                      src="/image/commenteye.png"
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
                        Comment/View rate
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
                        0.10%
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#08DCA9",
                         
                          fontSize: ["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="10px" /> High comment/view rate
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
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
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
                          color: "#FFB84C",
                         
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
                  <Box sx={{ml:2,mr:['7px',5],mt:['25px',3]}} className={classes.imageContainer}>
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
                        }}
                      >
                        2.5 %
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#BA63FF",
                         
                          fontSize: ["11px","14px"],
                          fontWeight: "600",
                          lineHeight: "17px",
                          letterSpacing: "8%",
                          textAlign: "left",
                        }}
                      >
                        <FiberManualRecordSharpIcon fontSize="12px" /> Average
                        Engagement Rate
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
              <Box className={classes.card} >
                <Box sx={{pt:[2,3],display:'flex',mt:[0,3],pb:['11px',0]}}  className="flex flex-row items-center px-7">
                  <Box sx={{ml:2,mr:['7px',5],mt:['15px',3]}} className={classes.imageContainer}>
                    {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                    <Image
                      src="/image/stateye.png"
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
                        Total View
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
                        3.2 %
                      </Typography>
                      
                    </Box>
                    
                  </Box>
                </Box>
              </Box>     
            
              <Box className={classes.card} >
                <Box sx={{pt:[2,3],display:'flex',mt:[0,3],pb:['11px',0]}}  className="flex flex-row items-center px-7">
                  <Box sx={{ml:2,mr:['7px',5],mt:['15px',3]}} className={classes.imageContainer}>
                    {/* <FaUserCheck sx={{ fontSize:"80px", color: "#4466F2" }} /> */}
                    <Image
                      src="/image/one.png"
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
                        Video Count
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
                        3.2 m
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
  )
}

export default Youtube
