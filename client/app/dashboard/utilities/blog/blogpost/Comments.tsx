// components/Comments.tsx

import React from 'react';
import { Box, Typography, Button, Paper, Divider, List, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

// Define styles using styled
const CommentSection = styled(Box)({
  width: '100%',
  margin: '20px 0',
});

const CommentBox = styled(Paper)({
  padding: '10px 20px',
  margin: '10px 0',
  backgroundColor: '#fff',
  color: '#000',
  flexDirection: 'column',
  boxShadow: 'none',
  border: '1px solid #ddd',
});

const CommentAuthor = styled(Box)({
  display: 'flex',
  gap:'20px',
  alignItems: 'center',
  marginBottom: '10px',
});

const CommentLeft = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const CommentDate = styled(Typography)({
  fontSize: '0.8rem',
  color: '#888',
});

const LoadMoreButton = styled(Box)({
  marginTop: '20px',
  textAlign: 'center',
});

interface Comment {
  author: string;
  date: string;
  content: string;
  isAuthor: boolean;
}

const Comments: React.FC = () => {
  // Mock data for comments
  const comments: Comment[] = [
    {
      author: 'Viacheslav M.',
      date: 'Apr 8, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      isAuthor: false,
    },
    {
      author: 'Viacheslav M.',
      date: 'Apr 8, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      isAuthor: false,
    },
    {
      author: 'Viacheslav M.',
      date: 'Apr 8, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      isAuthor: true,
    },
    {
      author: 'Viacheslav M.',
      date: 'Apr 8, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      isAuthor: false,
    },
    {
      author: 'Viacheslav M.',
      date: 'Apr 8, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      isAuthor: false,
    },
  ];

  return (
    <CommentSection>
      <Typography variant="h4" gutterBottom>Comments</Typography>
      <Box>
        {comments.map((comment, index) => (
          <CommentBox key={index}>
            <ListItemText
              primary={
                <CommentAuthor>
                  <CommentLeft>
                    <CommentDate variant="caption">{comment.date}</CommentDate>
                    <PermIdentityIcon/>
                    <Typography variant="subtitle1">{comment.author}</Typography>
                    {comment.isAuthor && (
                      
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          height: '20px',
                          backgroundColor: 'rgba(203, 188, 135, 1)',
                          borderRadius: '20px',
                          color: '#000',
                          fontWeight: 'bold',
                          textTransform: 'none',
                          minWidth: '50px',
                        }}
                      >
                        author
                      </Button>
                      
                    )}
                  </CommentLeft>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{
                      borderRadius: '20px',
                      height: '25px',
                      fontSize: '0.7rem',
                      borderColor: 'rgba(255, 0, 0, 0.7)',
                      color: 'rgba(255, 0, 0, 0.7)',
                      textTransform: 'none',
                    }}
                  >
                    Delete
                  </Button>
                </CommentAuthor>
              }
              secondary={
                <Typography sx={{ color: '#000' }}>
                  {comment.content}
                </Typography>
              }
            />
            {index < comments.length - 1 && <Divider />}
          </CommentBox>
        ))}
      </Box>
      <LoadMoreButton>
        <Button variant="outlined">Load More...</Button>
      </LoadMoreButton>
      <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
        {/* <Button
          variant="contained"
          sx={{
            backgroundColor: '#CBBC87',
            color: '#000',
            borderRadius: '20px',
            textTransform: 'none',
            minWidth: '80px',
          }}
        >
          Save
        </Button> */}
      </Box>
    </CommentSection>
  );
};

export default Comments;
