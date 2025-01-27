'use client';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Box, Button, Divider, Grid, Paper, Typography, Menu, MenuItem } from '@mui/material';
import Styles from './FilterBox.module.css';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';

const FilterBox = () => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedContactType, setSelectedContactType] = useState<string>(''); // State to track selected contact type

  const handleDateClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setDatePickerOpen(!datePickerOpen);
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleApplyNow = () => {
    setDatePickerOpen(false);
    // Additional logic to apply selected date if needed
  };

  const handleContactTypeClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleContactTypeClose = () => {
    setAnchorEl(null);
  };

  const handleContactTypeSelect = (contactType: string) => {
    setSelectedContactType(contactType);
    handleContactTypeClose(); // Close the menu after selecting contact type
  };

  const handleResetFilter = () => {
    setSelectedDate(null); // Reset selected date
    setSelectedContactType(''); // Reset selected contact type
    // Additional logic to reset other filters if needed
  };

  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: '#fff' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Box className={Styles.filterBoxContainer}>
              <Box className={Styles.filterMenu}>
                <Box className={Styles.filterMenuItems}>
                  <Box className={Styles.menuItem}>
                    <FilterAltRoundedIcon />
                    <Typography variant="subtitle1">Filter by</Typography>
                  </Box>
                  <Box className={Styles.menuItem} onClick={handleDateClick}>
                    <Typography variant="body1">{selectedDate ? selectedDate.format('DD-MM-YYYY') : 'Date'}</Typography>
                    <ArrowDropDownRoundedIcon />
                  </Box>
                  <Box className={Styles.menuItem} onClick={handleContactTypeClick}>
                    <Typography variant="body1">{selectedContactType || 'Contact Type'}</Typography> {/* Display selected contact type */}
                    <ArrowDropDownRoundedIcon />
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleContactTypeClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    PaperProps={{
                      style: {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: '#000',
                        padding: '20px',
                        width: '650px',
                      },
                    }}
                    className={Styles.ContactType}
                  >
                    <Typography variant="h5">Select Contact Type</Typography>
                    <Grid container className={Styles.outlinedButton}>
                      <MenuItem
                        sx={{
                          mr: 2,
                          border: '1px solid red',
                          borderRadius: '10px',
                          m: 2,
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        }}
                        onClick={() => handleContactTypeSelect('General Inquiry 1')}
                      >
                        General Inquiry 1
                      </MenuItem>
                      <MenuItem
                        sx={{
                          mr: 2,
                          border: '1px solid red',
                          borderRadius: '10px',
                          m: 2,
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        }}
                        onClick={() => handleContactTypeSelect('General Inquiry 1')}
                      >
                        General Inquiry 1
                      </MenuItem>
                      <MenuItem
                        sx={{
                          mr: 2,
                          border: '1px solid red',
                          borderRadius: '10px',
                          m: 2,
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        }}
                        onClick={() => handleContactTypeSelect('General Inquiry 1')}
                      >
                        General Inquiry 1
                      </MenuItem>
                      <MenuItem
                        sx={{
                          mr: 2,
                          border: '1px solid red',
                          borderRadius: '10px',
                          m: 2,
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        }}
                        onClick={() => handleContactTypeSelect('General Inquiry 1')}
                      >
                        General Inquiry 1
                      </MenuItem>
                      <MenuItem
                        sx={{
                          mr: 2,
                          border: '1px solid red',
                          borderRadius: '10px',
                          m: 2,
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        }}
                        onClick={() => handleContactTypeSelect('General Inquiry 1')}
                      >
                        General Inquiry 1
                      </MenuItem>
                      <MenuItem
                        sx={{
                          mr: 2,
                          border: '1px solid red',
                          borderRadius: '10px',
                          m: 2,
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        }}
                        onClick={() => handleContactTypeSelect('General Inquiry 1')}
                      >
                        General Inquiry 1
                      </MenuItem>
                      {/* Add onClick handlers to other menu items */}
                    </Grid>
                    <Divider sx={{ borderColor: 'rgba(151, 151, 151, 1)' }} />
                    <Typography variant="body2" sx={{m:2}}>*Select Contact Type</Typography>
                    <Button variant="contained" onClick={handleContactTypeClose}>
                      Apply now
                    </Button>
                  </Menu>
                  {datePickerOpen && (
                    <Box className={Styles.datePickerContainer}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                          value={selectedDate}
                          onChange={handleDateChange}
                          className={Styles.customDateColor}
                        />
                        <Divider />
                        <Typography variant="body2" sx={{ color: '#fff', fontSize: '12px', m: 2 }}>
                          *You can choose multiple dates
                        </Typography>
                        <Button onClick={handleApplyNow} variant="contained" color="primary" sx={{ m: 2, ml: 12 }}>
                          Apply Now
                        </Button>
                      </LocalizationProvider>
                    </Box>
                  )}
                  <Box className={Styles.menuItem}>
                    <Typography variant="body1">Contact Status</Typography>
                    <ArrowDropDownRoundedIcon />
                  </Box>
                  <Box className={Styles.menuItem} onClick={handleResetFilter}>
                    <Box sx={{ color: 'red', flexDirection: 'row', display: 'flex' }}>
                      <RestartAltRoundedIcon />
                      <Typography variant="subtitle1">Reset filter</Typography>
                    </Box>
                  </Box>
                </Box>
                <Button variant="contained">Download Now</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default FilterBox;
