'use client';
import React, { useEffect, useState } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import CategoryDialog from './CategoryDialog';
import { Box, Button, Grid, Typography, Tab, Tabs } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Replace from '@/public/images/Replace.png';
import { StaticImageData } from 'next/image';
import BlogPostCard from './BlogPostCard';
import Link from 'next/link';
import { getBlog } from '@/app/api/blog/pageApi';

interface BlogPost {
  id: string;
  sectionImage: string;
  title: string;
  description: string;
  category: string;
  date: string;
  // viewMoreBtn: string;
  // path: string;
}


// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     img: Replace,
//     title: 'How Can a Restaurant Consultant Help Improve Menu Development?',
//     subtitle:
//       'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
//     categoryBtn: 'Category',
//     date: 'Jan 24, 2024',
//     viewMoreBtn: 'View More',
//     path: `/dashboard/utilities/blog/blogpost`,
//   },
//   {
//     id: 2,
//     img: Replace,
//     title: 'How Can a Restaurant Consultant Help Improve Menu Development?',
//     subtitle:
//       'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
//     categoryBtn: 'Category',
//     date: 'Jan 24, 2024',
//     viewMoreBtn: 'View More',
//     path: `/blog/2`,
//   },
//   {
//     id: 3,
//     img: Replace,
//     title: 'How Can a Restaurant Consultant Help Improve Menu Development?',
//     subtitle:
//       'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
//     categoryBtn: 'Category',
//     date: 'Jan 24, 2024',
//     viewMoreBtn: 'View More',
//     path: `/blog/3`,
//   },
//   {
//     id: 4,
//     img: Replace,
//     title: 'How Can a Restaurant Consultant Help Improve Menu Development?',
//     subtitle:
//       'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
//     categoryBtn: 'Category',
//     date: 'Jan 24, 2024',
//     viewMoreBtn: 'View More',
//     path: `/blog/4`,
//   },
// ];

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#000',
          borderRadius: '20px',
          border: '1px solid rgba(20, 21, 22, 1)',
          marginRight: '8px',
          minWidth: '135px',  // Set min width for each tab
          height: '40px',  // Set height for each tab
          '&.Mui-selected': {
            backgroundColor: 'rgba(203, 188, 135, 1)',
            color: '#000',
          },
        },
      },
    },
  },
});

const Page = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const [blogPosts,setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try{
      const response = await getBlog();
      console.log("aaaaaaaaaaa",response);
      setBlogPosts(response);
      }catch(err)
      {
        console.log(err);
        throw err;
      }
    } 
    fetchData();
  },[]);

  return (
    <DashboadRootLayout>
      <Grid container style={{ fontFamily: 'Nunito Sans',backgroundColor:'#F5F6FA' }}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
            <Typography variant="h1">Blog</Typography>
            <Link href="/dashboard/utilities/blog/addBrand" passHref>
            <Button
              variant="contained"
              sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}
            >
              + Add Brand
            </Button>
            </Link>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
            <ThemeProvider theme={theme}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{ maxWidth: { xs: 320, sm: 550 }, mr: '25px' }}
                TabScrollButtonProps={{
                  sx: { display: 'flex', justifyContent: 'center', alignItems: 'center',color:'#fff',backgroundColor:'#CBBC87',borderRadius:'50%' },
                }}
              >
                <Tab label="All" />
                <Tab label="Category" />
                <Tab label="Category" />
                <Tab label="Category" />
                <Tab label="Category" />
                <Tab label="Category" />
              </Tabs>
            </ThemeProvider>
            <Button
              variant="outlined"
              onClick={handleDialogOpen}
              sx={{ borderRadius: '20px', height: '36px', width: '160px', border: '1px solid #CBBC87',fontSize:'11px' }}
            >
              + Add / Edit Category
            </Button>
          </Box>
        </Grid>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <BlogPostCard
              sectionImage={post.sectionImage}
              title={post.title}
              description={post.description}
              category={post.category}
              date={post.date.split("T")[0]} // Extracting only the date part
              id={post.id}
              // viewMoreBtn={post.viewMoreBtn}
              // path={post.path}
            />
          </Grid>
        ))}
      </Grid>
      <CategoryDialog open={isDialogOpen} onClose={handleDialogClose} />
    </DashboadRootLayout>
  );
};

export default Page;
