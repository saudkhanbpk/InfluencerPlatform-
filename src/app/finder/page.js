'use client'
import React, { useState } from 'react'
import { Box, Typography, Tabs, Tab, } from '@mui/material';

import { BsInstagram } from 'react-icons/bs';
import { IoLogoTiktok } from 'react-icons/io';
import { FaSquareYoutube, FaTwitterSquare, FaSquarePinterest, FaLinkedin } from 'react-icons/fa';
import Sidebar from '../sidebar/page';
import Navbar from '../navbar/page';
import Instagram from './instagram/page';
import Tiktok from './tiktok/page';
import Youtube from './youtube/page';
import Twitter from './twitter/page';
import Pinterest from './pinterest/page';
import Linkedin from './linkedin/page';
import Inflfound from './Influencer_found/page';

const page = () => {
    const [expanded, setExpanded] = useState(true)
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const platforms = [
        { label: 'Instagram', icon: <BsInstagram />, component: <Instagram /> },
        { label: 'Tiktok', icon: <IoLogoTiktok />, component: <Tiktok /> },
        { label: 'Youtube', icon: <FaSquareYoutube />, component: <Youtube /> },
        { label: 'Twitter', icon: <FaTwitterSquare />, component: <Twitter /> },
        { label: 'Pinterest', icon: <FaSquarePinterest />, component: <Pinterest /> },
        { label: 'Linkedin', icon: <FaLinkedin />, component: <Linkedin /> }
    ];
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar expanded={expanded} />
            <Box sx={{ width: "100%" }}>
                <Navbar expanded={expanded} setExpanded={setExpanded} />
                <Box sx={{ backgroundColor: '#00359E', color: 'white', padding: '2rem 0', width: '100%', height: '500px' }}>
                    <Typography variant="h6" align="center" sx={{ fontSize: '32px' }}>
                        Connect with the Best Social Media Influencers!
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                        Easily search and filter for influencers that fit your brand’s needs.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{
                            padding: '2rem', backgroundColor: '#FFFFFF',
                            marginTop: '2rem',
                            flexDirection: 'row',
                            gap: '1rem',
                            alignItems: 'center',
                            borderRadius: '20px',
                            width: '80%', // Adjust the width as needed
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow
                            padding: '4rem', // Add padding
                        }}>
                            <Tabs value={selectedTab} onChange={handleTabChange} variant="fullWidth">
                                {platforms.map((platform, index) => (
                                    <Tab key={index} label={platform.label} />
                                ))}
                            </Tabs>
                            {selectedTab === 0 && (
                                <Instagram />
                            )}

                            {selectedTab === 1 && (
                                <Tiktok />
                            )}
                            {selectedTab === 2 && (
                                <Youtube />
                            )}
                            {selectedTab === 3 && (
                                <Twitter />
                            )}
                            {selectedTab === 4 && (
                                <Pinterest />
                            )}
                            {selectedTab === 5 && (
                                <Linkedin />
                            )}
                        </Box>
                    </Box>
                </Box>
                <Inflfound />
            </Box>
        </Box>

    )
}

export default page
