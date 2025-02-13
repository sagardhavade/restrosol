// pages/details.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, Button, List, ListItem, Divider, TextField } from '@mui/material';
import DashboadRootLayout from '@/app/components/layout';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Replace from '@/public/images/Replace.png'; // Adjust the import path as needed
import { Trykker } from 'next/font/google';
import { getGallary } from '@/app/api/gallary/pageApi';
import { ArrowBack } from '@mui/icons-material';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
const DetailsPage: React.FC = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id'); // Retrieve the 'id' query parameter from the URL
  console.log('Product ID:', id);  // Log the ID to verify

  const [editMode, setEditMode] = useState(false);

  const [content, setContent] = useState({
    category: '',
    brand: '',
    subtitle: '',
    solutionsTitle: '',
    solutionsDescription: '',
    TestinomialTittle: '',
    Testimonialdesc: ''

  });
  const [points, setPoints] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [clientName, setClientName] = useState<string[]>([]);
  const [clientImage, setClientImage] = useState<string[]>([]);
  const [clientSectionImage, setClientSectionImage] = useState<string[]>([]);
  const [sectionImage, setSectionImage] = useState<string[]>([]);
  const handleEditClick = () => {
    setEditMode((prev) => !prev);
  };
  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, [field]: event.target.value });
  };


  const handleGoBack = () => {
    window.history.back(); // This will go back to the previous page
  };

    // Function to fetch gallery data
 
    // useEffect with an empty dependency array to ensure the fetchGallary function runs only once
    useEffect(() => {

      const fetchGallary = async () => {
        try {
          const fetchData = await getGallary(); // Replace with your actual fetch function
          console.log(fetchData);
    
          if (id) {
            const matchedItem = fetchData.find((item: any) => item.id === id); // Find the item by id
            console.log("didsf",matchedItem);
            if (matchedItem) {
              setContent({
                category: matchedItem.category || '',
                brand: matchedItem.brandName || '',
                subtitle: matchedItem.brandDescription || '',
                solutionsTitle: 'Highly effective solutions',
                solutionsDescription: matchedItem.solutionsDescription || '',
                TestinomialTittle: 'Client Testimonials',
                Testimonialdesc: matchedItem.clientDescription || '',
              });
              setPoints(matchedItem.points || []);
              setImages(matchedItem.images || []);
              setClientName(matchedItem.clientName || []);
              setClientImage(matchedItem.clientImage || []);
              setSectionImage(matchedItem.sectionImage || []);
              setClientSectionImage(matchedItem.clientSectionImage || []);
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchGallary(); // Call the fetch function once on mount
    }, []); // Empty array ensures it runs only once when the component mounts
  
  return (
    <DashboadRootLayout>
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
            variant="outlined"
            sx={{
              fontSize: '18px',
              fontWeight: '700',
              color: 'blue'
            }}
            onClick={handleGoBack}
          >
            <ArrowBack />
            {` Go Back`}</Button>
          {/* <Button
            variant="contained"
            onClick={handleEditClick} 
            sx={{ width: '165px', height: '46px', borderRadius: '50px' }}
          >
            {editMode ? 'Save' : 'Edit Gallery'}
          </Button> */}
           <Link href={{ pathname: '/dashboard/utilities/gallery/addBrand', query: { id:id } }} passHref>
                  <Button size="small" component="a">
                    Edit Gallery
                    {/* <ArrowRightAltOutlinedIcon sx={{ color: '#000' }} /> */}
                  </Button>
                </Link>
        </Box>
        <Box sx={{ textAlign: 'center', width: '663px', height: editMode ? '300px' : '171px', ml: '253px' }}>
          <Button color="error">{content.category}</Button>
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
                {points
                  .join(',')  // Join the array into a single string
                  .split(',') // Split by comma into individual items
                  .map((point, index) => (
                    <ListItem key={index} sx={{ mt: -2 }}>
                      <CheckCircleIcon sx={{ color: '#6D758F', height: '16px', fontSize: '16px', mr: 1 }} />
                      {point.trim()} {/* Trim to remove any extra spaces */}
                    </ListItem>
                  ))}
              </List>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <Image
                src={sectionImage[0]}
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


        <Grid container spacing={2}>
          {images.map((imageSrc, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
                <Image
                  src={imageSrc}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          ))}
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
        {/* </Box> */}

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
              src={clientSectionImage[0]}
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
              <Typography variant="body2" fontSize={16} fontWeight={400} fontFamily={'Mulish'} sx={{ mt: 1 }}>
                  “A testimonial from a client who benefited from your product or service. Testimonials can be a highly
                  effective way of establishing credibility and increasing your companys reputation.”
                </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt: 2 }}>
              {clientImage.length === clientName.length && clientImage.map((imageSrc, index) => (
                  <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }} key={index}>
                    <Image
                      src={imageSrc}
                      alt={`Image ${index + 1}`}
                      width={77}
                      height={77}
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                    {editMode ? (
                      <TextField
                        variant="outlined"
                        value={clientName}
                        onChange={handleChange('clientName')}
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                    ) : (
                      <Typography variant="h5" color={'#1C2448'} gutterBottom>
                        {clientName[index].trim()} {/* Displaying client name */}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
              <Box sx={{ width: '558px', height: '170px', gap: '20px', opacity: '0px' }}>
                {/* {editMode ? (
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
                )} */}
                {/* <Typography variant="body2" fontSize={16} fontWeight={400} fontFamily={'Mulish'} sx={{ mt: 1 }}>
                  “A testimonial from a client who benefited from your product or service. Testimonials can be a highly
                  effective way of establishing credibility and increasing your companys reputation.”
                </Typography> */}

               
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
    </DashboadRootLayout>
  );
};

export default DetailsPage;
