'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, TextField, Divider,List,ListItem } from '@mui/material';
import Image from 'next/image';
import Replace from '@/public/images/Replace.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DashboadRootLayout from '@/app/components/layout';
import Comments from './Comments';
import { useSearchParams } from 'next/navigation'
import { getBlog } from '@/app/api/blog/pageApi';
import Link from 'next/link';
// import { useRouter } from 'next/router';
const BlogPostDetails: React.FC = () => {

  const searchParams = useSearchParams()
  const id = searchParams.get('id'); // Retrieve the 'id' query parameter from the URL
  // const { id } = searchParams(); // Access the dynamic parameter
  // const router = useRouter();
  // const { id } = router.query; // Access the dynamic `id` from the URL
  
  console.log('Product ID:', id);  // Log the ID to verify
  const [content, setContent] = useState({
    category: '',
    title: '',
    description: '',
    sectionDecription: '',
    section1Title: '',
    section1Decription: '',
    section2Title: '',
    section2Decription: '',
    section3Title: '',
    section3Decription: '',
    section4Title: '',
    section4Decription: ''

  });
  const [points, setPoints] = useState<string[]>([]);
  const [sectionImage, setSectionImage] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [articleTitle, setArticleTitle] = useState<string>(
    'How Can a Restaurant Consultant Help Improve Menu Development?',
  );
  const [articleContent, setArticleContent] = useState<string>(
    'Restaurant Building Process for Beginners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  );
  const [sectionContent, setSectionContent] = useState<string>(
    'Restaurant Building Process for Beginners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  );

  const handleEditArticle = (): void => {
    setIsEditMode(!isEditMode); // Toggle edit mode
  };

  // Function to fetch gallery data
 
  // useEffect with an empty dependency array to ensure the fetchGallary function runs only once
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchData = await getBlog(); // Replace with your actual fetch function
        console.log(fetchData);
  
        if (id) {
          const matchedItem = fetchData.find((item: any) => item.id === id); // Find the item by id
          console.log("didsf", matchedItem);
          if (matchedItem) {
            setContent({
              category: matchedItem.category || '',
              title: matchedItem.title || '',
              description: matchedItem.decription || '',
              sectionDecription: matchedItem.sectionDecription || '',
              section1Title: matchedItem.section1Title || '',
              section1Decription: matchedItem.section1Decription || '',
              section2Title: matchedItem.section2Title || '',
              section2Decription: matchedItem.section2Decription || '',
              section3Title: matchedItem.section3Title || '',
              section3Decription: matchedItem.section3Decription || '',
              section4Title: matchedItem.section4Title || '',
              section4Decription: matchedItem.section4Decription || '',
            });
            setPoints(matchedItem.points || []);
            setSectionImage(matchedItem.sectionImage);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog(); // Call the fetch function once on mount
  }, []); // Empty array ensures it runs only once when the component mounts



  return (
    <DashboadRootLayout>
      <Grid container maxWidth="lg" bgcolor={'#F5F6FA'} p={2}>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4">Article</Typography>
                <Link href={{ pathname: '/dashboard/utilities/blog/addBrand', query: { id: id } }} passHref>
                  <Button
                    variant="contained"
                    onClick={handleEditArticle}
                    sx={{
                      borderRadius: '20px',
                      height: '46px',
                      width: '202px',
                      backgroundColor: '#CBBC87',
                      border: '1px',
                    }}
                  >
                    {isEditMode ? 'Save' : 'Edit Article'}
                  </Button>
                </Link>
              </Box>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Button color="error" variant="outlined">
                  {content.category}
                </Button>
                {isEditMode ? (
                  <>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={content.title}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      sx={{ mb: 2, borderColor: '#000' }}
                      InputProps={{
                        style: { color: 'black', borderColor: '#000' },
                      }}
                    />
                    <Divider sx={{ borderColor: '#000' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button variant="outlined" sx={{ mt: 2, borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87' }}>
                        Edit Title
                      </Button>
                    </Box>
                  </>
                ) : (
                  <Typography variant="h1" gutterBottom>
                    {content.title}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                <CardContent>
                  {isEditMode ? (
                    <>
                      <TextField
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={content.section1Title}
                        onChange={(e) => setArticleContent(e.target.value)}
                        sx={{ mb: 2 }}
                        InputProps={{
                          style: { color: 'black' },
                        }}
                      />
                      <Divider sx={{ borderColor: '#000' }} />
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" sx={{ mt: 2, borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87' }}>
                          Edit Content
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography variant="h5">{content.section1Title}</Typography>
                      <Typography variant="body1">{content.section1Decription}</Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                    <CardContent>
                      {isEditMode ? (
                        <>
                          <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={sectionContent}
                            onChange={(e) => setSectionContent(e.target.value)}
                            sx={{ mb: 2 }}
                            InputProps={{
                              style: { color: 'black' },
                            }}
                          />
                          <Divider sx={{ borderColor: '#000' }} />
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="outlined" sx={{ mt: 2, borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87' }}>
                              Edit Section
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Typography variant="h5">{content.section2Title}</Typography>
                          <Typography variant="body1">{content.section2Decription}</Typography>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
                    <CardContent>
                      {isEditMode ? (
                        <>
                          <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={sectionContent}
                            onChange={(e) => setSectionContent(e.target.value)}
                            sx={{ mb: 2 }}
                            InputProps={{
                              style: { color: 'black' },
                            }}
                          />
                          <Divider sx={{ borderColor: '#000' }} />
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="outlined" sx={{ mt: 2, borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87' }}>
                              Edit Section
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Typography variant="h5">{content.section3Title}</Typography>
                          <Typography variant="body1">{content.section3Decription}</Typography>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', backgroundColor: '#fff', color: '#000' }}>
                <Box sx={{ width: '100%', flexBasis: { xs: 'auto', md: '50%' }, order: { xs: 2, md: 1 }, mt: 1, p: 5 }}>
                  {isEditMode ? (
                    <>
                      <TextField
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={6}
                        defaultValue="We Create Your Dream. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
                        sx={{ mb: 2 }}
                        InputProps={{
                          style: { color: 'black' },
                        }}
                      />
                      <Box sx={{ mt: 5, p: 2 }}>
                        <Typography variant="body1">
                          <CheckCircleIcon /> We design websites that look amazing.
                        </Typography>
                        <Typography variant="body1">
                          <CheckCircleIcon /> We design websites that look amazing.
                        </Typography>
                        <Typography variant="body1">
                          <CheckCircleIcon /> We design websites that look amazing.
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: '#000' }} />
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" sx={{ mt: 2, borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87' }}>
                          Edit Section
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography variant="h5">We Create Your Dream</Typography>
                      <Typography variant="body1">
                        {content.sectionDecription}
                      </Typography>
                      <Box sx={{ mt: 5, p: 2 }}>
                        {/* {(points?.[0] || "").split(",").map((item, index) => (
                          <Typography variant="body1" key={index}>
                            <CheckCircleIcon sx={{ marginRight: 1, color: "green" }} /> {item.trim()}
                          </Typography>
                        ))} */}
                        <List sx={{ flexDirection: 'column', fontWeight: '700' }}>
                          {points
                            .join(',')  // Join the array into a single string
                            .split(',') // Split by comma into individual items
                            .map((point, index) => (
                              <ListItem key={index} sx={{ mt: -2 }}>
                                <CheckCircleIcon sx={{ color: 'green', height: '16px', fontSize: '16px', mr: 1 }} />
                                {point.trim()} {/* Trim to remove any extra spaces */}
                              </ListItem>
                            ))}
                        </List>

                      </Box>
                    </>
                  )}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}>
                  <Image src={Array.isArray(sectionImage) ? sectionImage[0] : sectionImage} alt="Image" width={500} height={500} />

                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
            <CardContent>
              {isEditMode ? (
                <>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    defaultValue="Design Process for Beginners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    sx={{ mb: 2 }}
                    InputProps={{
                      style: { color: 'black' },
                    }}
                  />
                  <Divider sx={{ borderColor: '#000' }} />
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" sx={{ mt: 2, borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87' }}>
                      Edit Section
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Typography variant="h5">{content.section4Title}</Typography>
                  <Typography variant="body1">{content.section4Decription}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Comments />
      </Grid>
    </DashboadRootLayout>
  );
};

export default BlogPostDetails;
