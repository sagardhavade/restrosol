import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface MenuItemProps {
  title: string;
  href: string;
  icon: JSX.Element;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, href, icon, onClick }: MenuItemProps) => {
  return (
    <ListItem button component="a" href={href} onClick={onClick} sx={{ textDecoration: 'none' }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default MenuItem;
