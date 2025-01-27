import React from 'react';
import { Paper, Typography, Button, Box, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface Notification {
  title: string;
  subtitle: string;
  avatar: string;
}

interface NotificationPopupProps {
  notifications: Notification[];
  onClose: () => void;
}

const Notification: React.FC<NotificationPopupProps> = ({ notifications, onClose }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function provided via props
  };

  return (
    <Paper
      elevation={3}
      style={{
        position: 'absolute',
        top: '50px',
        right: '100px',
        width: '300px',
        maxHeight: '500px',
        overflowY: 'auto',
        zIndex: 9999,
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      {notifications.map((notification, index) => (
        <Box
          key={index}
          p={2}
          textAlign={'center'}
          sx={{
            '&:hover': {
              background: '#dcdfe3',
            },
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Image src={notification.avatar} alt="" width={20} height={20} />
            <Typography variant="subtitle1" sx={{ fontWeight: '500',ml:2 }}>
              {notification.title}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{fontWeight:'300'}}>{notification.subtitle}</Typography>
          <Divider sx={{ borderColor: '#000' }} />
        </Box>
      ))}
      <Button onClick={handleClose} color="primary" variant="contained" sx={{ ml: 15 }}>
        Close
      </Button>
    </Paper>
  );
};

Notification.propTypes = {
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
