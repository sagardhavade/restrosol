'use client';
import React from 'react';
import DashboardLayout from '@/app/components/layout';
import { Box, Button, TextField, MenuItem, Paper, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import userImage from '@/public/images/userDemo.jpg';
import Image from 'next/image';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: 'black', // Set text color to black
        },
      },
    },
  },
});

const Setting: React.FC = () => {
  const initialFormState = {
    firstName: 'Kevin',
    lastName: 'Fleming',
    email: 'joskolski.brent@yahoo.com',
    phoneNumber: '546-933-2772',
    dateOfBirth: '1995-11-08',
    gender: 'Female',
  };

  const [formState, setFormState] = React.useState(initialFormState);
  const [disabled, setDisabled] = React.useState(true); // Initially, fields are disabled

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formState);
    setDisabled(true); // Disable fields again after submission
  };

  const handleEditClick = () => {
    setDisabled(false); // Enable fields when Edit button is clicked
  };

  const handleCancelClick = () => {
    setFormState(initialFormState); // Reset form to initial state
    setDisabled(true); // Disable fields again
  };

  return (
    <>
      <DashboardLayout  >
        <Box sx={{fontFamily: 'Nunito Sans'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, }}>
          <Typography variant="h4">Achievement</Typography>
          <Button variant="contained" color="primary">
            + Add Achievement
          </Button>
        </Box>
        <ThemeProvider theme={theme}>
          <Paper elevation={3} sx={{ mt: 1, p: 2, height: '744px', width: '1140px', top: '171px' }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '780px',
                margin: 'auto',
                height: '508px',
                top: '231px',
              }}
            >
              <Image
                alt="Profile Picture"
                src={userImage}
                width={100}
                height={100}
                style={{ margin: 'auto', marginBottom: 2, borderRadius: '50px' }}
              />
              <Button component="label" sx={{ marginBottom: 2 }}>
                Edit Photo
                <input type="file" hidden />
              </Button>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#ADADAD', fontWeight: 400 }}>First Name</Typography>
                  <TextField
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    disabled={disabled} // Use the disabled state variable
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#ADADAD', fontWeight: 400 }}>Last Name</Typography>
                  <TextField
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    disabled={disabled} // Use the disabled state variable
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#ADADAD', fontWeight: 400 }}>Your email</Typography>
                  <TextField
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    type="email"
                    disabled={disabled} // Use the disabled state variable
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#ADADAD', fontWeight: 400 }}>Phone Number</Typography>
                  <TextField
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    type="tel"
                    disabled={disabled} // Use the disabled state variable
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#ADADAD', fontWeight: 400 }}>Date of Birth</Typography>
                  <TextField
                    name="dateOfBirth"
                    value={formState.dateOfBirth}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled={disabled} // Use the disabled state variable
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '14px', color: '#ADADAD', fontWeight: 400 }}>Gender</Typography>
                  <TextField
                    name="gender"
                    value={formState.gender}
                    onChange={handleInputChange}
                    margin="normal"
                    fullWidth
                    select
                    disabled={disabled} // Use the disabled state variable
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              {disabled ? (
                <Button
                  variant="contained"
                  onClick={handleEditClick}
                  sx={{ marginTop: 2, backgroundColor: 'rgba(203, 188, 135, 1)', width: '229px', left: '285px' }}
                >
                  Edit
                </Button>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '200px', ml: 25 }}>
                  <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                      marginTop: 2,
                      Color: 'rgba(203, 188, 135, 1)',
                      borderRadius: '20px',
                      borderColor: 'rgba(203, 188, 135, 1)',
                      color: 'rgba(203, 188, 135, 1)',
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleCancelClick}
                    sx={{ marginTop: 2, borderRadius: '20px' }}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </Box>
          </Paper>
        </ThemeProvider>
        </Box>
      </DashboardLayout >
    </>
  );
};

export default Setting;
