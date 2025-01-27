import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box, Divider } from '@mui/material';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  img: StaticImageData;
  title: string;
  subtitle: string;
  categoryBtn: string;
  date: string;
  viewMoreBtn: string;
  path: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ img, title, subtitle, categoryBtn, date, viewMoreBtn,path }) => {
  return (
    <Card sx={{ backgroundColor: '#fff', color: '#000', m: '20px' }}>
      <Box sx={{ position: 'relative', height: 200 }}>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" textAlign={'center'}>
          {title}
        </Typography>

        <Typography variant="body2" textAlign={'center'}>
          {subtitle}
        </Typography>
      </CardContent>
      <Divider sx={{ borderColor: '#000' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
        <Typography sx={{ mb: 1.5 }}>{categoryBtn}</Typography>
        <Typography variant="body2">{date}</Typography>
      </Box>
      <Divider sx={{ borderColor: '#000' }} />
      <CardActions>
      <Link href={path} passHref>
          <Button style={{textDecoration: 'none'}} size="small">{viewMoreBtn}</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogPostCard;
