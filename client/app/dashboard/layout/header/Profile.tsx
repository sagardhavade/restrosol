import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

interface ProfileProps {
  profile: { title: string; icon: string }[]; // Define the type for profile prop
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ profile, onClose }) => {
  // Explicitly define the type of profile
  const handleClose = () => {
    onClose(); // Call the onClose function provided via props
  };

  return (
    <>
      <Paper
        elevation={3}
        style={{
          position: 'absolute',
          top: '50px',
          right: '10px',
          width: '300px',
          maxHeight: '500px',
          overflowY: 'auto',
          zIndex: 9999,
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        {profile.map((profileItem, index) => (
          <Box key={index} p={1} textAlign={'center'}>
            <Image src={profileItem.icon} alt="" width={20} height={20} />
            <Typography variant="subtitle1">{profileItem.title}</Typography>
            <Typography variant="body2">{profileItem.title}</Typography>
            <Divider sx={{ borderColor: '#000' }} />
          </Box>
          // <Box key={index} p={1} textAlign={'center'}>
          //   <Image src={profileItem.icon} alt="" width={20} height={20} />
          //   <Typography variant="subtitle1">{profileItem.title}</Typography>
          // </Box>
        ))}
      </Paper>
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Profile;
