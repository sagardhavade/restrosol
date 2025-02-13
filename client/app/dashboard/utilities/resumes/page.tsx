// pages/jobs/page.tsx
import React from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import JobCard from './components/Jobcard'; // Adjust the import path as necessary
import { jobData } from '../jobpost/component/jobData'; // Adjust the import path as necessary
import dayjs from 'dayjs';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';

const Page = () => {
  const today = dayjs();

  // Filter jobs that are still open
  const openJobs = jobData.filter(job => dayjs(job.closingDate).isAfter(today));

  return (
    <DashboadRootLayout>
      <Container sx={{fontFamily: 'Nunito Sans'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Resumes Applied</Typography>
        </Box>
        <Grid container spacing={3}>
          {openJobs.map((job, index) => (
            <Grid item xs={6} sm={6}  key={index}>
              <JobCard {...job} closed={false} />
            </Grid>
          ))}
        </Grid>
       
      </Container>
    </DashboadRootLayout>
  );
};

export default Page;
