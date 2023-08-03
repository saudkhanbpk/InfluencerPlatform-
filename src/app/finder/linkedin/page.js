'use client'
import React, { useState } from 'react'
import { Box, Typography, Tabs, Tab, TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
const Linkedin = () => {
    const [age, setAge] = useState('');
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
    return (
        <>
            <Box sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                {/* <Typography variant="h5">Filters for {platforms[selectedTab]}</Typography> */}
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
                    label="Connections"
                    name="connections"
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
                    label="Industry"
                    name="industry"
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
                    label="Skills"
                    name="skills"
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
                <Box sx={{ display: 'flex', gap: '2rem', justifyContent: 'start', }}>
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
                <Box sx={{ display: 'flex', gap: '2rem', justifyContent: 'end', alignItems: "center" }}>
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
        </>
    )
}

export default Linkedin
