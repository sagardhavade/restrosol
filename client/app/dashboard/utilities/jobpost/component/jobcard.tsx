'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import { getJobPosts, updateJobPost } from '../../../../api/jobPost/jobpostApi';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

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

interface Job {
  id: string,
  dateCreated: string;
  jobTitle: string;
  location: string;
  department: string;
  aboutThisJob: string;
  closingDate: Dayjs | null; // Reflect Dayjs type for compatibility with DateTimePicker
  requirements: string[];
}

interface JobCardProps {
  job: Job;
  closed?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, closed = false }) => {

  // const [jobPosts, setJobPosts] = useState([]);
  const [jobPosts, setJobPosts] = useState<Job[]>([]);
  const [isEditing,  setIsEditing] = useState(false);
  // const [jobData, setJobData] = useState<Job>(job);
  const [jobData, setJobData] = useState<Job>({
    ...job,
    closingDate: job.closingDate ? dayjs(job.closingDate) : null,
  });

  const [closingDate, setClosingDate] = useState<Dayjs | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getJobPosts();
        console.log(posts);
        setJobPosts(posts);
      } catch (error) {
        console.error('Error fetching job posts:', error);
      }
    };

    fetchData();
  }, []);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Dayjs | null,
    name?: string
  ) => {
    if (e && typeof (e as ChangeEvent<HTMLInputElement>).target === 'object') {
      // Handle standard input events
      const { name, value } = (e as ChangeEvent<HTMLInputElement>).target;
      setJobData((prev) => ({ ...prev, [name]: value }));
    } else if (name) {
      // Handle DateTimePicker events
      setJobData((prev) => ({ ...prev, [name]: e }));
    }
  };


  const handleRequirementChange = (index: number, value: string) => {
    setJobData((prev) => {
      const newRequirements = [...prev.requirements];
      newRequirements[index] = value;
      return { ...prev, requirements: newRequirements };
    });
  };

  const handleAddRequirement = () => {
    setJobData((prev) => ({ ...prev, requirements: [...prev.requirements, ''] }));
  };


// Handle the save of all job data (including closing date if changed)
const handleSave = async (updatedJobData: Job) => {
  console.log('Job post updated:');
  try {
    const response = await updateJobPost(updatedJobData.id, updatedJobData);
    console.log('Job post updated:', response);
    setIsEditing(false); // Exit edit mode after saving
    window.location.reload();

  } catch (error) {
    console.error('Error updating job post:', error);
  }
};

// Handle closing the job (update only the closing date)
const handleCloseJob = () => {
  setJobData((prev) => {
    const updatedJobData: Job = {
      ...prev, // Keep all existing job data
      closingDate: dayjs(), // Update only the closingDate
    };

    // Call handleSave with updated data (including the new closingDate)
    handleSave(updatedJobData);

    return updatedJobData;
  });
};

// Handle when the "Save" button is clicked
const handleSaveJob = () => {
  // Save all job data (including the closingDate if modified)
  handleSave(jobData);
};


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative', mb: 2, width: '100%' }}>
        {closed && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(128, 128, 128, 0.7)',
              zIndex: 1,
              borderRadius: 2,
            }}
          />
        )}
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            padding: 2,
            backgroundColor: closed ? 'rgba(255, 255, 255, 0.5)' : '#fff',
            color: '#000',
            position: 'relative',
            zIndex: 0,
          }}
        >
          <CardContent>
            {isEditing ? (
              <>
                <TextField
                  label="Posted On"
                  name="dateCreated"
                  value={jobData.dateCreated}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Title"
                  name="jobTitle"
                  value={jobData.jobTitle}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Location"
                  name="location"
                  value={jobData.location}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Department"
                  name="department"
                  value={jobData.department}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Description"
                  name="aboutThisJob"
                  value={jobData.aboutThisJob}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                />
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Closing Date"
                    value={jobData.closingDate}
                    onChange={(newValue) =>
                      setJobData((prev) => ({
                        ...prev,
                        closingDate: newValue,
                      }))
                    }
                    slots={{
                      textField: TextField, // Specify the TextField component
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        margin: 'normal',
                      },
                    }}
                  />
                </LocalizationProvider>

                <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 2 }}>
                  Requirements & Qualifications
                </Typography>
                {jobData.requirements.map((req, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <BusinessCenterIcon sx={{ marginRight: 1 }} />
                    <TextField
                      label={`Requirement ${index + 1}`}
                      value={req}
                      onChange={(e) => handleRequirementChange(index, e.target.value)}
                      fullWidth
                      margin="normal"
                    />
                  </Box>
                ))}
                <Button
                  variant="outlined"
                  onClick={handleAddRequirement}
                  sx={{
                    marginTop: 1,
                    borderRadius: '20px',
                    borderColor: '#1C2448',
                    color: '#1C2448',
                    height: '28px',
                    width: '121px',
                    fontSize: '10px',
                    '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
                  }}
                >
                  + Add Point
                </Button>
              </>
            ) : (
              <>
                <Typography variant="body2" color="textSecondary" gutterBottom sx={{ color: '#000' }}>
                  Posted On: {jobData.dateCreated}
                </Typography>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {jobData.jobTitle}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ backgroundColor: '#000', borderRadius: '10px', padding: '4px 8px', color: '#fff' }}
                  >
                    Location: {jobData.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ backgroundColor: '#000', borderRadius: '10px', padding: '4px 8px', color: '#fff' }}
                  >
                    Department: {jobData.department}
                  </Typography>
                </Box>
                <Box my={2}>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    About This Job
                  </Typography>
                  <Typography variant="body1" component="p">
                    {jobData.aboutThisJob}
                  </Typography>
                </Box>
                <Box my={2}>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    Requirements & Qualifications
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {jobData.requirements.map((req, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <BusinessCenterIcon sx={{ marginRight: 1 }} />
                        <Typography variant="body2">
                          {req}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </>
            )}
            <Grid container spacing={2}>
              {isEditing ? (
                <>
                  <Grid item sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(203, 188, 135, 1)',
                        borderRadius: '20px',
                        color: 'rgba(203, 188, 135, 1)',
                        '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
                      }}
                      onClick={handleSaveJob}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(203, 188, 135, 1)',
                        borderRadius: '20px',
                        color: 'rgba(203, 188, 135, 1)',
                        '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
                      }}
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(203, 188, 135, 1)',
                        borderRadius: '20px',
                        color: 'rgba(203, 188, 135, 1)',
                        '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
                      }}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Post
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(203, 188, 135, 1)',
                        borderRadius: '20px',
                        color: 'rgba(203, 188, 135, 1)',
                        '&:hover': { borderColor: 'rgba(203, 188, 135, 1)' },
                      }}
                      onClick={handleCloseJob} // Call handleCloseJob when clicked
                      >
                      Close Job
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default JobCard;
