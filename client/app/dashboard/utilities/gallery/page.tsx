// 'use client';
// import React, { useState, useEffect } from 'react';
// import RootLayout from '../../page';
// import { Box, Button, Link, Typography } from '@mui/material';
// import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
// import { Grid, Card, CardContent, CardMedia } from '@mui/material';
// import GalleryProducts, { GalleryProduct } from './components/data';
// import { getGallary } from '@/app/api/gallary/page';

// const GalleryPage: React.FC = () => {
//   const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all');
//  const[galleryProducts,setGalleryProducts] = useState<string | []>([]);
//   const handleFilterChange = (category: 'domestic' | 'international') => {
//     setFilter(category);
//   };

//   const filteredProducts = GalleryProducts.filter((product) => {
//     if (filter === 'all') return true;
//     return product.category === filter;
//   });


//   useEffect(() => {

//     const fetchGallary = async () => {
//       try {
//         const response = await getGallary()
//         console.log("sds", response);
//         setGalleryProducts(response);

//       }
//       catch (err) {
//         console.log(err);
//       }
//     }
//     fetchGallary();

//   }, [])

//   return (
//     <RootLayout>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Nunito Sans' }}>
//         <Typography variant="h1">Gallery</Typography>
//         <Link href="/dashboard/utilities/gallery/addBrand" underline="none">
//           <Button variant="contained" sx={{
//             borderRadius: '20px',
//             height: '46px',
//             width: '202px',
//             backgroundColor: '#CBBC87',
//             border: '1px',
//           }}>+ Add Brand</Button>
//         </Link>
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2, gap: '20px' }}>
//         <Button
//           variant={filter === 'domestic' ? 'contained' : 'outlined'}
//           onClick={() => handleFilterChange('domestic')}
//           sx={{
//             borderRadius: '30px',
//             width: '200px',
//             backgroundColor: filter === 'domestic' ? 'rgba(203, 188, 135, 1)' : 'transparent',
//             color: filter === 'domestic' ? '#fff' : 'rgba(203, 188, 135, 1)',
//           }}
//         >
//           Domestic
//         </Button>

//         <Button
//           variant={filter === 'international' ? 'contained' : 'outlined'}
//           onClick={() => handleFilterChange('international')}
//           sx={{
//             borderRadius: '30px',
//             width: '200px',
//             borderColor: 'rgba(203, 188, 135, 1)',
//             color: filter === 'international' ? '#fff' : 'rgba(203, 188, 135, 1)',
//             height: '45px',
//             backgroundColor: filter === 'international' ? 'rgba(203, 188, 135, 1)' : 'transparent',
//           }}
//         >
//           International
//         </Button>
//       </Box>
//       <Grid container spacing={2}>
//         {filteredProducts.map((product: GalleryProduct) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <Card sx={{ backgroundColor: '#fff' }}>
//               <CardMedia component="img" alt={product.title} height="300" image={product.image} />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div" sx={{ color: '#000' }}>
//                   {product.title}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary" sx={{ color: '#000' }}>
//                   {product.subtitle}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ color: '#000' }}>
//                   {product.description}
//                 </Typography>
//                 <Link href="/dashboard/utilities/gallery/carddetails" underline="none">
//                   <Button size="small">
//                     {product.button}
//                     <ArrowRightAltOutlinedIcon sx={{ color: '#000' }} />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </RootLayout>
//   );
// };

// export default GalleryPage;


'use client';
import React, { useState, useEffect } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Box, Button, Typography } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { Grid, Card, CardContent, CardMedia } from '@mui/material';
import { getGallary } from '@/app/api/gallary/pageApi';
import Link from 'next/link';


// Define interface for API data
export interface GalleryProduct {
  id: string;  // Changed to string since API uses ObjectId
  image: string;
  title: string;
  subtitle: string;
  description: string;
  button: string;
  category: 'domestic' | 'international';
}

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [galleryProducts, setGalleryProducts] = useState<GalleryProduct[]>([]);

  const handleFilterChange = (category: 'domestic' | 'international') => {
    setFilter(category);
  };

  // Filtering logic
  const filteredProducts = galleryProducts.filter((product) => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGallary = async () => {
      try {
        const response = await getGallary();

        // Transform API response into GalleryProduct format
        const formattedData: GalleryProduct[] = response.map((item: any) => ({
          id: item.id,
          title: item.clientName[0] || 'No Title',
          subtitle: item.brandName || 'No Brand',
          description: item.description || 'No Description',
          image: item.sectionImage?.[0] || '/images/Replace.png',
          button: 'View more',
          category: item.category.toLowerCase() === 'domestic' ? 'domestic' : 'international', // Normalize category
        }));

        setGalleryProducts(formattedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGallary();
  }, []);

  return (
    <DashboadRootLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Nunito Sans' }}>
        <Typography variant="h1">Gallery</Typography>
        {/* <Link href="/dashboard/utilities/gallery/addBrand" underline="none"> */}
        <Link href="/dashboard/utilities/gallery/addBrand" passHref>
          <Button variant="contained" sx={{
            borderRadius: '20px',
            height: '46px',
            width: '202px',
            backgroundColor: '#CBBC87',
          }}>+ Add Brand</Button>
        </Link>
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2, gap: '20px' }}>
        <Button
          variant={filter === 'domestic' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('domestic')}
          sx={{
            borderRadius: '30px',
            width: '200px',
            backgroundColor: filter === 'domestic' ? 'rgba(203, 188, 135, 1)' : 'transparent',
            color: filter === 'domestic' ? '#fff' : 'rgba(203, 188, 135, 1)',
          }}
        >
          Domestic
        </Button>

        <Button
          variant={filter === 'international' ? 'contained' : 'outlined'}
          onClick={() => handleFilterChange('international')}
          sx={{
            borderRadius: '30px',
            width: '200px',
            borderColor: 'rgba(203, 188, 135, 1)',
            color: filter === 'international' ? '#fff' : 'rgba(203, 188, 135, 1)',
            height: '45px',
            backgroundColor: filter === 'international' ? 'rgba(203, 188, 135, 1)' : 'transparent',
          }}
        >
          International
        </Button>
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={2}>
        {filteredProducts.map((product: GalleryProduct) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ backgroundColor: '#fff' }}>
              <CardMedia component="img" alt={product.title} height="300" image={product.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#000' }}>
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ color: '#000' }}>
                  {product.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#000' }}>
                  {product.description}
                </Typography>
                {/* <Link href="/dashboard/utilities/gallery/carddetails/" underline="none">
                  <Button size="small">
                    {product.button}
                    <ArrowRightAltOutlinedIcon sx={{ color: '#000' }} />
                  </Button>
                </Link> */}
                {/* <Link href={{ pathname: '/dashboard/utilities/gallery/carddetails', query: { id: product.id } }} passHref> */}
                
                <Link href={`/dashboard/utilities/gallery/carddetails/${String(product.id)}`} passHref>
                  <Button size="small" component="a">
                    {product.button}
                    <ArrowRightAltOutlinedIcon sx={{ color: '#000' }} />
                  </Button>
                </Link>


              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboadRootLayout>
  );
};

export default GalleryPage;
