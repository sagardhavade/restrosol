'use client';
import RootLayout from '@/app/dashboard/layout';
import { Box, Typography, Card, CardContent, Grid, Button, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Replace from '@/public/images/Replace.png';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const EditButton = styled(Button)({
  marginTop: '10px',
  borderRadius: '20px',
  textAlign: 'center',
  marginBottom: '10px',
  color:'rgba(203, 188, 135, 1)',
  borderColor:'rgba(203, 188, 135, 1)'
});

const EditArticle: React.FC = () => {
  const handleSaveTo = (): void => {
    alert('Your data have been saved');
  };

  return (
    <>
      <RootLayout>
        <Grid container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4">Article</Typography>
                  <Button variant="contained" onClick={handleSaveTo}>
                    <Typography>&nbsp;</Typography>
                    Save
                  </Button>
                </Box>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Button color="error" variant="outlined">
                    Domestic
                  </Button>
                  <Typography variant="h1" gutterBottom>
                    How Can a Restaurant Consultant Help Improve Menu Development?
                  </Typography>
                  <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />
                  <EditButton variant="outlined">edit section</EditButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                  <CardContent>
                    <Typography variant="h5">Restaurant Building Process for Beginners</Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </Typography>
                  </CardContent>
                  <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />
                  <Box justifyContent={'center'} display={'flex'}>
                    <EditButton variant="outlined">edit section</EditButton>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                      <CardContent>
                        <Typography variant="h5">Restaurant Building Process for Beginners</Typography>
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          Lorem ipsum dolor sit amet,
                        </Typography>
                      </CardContent>
                      <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />
                      <Box justifyContent={'center'} display={'flex'}>
                        <EditButton variant="outlined">edit section</EditButton>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                      <CardContent>
                        <Typography variant="h5">Restaurant Building Process for Beginners</Typography>
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          Lorem ipsum dolor sit amet,
                        </Typography>
                      </CardContent>
                      <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />
                      <Box justifyContent={'center'} display={'flex'}>
                        <EditButton variant="outlined">edit section</EditButton>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                  <CardContent sx={{ display: 'flex' }}>
                    <Box
                      sx={{ width: '100%', flexBasis: { xs: 'auto', md: '50%' }, order: { xs: 2, md: 1 }, mt: 1, p: 5 }}
                    >
                      <Typography variant="h5">We Create Your Dream</Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam
                        sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                        phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur
                        adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum
                        dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                        neque ultrices.
                      </Typography>
                      <Box sx={{ mt: 5, P: 2 }}>
                        <Typography variant="body1">
                          <CheckCircleIcon />
                          We design websites that look amazing.
                        </Typography>
                        <Typography variant="body1">
                          <CheckCircleIcon />
                          We design websites that look amazing.
                        </Typography>
                        <Typography variant="body1">
                          <CheckCircleIcon />
                          We design websites that look amazing.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}
                    >
                      <Image src={Replace} alt="Image" width={500} height={500} />
                    </Box>
                  </CardContent>
                  <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />
                  <Box justifyContent={'center'} display={'flex'}>
                    <EditButton variant="outlined">edit section</EditButton>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
              <CardContent>
                <Typography variant="h5">Design Process for Beginners</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                </Typography>
                <Typography variant="body1" marginTop={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Typography>
              </CardContent>
              <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />
              <Box justifyContent={'center'} display={'flex'}>
                <EditButton variant="outlined">edit section</EditButton>
              </Box>
            </Card>
          </Grid>
          <Box sx={{ mt: 2, ml: '490px' }}>
            <Button variant="contained" onClick={handleSaveTo} >Save..</Button>
          </Box>
        </Grid>
      </RootLayout>
    </>
  );
};

export default EditArticle;
