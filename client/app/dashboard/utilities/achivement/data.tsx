import Testimonial from '@/public/images/Testimonial.png';

export interface TableRowData {
  image: string;
  title: string;
  publisher: string;
  date: string;
  link: string;
  description: string;
}

export const rows: TableRowData[] = [
  {
    image: Testimonial.src,
    title: 'How Can a Restaurant Consultant Help Improve Menu Development?',
    publisher: 'The Times Now',
    date: '12/08/2002',
    link: 'https://dnyhospitality.com/service/brand',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: Testimonial.src,
    title: 'The Benefits of Hiring a Restaurant Consultant',
    publisher: 'Food Industry Today',
    date: '05/16/2003',
    link: 'https://dnyhospitality.com/service/consulting',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
  },
  {
    image: Testimonial.src,
    title: 'Restaurant Consulting: What to Expect',
    publisher: 'Culinary Insights',
    date: '11/25/2004',
    link: 'https://dnyhospitality.com/service/strategy',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: Testimonial.src,
    title: 'How Consultants Improve Restaurant Efficiency',
    publisher: 'Gourmet Magazine',
    date: '07/04/2005',
    link: 'https://dnyhospitality.com/service/efficiency',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image: Testimonial.src,
    title: 'Why Every New Restaurant Needs a Consultant',
    publisher: 'Restaurant Business',
    date: '02/14/2006',
    link: 'https://dnyhospitality.com/service/startup',
    description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.',
  },
  {
    image: Testimonial.src,
    title: 'The Role of a Restaurant Consultant in Menu Design',
    publisher: 'Epicurean Times',
    date: '09/22/2007',
    link: 'https://dnyhospitality.com/service/menu',
    description: 'Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    image: Testimonial.src,
    title: 'Restaurant Consultants: Driving Success in the Food Industry',
    publisher: 'Culinary Experts',
    date: '04/01/2008',
    link: 'https://dnyhospitality.com/service/success',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  },
  {
    image: Testimonial.src,
    title: 'Maximizing Profits with Restaurant Consulting Services',
    publisher: 'Food Business News',
    date: '12/12/2009',
    link: 'https://dnyhospitality.com/service/profits',
    description: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    image: Testimonial.src,
    title: 'How Consultants Help Restaurants Navigate Tough Times',
    publisher: 'Hospitality Trends',
    date: '06/30/2010',
    link: 'https://dnyhospitality.com/service/toughtimes',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
  },
];
