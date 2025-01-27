'use client';
import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { Box, Button, Divider, Grid, Paper, Typography, Menu, MenuItem } from '@mui/material';
import Styles from '@/app/dashboard/utilities/planform/FilterBox.module.css';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

const FilterBox = () => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedContactType, setSelectedContactType] = useState<string>(''); // State to track selected contact type

  const dateRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
      setDatePickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: '#fff', fontFamily: 'Nunito Sans', }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Box className={Styles.filterBoxContainer}>
              <Box className={Styles.filterMenu}>
                <Box className={Styles.filterMenuItems}>
                  <Box className={Styles.menuItem}>
                    <FilterAltRoundedIcon />
                    <Typography variant="subtitle1" sx={{fontSize:'14px',fontWeight:'700'}}>Filter by</Typography>
                  </Box>
                  <Box className={Styles.menuItem} onClick={handleDateClick}>
                    <Typography variant="body1" sx={{fontSize:'14px',fontWeight:'700'}}>{selectedDate ? selectedDate.format('DD-MM-YYYY') : 'Date'}</Typography>
                    <ArrowDropDownRoundedIcon />
                  </Box>
                  <Box className={Styles.menuItem} onClick={handleContactTypeClick}>
                    <Typography variant="body1" sx={{fontSize:'14px',fontWeight:'700'}}>{selectedContactType || 'Contact Type'}</Typography>
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
                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h5" sx={{fontSize:'14px',fontWeight:'700'}}>Select Contact Type</Typography>
                      <Grid container className={Styles.outlinedButton}>
                        <MenuItem
                          sx={{
                            mr: 2,
                            border: '1px solid #979797',
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
                            border: '1px solid #979797',
                            borderRadius: '10px',
                            m: 2,
                            '&:hover': {
                              backgroundColor: 'gray',
                            },
                          }}
                          onClick={() => handleContactTypeSelect('General Inquiry 2')}
                        >
                          General Inquiry 2
                        </MenuItem>
                        <MenuItem
                          sx={{
                            mr: 2,
                            border: '1px solid #979797',
                            borderRadius: '10px',
                            m: 2,
                            '&:hover': {
                              backgroundColor: 'gray',
                            },
                          }}
                          onClick={() => handleContactTypeSelect('General Inquiry 3')}
                        >
                          General Inquiry 3
                        </MenuItem>
                        {/* Add onClick handlers to other menu items */}
                      </Grid>
                      <Divider sx={{ borderColor: '#A9A9A95D', top: '456px', mt: 10 }} />
                      <Typography variant="body2" sx={{ m: 2 }}>*Select Contact Type</Typography>
                      <Button variant="contained" onClick={handleContactTypeClose}>
                        Apply now
                      </Button>
                    </Grid>
                  </Menu>
                  {datePickerOpen && (
                    <Box ref={dateRef} className={Styles.datePickerContainer}>
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
                    <Typography variant="body1" sx={{fontSize:'14px',fontWeight:'700'}}>Contact Status</Typography>
                    <ArrowDropDownRoundedIcon />
                  </Box>
                  <Box className={Styles.menuItem} onClick={handleResetFilter}>
                    <Box sx={{ color: 'red', flexDirection: 'row', display: 'flex' }}>
                      <RestartAltRoundedIcon />
                      <Typography variant="subtitle1" sx={{fontSize:'14px',fontWeight:'700',lineHeight:'19.1px'}}>Reset filter</Typography>
                    </Box>
                  </Box>
                </Box>
                <Button variant="contained" sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}> <CloudDownloadOutlinedIcon sx={{mr:2}} />  Download Now</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default FilterBox;
