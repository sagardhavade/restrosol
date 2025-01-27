
import img1 from '../../../../public/images/Icons/man.svg';
import img2 from '../../../../public/images/Icons/man.svg';
import img3 from '../../../../public/images/Icons/man.svg';
import img4 from '../../../../public/images/Icons/man.svg';

import icon1 from '@/public/images/Icons/man.svg'
import icon2 from '../../../../public/images/Icons/man.svg'
import icon3 from '../../../../public/images/Icons/man.svg'


import flag1 from '@/public/images/Icons/flag1.svg'
import flag2 from '@/public/images/Icons/flag3.svg'
import flag3 from '@/public/images/Icons/flag2.svg'

//
// Notifications dropdown
//
const notifications = [
  {
    avatar: img1,
    title: 'Congratulations Flora 🎉',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'Congratulations Flora 🎉',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
];

//
// Profile dropdown
//
const profile = [
  {
    href: '/user-profile',
    title: 'Moni Roy',
    subtitle: 'Admin',
    icon: icon1,
  },
  {
    href: '/dashboard/authentication/login',
    title: 'Login',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
  {
    href: '/dashboard/authentication/register',
    title: 'Register',
    subtitle: 'To-do and Daily Tasks',
    icon: icon3,
  },
];


const Flag=[
  {
    avatar: flag1,
    title: 'Poland',
    subtitle: 'Country',
  },
  {
    avatar: flag2,
    title: 'India',
    subtitle: 'Country',
  },
  {
    avatar: flag3,
    title: 'America',
    subtitle: 'Country',
  },
]
export { notifications, profile,Flag };
