import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, Link } from '@mui/material';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';

interface JobCardProps {
  postedOn: string;
  title: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
  closed?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  postedOn,
  title,
  location,
  department,
  description,
  requirements,
  closed = false,
}) => {
  return (
    <section style={{ position: 'relative', marginBottom: 16, width: '100%' }}>
      {closed && (
        <div
          style={{
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
          width: '100%',
        }}
      >
        <CardContent>
          <Typography variant="body2" color="textSecondary" gutterBottom sx={{ color: '#000' }}>
            Posted On: {postedOn}
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
            <Typography
              variant="body2"
              sx={{ backgroundColor: '#000', borderRadius: '10px', padding: '4px 8px', color: '#fff' }}
            >
              Location: {location}
            </Typography>
            <Typography
              variant="body2"
              sx={{ backgroundColor: '#000', borderRadius: '10px', padding: '4px 8px', color: '#fff' }}
            >
              Department: {department}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              About This Job
            </Typography>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              Requirements & Qualifications
            </Typography>
            <ul style={{display:'flex',flexDirection:'column'}}>
              {requirements.map((req, index) => (
                <li key={index} style={{display: 'flex', alignItems: 'left',marginBottom:1}}>
                  <BusinessCenterRoundedIcon sx={{ marginRight: 1 }}  />
                  <Typography variant="body2">{req}</Typography>
                </li>
              ))}
            </ul>
          </Box>
          <Grid container spacing={2}>
            <Grid item>
              <Link href="/dashboard\utilities\resumes\resumesapplied" underline="none">
                <Button variant="outlined" color="primary">
                  View Resumes
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
};

export default JobCard;
