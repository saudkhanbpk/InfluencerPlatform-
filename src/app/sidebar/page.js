"use client";
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,Button
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ReceiptIcon from "@mui/icons-material/Receipt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ContactMailIcon from "@mui/icons-material/ContactMail";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import GppBadOutlinedIcon from '@mui/icons-material/GppBadOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FormatListNumberedRtlSharpIcon from '@mui/icons-material/FormatListNumberedRtlSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import LibraryAddCheckSharpIcon from '@mui/icons-material/LibraryAddCheckSharp';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';

const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState(false);
    const [product, setProduct] = React.useState(false);
    const [orders, setOrders] = React.useState(false);
    const [invoices, setInvoices] = React.useState(false);
    const [logistics, setLogistics] = React.useState(false);
    const [fileuploader, setFileuploader] = React.useState(false);
    const [academy, setAcademy] = React.useState(false);
    const [auth, setAuth] = React.useState(false);
    const [blogs, setBlogs] = React.useState(false);
    const [joblisting, setJoblisting] = React.useState(false);
    const [level, setLevel] = React.useState(false);
    const [socialmedia, setSocialmedia] = React.useState(false);
    
  const handleDropdownCustomers = () => {
    setCustomer(!customer);
  };
  const handleDropdownProduct = () => {
    setProduct(!product);
  };
  const handleDropdownOrders = () => {
    setOrders(!orders);
  };
  const handleDropdownInvoices = () => {
    setInvoices(!invoices);
  };
  const handleDropdownLogistics = () => {
    setLogistics(!logistics);
  };
  const handleDropdownFileUploader = () => {
    setFileuploader(!fileuploader);
  };
  const handleDropdownAcademy = () => {
    setAcademy(!academy);
  };
  const handleDropdownAuth = () => {
    setAuth(!auth);
  };
  const handleDropdownBlogs = () => {
    setBlogs(!blogs);
  };
  const handleDropdownJobListing = () => {
    setJoblisting(!joblisting);
  };
  const handleDropdownSocialMedia = () => {
    setSocialmedia(!socialmedia);
  };
  const handleDropdownLevel = () => {
    setLevel(!level);
  };
  return (
    <Box
      sx={{
        width: "210px",
        backgroundColor: "#1C2536",
        color: "white",
        height:'1590',
        padding:2,
        m:0
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Avatar
          sx={{
            width: "40",
            height: "40",
            marginBottom: 2,
            borderRadius: "8px",
            border: "1px solid #323A4A",
            m: 2,
          }}
          src="/image/sideicon.png"
          alt="Profile Image"
        >

        </Avatar>
        <Box sx={{m:2}}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "white",
              lineHeight: "15px",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "700",
              fontSize: "18",
            }}
          >
            Devias
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "12",
            }}
          >
            Premium Tier
          </Typography>
        </Box>
        
      </Box>
      <List>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
            <OtherHousesOutlinedIcon sx={{marginRight:"15px",color: "white" }} />
          
          <ListItemText primary="OverView" />
        </ListItem>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <AssessmentOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <BrokenImageOutlinedIcon sx={{ marginRight:"15px",color: "white" }} />
          
          <ListItemText primary="Ecommerce" />
        </ListItem>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <CurrencyBitcoinOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Crypto" />
        </ListItem>
        <Typography variant="overline"
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "12px",
            LineHeight: "30px",
            Letter: "0.5px",
            height:30
          }} >
          CONCEPTS
          </Typography>
          
          <ListItem ButtonBase onClick={handleDropdownCustomers} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <GroupOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Customers" />
          {customer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={customer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Detail" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownProduct} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <LocalMallOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Products" />
          {product ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={product} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="create" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownOrders} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <ShoppingCartOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Orders" />
          {orders ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={orders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Detail" />
            </ListItem>
            
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownInvoices} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <ReceiptOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Invoices" />
          {invoices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={invoices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Detail" />
            </ListItem>
            
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownLogistics} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <AirportShuttleOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Logistics" />
          {logistics ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={logistics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Fleet" />
            </ListItem>
            
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownFileUploader} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <FileUploadOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="File Uploader" />
          {fileuploader ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={fileuploader} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Course" />
            </ListItem>

          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownAcademy} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <SchoolOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Academy" />
          {academy ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={academy} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Course" />
            </ListItem>
            
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownJobListing} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <FormatListNumberedRtlSharpIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Job Listing" />
          {joblisting ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={joblisting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Browse" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Detail" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              <ListItemIcon>
                {/* Add an icon for the menu item */}
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownSocialMedia} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <ShareSharpIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Social Media" />
          {socialmedia ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={socialmedia} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Feed" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem ButtonBase onClick={handleDropdownBlogs} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <ListAltSharpIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Blogs" />
          {blogs ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={blogs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post Details" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post Create" />
            </ListItem>
          </List>
        </Collapse>

        <Typography variant="overline"
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "12px",
            LineHeight: "30px",
            Letter: "0.5px",
            height:30
          }} >
          APPS
          </Typography>

          <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <LibraryAddCheckSharpIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Kanban" />
        </ListItem>

        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <MailOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Mail" />
        </ListItem>

        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <ChatBubbleOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Chat" />
        </ListItem>

        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <CalendarTodayOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Calender" />
        </ListItem>

        <Typography variant="overline"
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "12px",
            LineHeight: "30px",
            Letter: "0.5px",
            height:30
          }} >
          PAGES
          </Typography>

          <ListItem ButtonBase onClick={handleDropdownAuth} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <LockOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Auth" />
          {auth ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={auth} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post Details" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post Create" />
            </ListItem>
          </List>
        </Collapse>

          <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <CreditCardOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <LogoutOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Checkout" />
        </ListItem>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <CallOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <DisabledByDefaultOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
         
          <ListItemText primary="Error" />
        </ListItem>

        <Typography variant="overline"
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "12px",
            LineHeight: "30px",
            Letter: "0.5px",
            height:30
          }} >
          MISC
          </Typography>

          <ListItem ButtonBase onClick={handleDropdownLevel} sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}>
          <ViewAgendaOutlinedIcon sx={{marginRight:"15px"}}/>
          
          <ListItemText primary="Level O" />
          {level ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={level} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post List" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post Details" />
            </ListItem>
            <ListItem ButtonBase sx={{paddingLeft: 2}}>
              
              <ListItemText primary="Post Create" />
            </ListItem>
          </List>
        </Collapse>

          <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <DisabledByDefaultOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
         
          <ListItemText primary="Disabled" />
        </ListItem>

        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <CheckBoxOutlineBlankOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="Label" />
        </ListItem>

        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <CheckBoxOutlineBlankOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
         
          <ListItemText primary="Disabled" />
        </ListItem>

        <ListItem
          ButtonBase
          sx={{
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#323A4A",cursor:'pointer'
            },
          }}
        >
          
            <LinkOutlinedIcon sx={{marginRight:"15px", color: "white" }} />
          
          <ListItemText primary="External Link" /><LaunchIcon/>
        </ListItem>


      </List>
      <Box
                    sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign:'center',
                            mt:2,
                            mb:2
                                                        
                        }}
                    >
                        <Button variant="outlined" color="primary" sx={{width:'90%',color:'#F3F4F6',border:'1px solid #F3F4F6',borderRadius:'16px'}}>
                           <TaskIcon sx={{mr:1}}/>Documentation 
                        </Button>
                    </Box>
    </Box>
  );
};

export default Sidebar;
