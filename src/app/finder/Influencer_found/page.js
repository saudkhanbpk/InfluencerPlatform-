'use client'
import { Box, FormControl, InputLabel, MenuItem, Select,Button , Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { Fullscreen } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Image from "next/image";
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
    //   marginTop: "-40px",
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
const Inflfound = () => {
    const theme = useTheme();
    const classes = useStyles();
    
    return (
        <Box sx={{ position: 'relative', top: "15%", padding: '2rem 0', }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', width: '90%', justifyContent: "space-between", alignItems: 'center' }}>
                    <Typography variant='h5' sx={{ color: '#00359E', fontSize: '28px', fontWeight: '700' }}>
                        42 Influencers found
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '2rem', justifyContent: "end", alignItems: 'center' }}>
                        <Typography variant='h6' sx={{color:'#111927', fontSize:'18px'}}>
                            Sort by
                        </Typography>
                        <Box sx={{ minWidth: 200, }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Follower Count</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Follower Count"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
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
                        Canada Goose
                       
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
                        pt: [0,0],
                        mb: [0,0],

                      }}
                    >
                      Established since 
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
                 
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
        </Box>
    )
}

export default Inflfound
