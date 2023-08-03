'use client'
import React, { useState } from 'react'
import { Box, Typography, Tabs, Tab, TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import Sidebar from '../sidebar/page';
import Navbar from '../navbar/page';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';

const page = () => {

    const [expanded, setExpanded] = useState(true)
    const [selectedTab, setSelectedTab] = useState(0);
    const [age, setAge] = useState('');
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    const categoryOptions = [
        {
            label: 'Healthcare',
            value: 'healthcare'
        },
        {
            label: 'Makeup',
            value: 'makeup'
        },
        {
            label: 'Dress',
            value: 'dress'
        },
        {
            label: 'Skincare',
            value: 'skincare'
        },
        {
            label: 'Jewelry',
            value: 'jewelry'
        },
        {
            label: 'Blouse',
            value: 'blouse'
        }
    ];
    const platforms = ['Instagram', 'Tiktok', 'Youtube', 'Twitter', 'Pinterest', 'Linkedin'];
    return (
        // <Box sx={{ display: 'flex' }}>
        //     <Sidebar expanded={expanded} />
        //     <Box sx={{ width: "100%" }}>
        //         <Navbar expanded={expanded} setExpanded={setExpanded} />
        //         <Box sx={{ backgroundColor: '#00359E', color: 'white', padding: '2rem 0' }}>
        //             {/* Hero content */}
        //             <Typography variant="h5" align="center">
        //             Connect with the Best Social Media Influencers!
        //             </Typography>
        //             <Typography variant="subtitle1" align="center">
        //             Easily search and filter for influencers that fit your brand’s needs.
        //             </Typography>
        //         </Box>
        //     </Box>
        // </Box>
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
                                    <Tab key={index} label={platform} />
                                ))}
                            </Tabs>
                            <Box sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                                {/* <Typography variant="h5">Filters for {platforms[selectedTab]}</Typography> */}
                                <TextField
                                    label="Search"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                                <TextField
                                    label="Search"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />

                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Category"
                                    name="category"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Location"
                                    name="location"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="Followers"
                                    label="followers"
                                    name="usa"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Typography variant='h6' sx={{ fontWeight: 'bold', p: '20px', color: '#111927' }}>
                                    To
                                </Typography>
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="Followers"
                                    label="followers"
                                    name="usa"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                            <Box sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                                {/* <Typography variant="h5">Filters for {platforms[selectedTab]}</Typography> */}
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Age"
                                    name="age"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Gender"
                                    name="gender"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Language"
                                    name="language"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Engagement rate"
                                    name="engagement rate"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Avg likes range"
                                    name="avg likes range"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    defaultValue={categoryOptions[0].value}
                                    size="medium"
                                    label="Avg comments range"
                                    name="avg comments range"
                                    fullWidth
                                    select
                                >
                                    {categoryOptions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                                {/* <Typography variant="h5">Filters for {platforms[selectedTab]}</Typography> */}
                                <TextField
                                    label="Search"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                                <TextField
                                    label="Search"
                                    variant="outlined"
                                    size="medium"
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ color: '#111927', mt: '20px' }}>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label={(
                                        <Typography variant="body1">
                                            Has Phone number
                                        </Typography>
                                    )}
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label={(
                                        <Typography variant="body1">
                                            Is Verified
                                        </Typography>
                                    )}
                                />
                            </Box>

                            <Box fullWidth sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
                                <Box sx={{ display: 'flex',gap:'2rem', justifyContent: 'start', }}>
                                    <Button
                                        startIcon={<SearchIcon />}
                                        sx={{ px: { xs: 1, md: 4 }, p: 2, borderRadius: '12px', bgcolor: '#2970FF', color: '#FFFFFF', fontWeight: 600, }}
                                        variant="contained"
                                    >
                                        Search
                                    </Button>
                                    <Button
                                        startIcon={<SaveIcon />}
                                        sx={{ px: { xs: 1, md: 4 }, p: 2, borderRadius: '12px', fontWeight: 600, }}
                                        variant="outlined"
                                    >
                                        Save this Search
                                    </Button>
                                </Box>
                                <Box sx={{ display: 'flex',gap:'2rem', justifyContent: 'end',  alignItems:"center" }}>
                                    <Box sx={{ minWidth: 200, }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Button
                                        sx={{ px: { xs: 1, md: 4 }, p: 2, borderRadius: '12px', bgcolor: '#2970FF', color: '#FFFFFF', fontWeight: 600, }}
                                        variant="contained"
                                    >
                                        Run this search
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    {/* Influencer search results */}
                    {/* ... */}
                </Box>
            </Box>
        </Box>

    )
}

export default page
