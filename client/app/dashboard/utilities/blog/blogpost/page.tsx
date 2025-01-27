'use client';
import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, TextField, Divider } from '@mui/material';
import Image from 'next/image';
import Replace from '@/public/images/Replace.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RootLayout from '@/app/dashboard/page';
import Comments from './Comments';

const BlogPostDetails: React.FC = () => {
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

  return (
    <RootLayout>
      <Grid container maxWidth="lg" bgcolor={'#F5F6FA'} p={2}>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4">Article</Typography>
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
              </Box>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Button color="error" variant="outlined">
                  Domestic
                </Button>
                {isEditMode ? (
                  <>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      sx={{ mb: 2, borderColor: '#000' }}
                      InputProps={{
                        style: { color: 'black', borderColor: '#000' },
                      }}
                    />
                    <Divider sx={{ borderColor: '#000' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button variant="outlined" sx={{ mt: 2 ,borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87'}}>
                        Edit Title
                      </Button>
                    </Box>
                  </>
                ) : (
                  <Typography variant="h1" gutterBottom>
                    {articleTitle}
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
                        value={articleContent}
                        onChange={(e) => setArticleContent(e.target.value)}
                        sx={{ mb: 2 }}
                        InputProps={{
                          style: { color: 'black' },
                        }}
                      />
                      <Divider sx={{ borderColor: '#000' }} />
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" sx={{ mt: 2 ,borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87'}}>
                          Edit Content
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography variant="h5">Restaurant Building Process for Beginners</Typography>
                      <Typography variant="body1">{articleContent}</Typography>
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
                            <Button variant="outlined" sx={{ mt: 2 ,borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87'}}>
                              Edit Section
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Typography variant="h5">Restaurant Building Process for Beginners</Typography>
                          <Typography variant="body1">{sectionContent}</Typography>
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
                            <Button variant="outlined" sx={{ mt: 2 ,borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87'}}>
                              Edit Section
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Typography variant="h5">Restaurant Building Process for Beginners</Typography>
                          <Typography variant="body1">{sectionContent}</Typography>
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
                        <Button variant="outlined" sx={{ mt: 2 ,borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87'}}>
                          Edit Section
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography variant="h5">We Create Your Dream</Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam
                        sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                        phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur
                        adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum
                        dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam
                        neque ultrices.
                      </Typography>
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
                    </>
                  )}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 } }}>
                  <Image src={Replace} alt="Image" width={500} height={500} />
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
                    <Button variant="outlined" sx={{ mt: 2 ,borderRadius: '20px', height: '46px', width: '165px', border: '1px solid #CBBC87'}}>
                      Edit Section
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Typography variant="h5">Design Process for Beginners</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Comments />
      </Grid>
    </RootLayout>
  );
};

export default BlogPostDetails;
