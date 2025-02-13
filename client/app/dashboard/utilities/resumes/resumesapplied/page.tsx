import DashboadRootLayout from '@/app/components/layout';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Resumes, Resume } from '../components/ResumeData';
import FilterBox from '../components/FilterBox';

const getStatusColor: Record<string, { backgroundColor: string; color: string }> = {
  Qualified: { backgroundColor: '#8ef5e6', color: '#00B69B' },
  'On Hold': { backgroundColor: '#f0c095', color: '#6226EF' },
  Rejected: { backgroundColor: '#f09b95', color: '#f44336' },
};

const ResumesApplied = () => {
  return (
    <DashboadRootLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Resumes Applied</Typography>
      </Box>
      <Grid>
        <FilterBox />
        <TableContainer component={Paper} sx={{ backgroundColor: '#fff' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#000' }}>S No.</TableCell>
                <TableCell sx={{ color: '#000' }}>Name</TableCell>
                <TableCell sx={{ color: '#000' }}>Phone</TableCell>
                <TableCell sx={{ color: '#000' }}>Date</TableCell>
                <TableCell sx={{ color: '#000' }}>Experience</TableCell>
                <TableCell sx={{ color: '#000' }}>Resume</TableCell>
                <TableCell sx={{ color: '#000' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Resumes.map((Resume) => (
                <TableRow key={Resume.id}>
                  <TableCell sx={{ color: '#000' }}>{Resume.id.toString().padStart(2, '0')}</TableCell>
                  <TableCell sx={{ color: '#000' }}>{Resume.name}</TableCell>
                  <TableCell sx={{ color: '#000' }}>{Resume.phone}</TableCell>
                  <TableCell sx={{ color: '#000' }}>{Resume.date}</TableCell>
                  <TableCell sx={{ color: '#000' }}>{Resume.experience}</TableCell>
                  <TableCell sx={{ color: '#000' }}>
                    <Button
                      variant="outlined"
                      color="error"
                      href={``}
                      sx={{
                        fontSize: '12px',
                        px: '4px',
                        backgroundColor: '#f294a0',
                        border: 'none',
                        width: '93px',
                        '&:hover': {
                          backgroundColor: '#f294a0',
                          border: 'none',
                          // color: '#fff',
                        },
                      }}
                    >
                      {Resume.resume}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        px: '4px',
                        fontSize: '12px',
                        backgroundColor: getStatusColor[Resume.status]?.backgroundColor || '#666',
                        color: getStatusColor[Resume.status]?.color || '#000',
                        '&:hover': {
                          backgroundColor: getStatusColor[Resume.status]?.backgroundColor || '#666',
                          // color: '#fff',
                        },
                        border: 'none',
                        borderRadius: '5px',
                        width: '110pxpx',
                        height: '32px',
                      }}
                    >
                      {Resume.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </DashboadRootLayout>
  );
};

export default ResumesApplied;
