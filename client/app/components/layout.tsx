
// import { Props } from 'next/script'
// import React from 'react'

// const DashboadRootLayout=({ children }: Props) => {
//   return (
//     <>
//     {children}
//     </>
//   )
// }

// export default DashboadRootLayout

import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
return <>{children}</>;  
};

export default DashboardLayout;
