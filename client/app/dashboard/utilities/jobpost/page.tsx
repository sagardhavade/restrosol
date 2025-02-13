'use client';

import React, { useState, useEffect } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import JobCard from './component/jobcard'; // Adjust the import path as necessary
import { jobData } from './component/jobData'; // Adjust the import path as necessary
import dayjs from 'dayjs';
import JobForm from './component/JobForm'; // Adjust the import path as necessary
import { getJobPosts, updateJobPost, createJobPost } from '../../../api/jobPost/jobpostApi';
const Page: React.FC = () => {
  const [showJobForm, setShowJobForm] = useState<boolean>(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [editingJob, setEditingJob] = useState<any | null>(null);

  const today = dayjs();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobPosts();
        // console.log("API Response:", response);
        setJobs(response || []); // Ensure a default empty array
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]); // Handle errors gracefully
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs that are still open
  const openJobs = jobs.filter((job) => dayjs(job.closingDate).isAfter(today));

  // Filter jobs that are closed
  const closedJobs = jobs.filter((job) => !dayjs(job.closingDate).isAfter(today));

  // Handle "Add Job" button click
  const handleAddJob = (): void => {
    setShowJobForm(true);
    setEditingJob(null);
  };
  // Handle saving a new job
  const handleSaveJob = async (newJob: any): Promise<void> => {
    try {
      if (editingJob) {
        // Update existing job
        const response = await updateJobPost(`${editingJob.id}`, newJob);
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === editingJob.id ? response.data : job))
        );
      } else {
        // Add new job
        const response = await createJobPost(newJob);
        setJobs([...jobs, response.data]);
      }
      setShowJobForm(false);
      setEditingJob(null);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  // Handle cancelling the job form
  const handleCancelJob = (): void => {
    setShowJobForm(false);
    setEditingJob(null);
  };

  // Handle editing a job
  const handleEditJob = (job: any): void => {
    setEditingJob(job);
    setShowJobForm(true);
  };


  return (
    <DashboadRootLayout>
      <Container sx={{ fontFamily: 'Nunito Sans' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Job Posts</Typography>
          <Button variant="contained" onClick={handleAddJob} sx={{
            borderRadius: '20px',
            height: '46px',
            width: '202px',
            backgroundColor: '#CBBC87',
            border: '1px',
          }}>
            + Add Jobs
          </Button>
        </Box>

        {showJobForm && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <JobForm onSave={handleSaveJob} onCancel={handleCancelJob} />
            </Grid>
          </Grid>
        )}

        <Typography variant="h4" sx={{ mb: 3 }}>Open Job Posts</Typography>
        <Grid container spacing={3}>

          {openJobs.map((job, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <JobCard job={job} closed={false} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Closed Job Posts</Typography>
        <Grid container spacing={3}>
          {closedJobs.map((job, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <JobCard job={job} closed={true} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </DashboadRootLayout>
  );
};

export default Page;
