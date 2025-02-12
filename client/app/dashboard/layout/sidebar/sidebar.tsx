import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Box, Link } from '@mui/material';
import Image from 'next/image';
import CustomIcon from './CustomIcon';
import Logo from '../../../../public/images/logo.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface MenuItem {
  title: string;
  href: string;
  icon: JSX.Element;
}
interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
  isSidebarOpen: boolean;
}
const theme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            fontFamily: "Nunito Sans",
            backgroundColor: '#000',
            color: '#fff',
            '& .MuiListItemIcon-root': {
              color: '#fff',
              fontFamily: "Inter",
            },
            '& img': {
              filter: 'invert(1)',
            },
          },
          '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '10px',
            
            '& .MuiListItemIcon-root': {
              color: '#fff',
            },
            '& img': {
              filter: 'invert(1)',
            },
          },
        },
      },
    },
  },
});

// const Sidebar: React.FC = () => {
  const Sidebar: React.FC<SidebarProps> = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {

  const [activeItem, setActiveItem] = useState<string>('');

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  const Forms: MenuItem[] = [
    {
      title: 'Contact List',
      href: '/dashboard/utilities/ContactList',
      icon: <CustomIcon src="/images/Icons/ContactForm.png" alt="Dashboard" />,
    },
    {
      title: 'Plan Form',
      href: '/dashboard/utilities/planform',
      icon: <CustomIcon src="/images/Icons/PlanForm.png" alt="Plan Form" />,
    },
  ];

  const Websites: MenuItem[] = [
    {
      title: 'Gallery',
      href: '/dashboard/utilities/gallery',
      icon: <CustomIcon src="/images/Icons/Gallery.png" alt="Gallery" />,
    },
    {
      title: 'Blogs',
      href: '/dashboard/utilities/blog',
      icon: <CustomIcon src="/images/Icons/Blogs.png" alt="Blogs" />,
    },
    {
      title: 'Testimonials',
      href: '/dashboard/utilities/testinomial',
      icon: <CustomIcon src="/images/Icons/Testimonial.png" alt="Testimonials" />,
    },
    {
      title: 'Achievements',
      href: '/dashboard/utilities/achivement',
      icon: <CustomIcon src="/images/Icons/Achivements.png" alt="Achievements" />,
    },
  ];

  const Career: MenuItem[] = [
    {
      title: 'Job Post',
      href: '/dashboard/utilities/jobpost',
      icon: <CustomIcon src="/images/Icons/jobs.png" alt="Job Post" />,
    },
    {
      title: 'Resumes',
      href: '/dashboard/utilities/resumes',
      icon: <CustomIcon src="/images/Icons/Resume.png" alt="Resumes" />,
    },
  ];

  const Settings: MenuItem[] = [
    {
      title: 'Setting',
      href: '/dashboard/utilities/setting',
      icon: <CustomIcon src="/images/Icons/Settings.png" alt="Setting" />,
    },
    {
      title: 'Logout',
      href: '/dashboard/authentication/login',
      icon: <CustomIcon src="/images/Icons/LogOut.png" alt="Logout" />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="permanent"
        sx={{
          width: '240px',
          flexShrink: 0,
          height:'1070px',
          '& .MuiDrawer-paper': {
            width: '240px',
            backgroundColor: '#fff',
            borderRight:'0px',
            fontFamily: "Nunito Sans",
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            p: '10px',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': { display: 'none' }, 
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none', 

          }}
        >
          <Box sx={{ mb: '0px', display: 'flex', justifyContent: 'center' }}>
            <Image src={Logo} alt="Logo" width={117} height={55} />
          </Box>
          <Divider sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }} />
          <Box>
            <List sx={{ display: 'flex', flexDirection: 'column', }}>
              <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.37px', color: '#d9d9d9', ml: 2 }}>
                Forms
              </Typography>
              {Forms.map((form) => (
                <Link key={form.title} href={form.href} sx={{ textDecoration: 'none' }}>
                  <ListItem button sx={{ color: '#000', mt: -1 }}>
                    <ListItemIcon>{form.icon}</ListItemIcon>
                    <ListItemText primary={form.title} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }} />
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.37px', color: '#d9d9d9', ml: 2 }}>
                Websites
              </Typography>
              {Websites.map((website) => (
                <Link key={website.title} href={website.href} sx={{ textDecoration: 'none' }}>
                  <ListItem button sx={{ color: '#000', mt: -1 }}>
                    <ListItemIcon>{website.icon}</ListItemIcon>
                    <ListItemText primary={website.title} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }} />
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.37px', color: '#d9d9d9', ml: 2 }}>
                Career
              </Typography>
              {Career.map((career) => (
                <Link key={career.title} href={career.href} sx={{ textDecoration: 'none' }}>
                  <ListItem button sx={{ color: '#000', mt: -1 }}>
                    <ListItemIcon>{career.icon}</ListItemIcon>
                    <ListItemText primary={career.title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <Divider sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }} />
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.37px', color: '#d9d9d9', ml: 2 }}>
              Setting
            </Typography>
            {Settings.map((setting) => (
              <Link key={setting.title} href={setting.href} sx={{ textDecoration: 'none' }}>
                <ListItem button sx={{ color: '#000', mt: -1 }}>
                  <ListItemIcon>{setting.icon}</ListItemIcon>
                  <ListItemText primary={setting.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar;
