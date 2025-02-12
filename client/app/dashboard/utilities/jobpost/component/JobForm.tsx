import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, Snackbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { createJobPost } from '../../../../api/jobPost/jobpostApi';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#CBBC87',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#CBBC87',
          },
        },
        containedSecondary: {
          backgroundColor: '#CBBC87',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#CBBC87',
          },
        },
      },
    },
  },
});

interface JobFormProps {
  onSave: (job: any) => void;
  onCancel: () => void;
}

const JobForm: React.FC<JobFormProps> = ({ onSave, onCancel }) => {
  const [jobTitle, setJobTitle] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [aboutThisJob, setAboutThisJob] = useState<string>('');
  const [requirements, setRequirements] = useState<string[]>(['']);
  // const [closingDate, setClosingDate] = useState<string>('');
  const [closingDate, setClosingDate] = useState<Dayjs | null>(null);

  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state

  const handleRequirementChange = (index: number, value: string): void => {
    const newRequirements = [...requirements];
    newRequirements[index] = value;
    setRequirements(newRequirements);
  };

  const addRequirement = (): void => {
    setRequirements([...requirements, '']);
  };

  const removeRequirement = (index: number): void => {
    const newRequirements = [...requirements];
    newRequirements.splice(index, 1);
    setRequirements(newRequirements);
  };

  const createJobPost1 = async (job: any) => {

    try {

      const response = await createJobPost(job);
      console.log('Job Post Created:', response);
      onSave(response); // Call onSave with the response data after successful creation
      clearForm(); // Clear form data
      setOpenSnackbar(true); // Show success message
    } catch (error) {
      console.error('Error creating job post:', error);
    }
  };

  const handleSubmit = () => {
    const newJob = {
      jobTitle,
      location,
      department,
      aboutThisJob,
      requirements,
      //closingDate: new Date().toISOString(), // For simplicity, use the current date as the closing date
      closingDate,
    };
    createJobPost1(newJob);
  };
  const clearForm = () => {
    setJobTitle('');
    setLocation('');
    setDepartment('');
    setAboutThisJob('');
    setRequirements(['']);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // Close the snackbar when done
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mb: 4,
          width: '560px',
          height: '700px',
          borderRadius: '16px',
          p: '40px',
          gap: '40px',
          border: '1px solid rgba(128, 128, 128, 0.7)',
        }}
      >

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              sx={{
                width: '480px',
                height: 'Hug (56px)',
                p: '10px',
                gap: '10px',
                '.MuiInputBase-input': {
                  color: '#000',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 1 }}>
                Location :
              </Typography>
              <TextField
                variant="standard"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete='off'
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  height: '30px',
                  width: '105px',
                  // borderRadius: '60px',
                  '& .MuiInputBase-input': {
                    color: '#fff', // Set input text color to white
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 1 }}>
                Department :
              </Typography>
              <TextField
                variant="standard"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                autoComplete='off'
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  height: '30px',
                  width: '105px',
                  // borderRadius: '40px',
                  '& .MuiInputBase-input': {
                    color: '#fff', // Set input text color to white
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2, fontSize: '20px', fontWeight: '600' }}>
              About This Job
            </Typography>
            <TextField
              fullWidth
              rows={4}
              label="About This Job"
              value={aboutThisJob}
              onChange={(e) => setAboutThisJob(e.target.value)}
              sx={{ height: '44px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2, fontSize: '20px', fontWeight: '600' }}>
              Closing Date
            </Typography>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Closing Date"
                value={closingDate}
                onChange={(newDate) => setClosingDate(newDate)}
              />

            </LocalizationProvider>


          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '20px', fontWeight: '600' }}>Requirements & Qualifications</Typography>
            <Box sx={{ maxHeight: '128px', overflowY: 'auto' }}>
              {requirements.map((req, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessCenterRoundedIcon />
                  <TextField
                    fullWidth
                    label={`Requirement ${index + 1}`}
                    value={req}
                    onChange={(e) => handleRequirementChange(index, e.target.value)}
                    sx={{ mr: 2, height: '44px' }}
                  />
                  <CancelRoundedIcon
                    onClick={() => removeRequirement(index)}
                    sx={{ cursor: 'pointer', color: '#6D758F' }}
                  />
                </Box>
              ))}
            </Box>
            <Button
              variant="outlined"
              onClick={addRequirement}
              sx={{ borderColor: '#1C2448', color: '#000', borderRadius: '20px', mt: 2 }}
            >
              + Add Point
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', mt: 3 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
            sx={{
              borderColor: '#CBBC87',
              color: '#CBBC87',
              borderRadius: '20px',
              mr: 2,
              '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
            }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onCancel}
            sx={{
              borderColor: '#CBBC87',
              color: 'red',
              borderRadius: '20px',
              '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Job Post Created"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Position it at the bottom-right corner
        sx={{
          '.MuiSnackbarContent-root': {
            backgroundColor: '#4caf50', // Green color
            color: '#fff', // White text color
          },
        }}

      />

    </ThemeProvider>
  );
};

export default JobForm;
