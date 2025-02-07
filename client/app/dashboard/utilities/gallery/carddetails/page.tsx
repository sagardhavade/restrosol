// pages/details.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, Button, List, ListItem, Divider, TextField } from '@mui/material';
import RootLayout from '../../../page'; // Adjust the import path as needed
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Replace from '@/public/images/Replace.png'; // Adjust the import path as needed
import { Trykker } from 'next/font/google';
import { getGallary } from '@/app/api/gallary/page';

const DetailsPage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState({
    brand: 'XYZ Brand',
    subtitle:
      'The Restrosol ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Experts',
    solutionsTitle: 'Highly effective solutions',
    solutionsDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    TestinomialTittle: 'Client Testimonials',
    Testimonialdesc:
      '“A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your companys reputation. highly effective way of establishing credibility and increasing your companys reputatio highly effective way of establishing credibility and increasing your companys reputatio”',
    clientName: 'Client Name',
  });

  const handleEditClick = () => {
    setEditMode((prev) => !prev);
  };
  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, [field]: event.target.value });
  };

  useEffect(() => {
    const fetchGallary = async () => {
      try {
        const fetchData = await getGallary();
        console.log(fetchData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchGallary();
  })
  return (
    <RootLayout>
      <Box sx={{ p: 0, backgroundColor: '#F5F6FA' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            p: 2,
          }}
        >
          <Button
            variant="text"
            sx={{
              fontSize: '18px',
              fontWeight: '700',
            }}
          >{`< Go Back`}</Button>
          <Button
            variant="contained"
            onClick={handleEditClick}
            sx={{ width: '165px', height: '46px', borderRadius: '50px' }}
          >
            {editMode ? 'Save' : 'Edit Gallery'}
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', width: '663px', height: editMode ? '300px' : '171px', ml: '253px' }}>
          <Button color="error">Domestic</Button>
          {editMode ? (
            <TextField
              variant="outlined"
              value={content.brand}
              onChange={handleChange('brand')}
              fullWidth
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography variant="h1" gutterBottom>
              {content.brand}
            </Typography>
          )}
          {editMode ? (
            <TextField
              variant="outlined"
              value={content.subtitle}
              onChange={handleChange('subtitle')}
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
          ) : (
            <Typography variant="subtitle1" gutterBottom width={600} textAlign="center" mx="auto">
              {content.subtitle}
            </Typography>
          )}

          {editMode && <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)', mb: 5 }} />}
          {editMode && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                onClick={handleEditClick}
                sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}
              >
                {editMode ? 'Save' : 'Edit section'}
              </Button>
            </Box>
          )}
        </Box>
        <Box sx={{ backgroundColor: '#FFFFFF' }}>
          <Box
            sx={{
              my: 4,
              display: 'flex',
              justifyContent: 'space-between',
              height: editMode ? '600px' : '526px',
              width: '1140px',
              p: '80px',
            }}
          >
            <Box flexDirection="column" sx={{ width: 'Hug (461.68px)', color: '#6D758F', mt: 9 }}>
              {editMode ? (
                <TextField
                  variant="outlined"
                  value={content.solutionsTitle}
                  onChange={handleChange('solutionsTitle')}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h2" gutterBottom>
                  {content.solutionsTitle}
                </Typography>
              )}
              {editMode ? (
                <TextField
                  variant="outlined"
                  value={content.solutionsDescription}
                  onChange={handleChange('solutionsDescription')}
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="body2" paragraph width={600}>
                  {content.solutionsDescription}
                </Typography>
              )}
              <List sx={{ flexDirection: 'column', fontWeight: '700' }}>
                <ListItem sx={{ mt: -2 }}>
                  <CheckCircleIcon sx={{ color: '#6D758F', height: '16px', fontSize: '16px', mr: 1 }} />
                  We design websites that look amazing.
                </ListItem>
                <ListItem sx={{ mt: -5 }}>
                  <CheckCircleIcon sx={{ color: '#6D758F', height: '16px', fontSize: '16px', mr: 1 }} />
                  We design websites that look amazing.
                </ListItem>
                <ListItem sx={{ mt: -5 }}>
                  <CheckCircleIcon sx={{ color: '#6D758F', height: '16px', fontSize: '16px', mr: 1 }} />
                  We design websites that look amazing.
                </ListItem>
              </List>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <Image
                src={Replace}
                alt="Replace"
                width={466}
                height={366}
                style={{ objectFit: 'contain', borderRadius: '8px' }}
              />
            </Box>
          </Box>
          {editMode && <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />}
          {editMode && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}
              >Edit Section</Button>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: '1135px',
            height: '1887px',
            padding: '80px 0px 0px 0px',
            gap: '54px',
            p: 2,
            // background: '#000',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={Replace} // Replace with the path to your placeholder image
                  alt="Placeholder"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
          {editMode && <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />}
          {editMode && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}
              >Edit Section</Button>
            </Box>
          )}
        </Box>

        <Card
          sx={{
            mt: 10,
            p: 10,
            backgroundColor: '#fff',
            color: '#324A6D',
            width: '1139px',
            height: editMode ? '700px' : '628px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '50px' }}>
            <Image
              src={Replace}
              alt="Replace"
              width={387}
              height={342}
              style={{ objectFit: 'cover', marginTop: '50px' }}
            />
            <Box sx={{ width: '558px', height: '512px' }}>
              {editMode ? (
                <TextField
                  variant="outlined"
                  value={content.TestinomialTittle}
                  onChange={handleChange('Testinomial Tittle')}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h2" gutterBottom>
                  {content.TestinomialTittle}
                </Typography>
              )}
              {editMode ? (
                <TextField
                  variant="outlined"
                  value={content.Testimonialdesc}
                  onChange={handleChange('Testimonialdesc')}
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="body2" fontSize={16} fontWeight={400} fontFamily={'Mulish'} sx={{ mt: 1 }}>
                  {content.Testimonialdesc}
                </Typography>
              )}
              <Box sx={{ display: 'flex', gap: '20px', mt: 2, width: '202px', height: '77px' }}>
                <Image
                  src={Replace}
                  alt="Replace"
                  width={77}
                  height={77}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
                {editMode ? (
                  <TextField
                    variant="outlined"
                    value={content.clientName}
                    onChange={handleChange('brand')}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                ) : (
                  <Typography variant="h5" mt={3} color={'#1C2448'} gutterBottom>
                    {content.clientName}
                  </Typography>
                )}
              </Box>
              <Box sx={{ width: '558px', height: '170px', gap: '20px', opacity: '0px' }}>
                {editMode ? (
                  <TextField
                    variant="outlined"
                    value={content.Testimonialdesc}
                    onChange={handleChange('Testimonialdesc')}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                  />
                ) : (
                  <Typography variant="body2" fontSize={16} fontWeight={400} fontFamily={'Mulish'} sx={{ mt: 1 }}>
                    {content.Testimonialdesc}
                  </Typography>
                )}
                {/* <Typography variant="body2" fontSize={16} fontWeight={400} fontFamily={'Mulish'} sx={{ mt: 1 }}>
                  “A testimonial from a client who benefited from your product or service. Testimonials can be a highly
                  effective way of establishing credibility and increasing your companys reputation.”
                </Typography> */}

                <Box sx={{ display: 'flex', gap: '20px', mt: 2, width: '202px', height: '77px' }}>
                  <Image
                    src={Replace}
                    alt="Replace"
                    width={77}
                    height={77}
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                  {editMode ? (
                    <TextField
                      variant="outlined"
                      value={content.clientName}
                      onChange={handleChange('brand')}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  ) : (
                    <Typography variant="h5" mt={3} color={'#1C2448'} gutterBottom>
                      {content.clientName}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          {editMode && <Divider sx={{ borderColor: 'rgba(203, 188, 135, 1)' }} />}
          {editMode && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}
              >Edit Section</Button>
            </Box>
          )}
        </Card>
      </Box>
    </RootLayout>
  );
};

export default DetailsPage;
