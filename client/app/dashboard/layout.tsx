'use client';
import React, { useState } from 'react';
import { styled, Container, Box } from '@mui/material';
// import DashboardRootLayout from '../components/layout';
import Sidebar from '@/app/dashboard/layout/sidebar/sidebar';
import Header from './layout/header/Header';
import { Props } from 'next/script';
import ClientAuthCheck from './utilities/ClientAuthCheck';


interface ItemType {
  toggleMobileSidebar: () => void;
}

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
  fontFamily:"Nunito Sans",
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
}));

const RootLayout = ({ children }: Props, { toggleMobileSidebar }: ItemType) => {
  // Add toggleMobileSidebar prop
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMobileSidebarToggle = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
    toggleMobileSidebar(); // Call the toggleMobileSidebar function when sidebar is toggled
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Client-side authentication check */}
      <ClientAuthCheck />
      <MainWrapper>
        <Sidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={handleMobileSidebarToggle}
          isSidebarOpen={isSidebarOpen}
        />
        <PageWrapper sx={{
          backgroundColor:'#fff'
        }}>
          <Header toggleMobileSidebar={toggleMobileSidebar} /> 
          <Container
            sx={{
              paddingTop: '20px',
              maxWidth: '1200px',
              fontFamily:'Nunito Sans'   
            }}
          >
            <Box sx={{ minHeight: 'calc(100vh - 170px)', }}>
              {children}
            </Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </>
  );
};

export default RootLayout;

// 'use client';
// import React, { useState, ReactNode } from 'react';
// import { styled, Container, Box } from '@mui/material';
// import Sidebar from '@/app/dashboard/layout/sidebar/sidebar';
// import Header from './layout/header/Header';
// import ClientAuthCheck from './utilities/ClientAuthCheck';

// interface DashboardLayoutProps {
//   children: ReactNode;
// }

// const MainWrapper = styled('div')(() => ({
//   display: 'flex',
//   minHeight: '100vh',
//   width: '100%',
//   fontFamily: 'Nunito Sans',
// }));

// const PageWrapper = styled('div')(() => ({
//   display: 'flex',
//   flexGrow: 1,
//   paddingBottom: '60px',
//   flexDirection: 'column',
//   zIndex: 1,
//   backgroundColor: 'transparent',
// }));

// const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
//   const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const handleMobileSidebarToggle = () => {
//     setMobileSidebarOpen(!isMobileSidebarOpen);
//   };

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Client-side authentication check */}
//       <ClientAuthCheck />
//       <MainWrapper>
//         <Sidebar
//           isMobileSidebarOpen={isMobileSidebarOpen}
//           onSidebarClose={handleMobileSidebarToggle}
//           isSidebarOpen={isSidebarOpen}
//         />
//         <PageWrapper sx={{ backgroundColor: '#fff' }}>
//           <Header toggleMobileSidebar={handleMobileSidebarToggle} />
//           <Container
//             sx={{
//               paddingTop: '20px',
//               maxWidth: '1200px',
//               fontFamily: 'Nunito Sans',
//             }}
//           >
//             <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>{children}</Box>
//           </Container>
//         </PageWrapper>
//       </MainWrapper>
//     </>
//   );
// };

// export default DashboardLayout;
