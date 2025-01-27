import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, InputBase, styled, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import NotificationPopup from './Notification';
import { notifications, profile, Flag } from './Data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Profile from './Profile';

interface HeaderProps {
  toggleMobileSidebar: () => void;
}

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    border: '1px solid #000',
    borderRadius: theme.shape.borderRadius,
    color: '#000', // Set text color
    '&::placeholder': {
      color: '#000', // Set placeholder color
    },
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header: React.FC<HeaderProps> = ({ toggleMobileSidebar }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCountry, setSelectedCountry] = useState(Flag[0]);

  const toggleNotificationPopup = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleCountryChange = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (country: any) => {
    setAnchorEl(null);
    setSelectedCountry(country);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', left: '240px',fontFamily:'Nunito Sans' }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="menu" onClick={toggleMobileSidebar} sx={{ color: '#000' }}>
          {/* <MenuIcon width="20" height="20" /> */}
        </IconButton>
        {/* <SearchBox>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: '#000' }} />
          </SearchIconWrapper>
          <SearchInput placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </SearchBox> */}
        <Box style={{ flexGrow: 1 }} />
        {/* <IconButton size="large" aria-label="show notifications" color="inherit" onClick={toggleNotificationPopup} sx={{ ml: 2 }}>
          <Badge variant="dot" color="primary">
            <NotificationsActiveIcon sx={{ color: '#000' }} />
          </Badge>
        </IconButton> */}
        {/* <IconButton size="large" aria-label="show country" color="inherit" onClick={handleCountryChange} sx={{ ml: 2 }}>
          <Image src={selectedCountry.avatar} alt={selectedCountry.title} width="54" height="34" />
          <Typography variant="body1" sx={{ color: '#000' }}>
            {selectedCountry.title}
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: '#000' }} />
        </IconButton> */}
        <Menu
          id="country-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          PaperProps={{
            style: {
              backgroundColor: '#fff',
              color: '#000',
              width: '200px',
              height: '200px',
              borderRadius: 10,
              boxShadow: '5px 2px 10px 5px #666',
            },
          }}
          sx={{
            cursor: 'pointer',
          }}
        >
          {Flag.map((country, index) => (
            <MenuItem
              key={index}
              onClick={() => handleClose(country)}
              sx={{
                '&:hover': {
                  background: '#dcdfe3',
                },
              }}
            >
              <Image src={country.avatar} alt={country.title} width="94" height="40" />
              {country.title}
            </MenuItem>
          ))}
        </Menu>
        <ProfileMenu profileOptions={profile} />
      </Toolbar>
      {isNotificationOpen && <NotificationPopup notifications={notifications} onClose={toggleNotificationPopup} />}
    </AppBar>
  );
};

const ProfileMenu: React.FC<{ profileOptions: { href: string; title: string; subtitle: string; icon: string }[] }> = ({
  profileOptions,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleProfileMenuOpen}>
        <Image src={profileOptions[0].icon} alt="Profile" width="24" height="24" />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body2" sx={{ color: '#000', ml: 1 }}>{profileOptions[0].title}</Typography>
          <Typography variant="body2" sx={{ color: '#000', ml: 1, fontSize: '10px' }}>{profileOptions[0].subtitle}</Typography>
        </Box>
        <KeyboardArrowDownIcon sx={{ color: '#000' }} />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          style: {
            backgroundColor: '#fff',
            color: '#000',
            width: '200px',
            height: '200px',
            borderRadius: 10,
            boxShadow: '5px 2px 10px 5px #666',
          },
        }}
      >
        {profileOptions.map((option, index) => (
          <MenuItem
            key={index}
            component="a"
            href={option.href}
            sx={{
              '&:hover': {
                background: '#dcdfe3',
              },
            }}
          >
            <Image src={option.icon} alt='icon' width="94" height="40" />
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Header;
