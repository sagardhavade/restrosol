import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Divider } from '@mui/material';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  id: string;
  sectionImage: string;
  title: string;
  description: string;
  category: string;
  date: string;
  // viewMoreBtn: string;
  // path: string;
}

// const BlogPostCard: React.FC<BlogPostCardProps> = ({ img, title, subtitle, categoryBtn, date, viewMoreBtn,path }) => {
const BlogPostCard: React.FC<BlogPostCardProps> = ({ sectionImage, title, description, category, date, id }) => {
  return (
    <Card sx={{ backgroundColor: '#fff', color: '#000', m: '20px' }}>
      <Box sx={{ position: 'relative', height: 200 }}>
        <Image src={Array.isArray(sectionImage) ? sectionImage[0] : sectionImage} alt={title} layout="fill" objectFit="cover" />
        {/* <Image
          src={Array.isArray(sectionImage) && sectionImage[0] ? sectionImage[0] : '/default-image.jpg'} // Fallback to default if sectionImage is invalid
          alt={title}
          layout="fill"
          objectFit="cover"
        /> */}
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" textAlign={'center'}>
          {title}
        </Typography>

        <Typography variant="body2" textAlign={'center'}>
          {description}
        </Typography>
      </CardContent>
      <Divider sx={{ borderColor: '#000' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
        <Typography sx={{ mb: 1.5 }}>{category}</Typography>
        <Typography variant="body2">{date}</Typography>
      </Box>
      <Divider sx={{ borderColor: '#000' }} />
      <CardActions>
        {/* <Link href={`/dashboard/utilities/blog/blogpost/${id}`} passHref> */}
        {/* <Link href={{ pathname: '/dashboard/utilities/blog/blogpost', query: { id:id } }} passHref> */}
        {/* <Link href={{ pathname: '/dashboard/utilities/blog/blogpost', query: { id: id } }} passHref>

          <Button style={{textDecoration: 'none'}} size="small">View More</Button>
        </Link> */}
        <Link href={`/dashboard/utilities/blog/blogpost/${id}`} passHref>
          <Button style={{ textDecoration: 'none' }} size="small">View More</Button>
        </Link>

      </CardActions>
    </Card>
  );
};

export default BlogPostCard;
