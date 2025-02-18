// "use client";
// import React, { useState, useEffect } from 'react';
// import DashboadRootLayout from '@/app/components/layout';
// import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, CircularProgress } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import FilterBox from './FilterBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '@/lib/features/contactSlice';

// interface Contact {
//   id: string;
//   name: string;
//   email: string;
//   date: string;
//   type: string;
//   status: string;
//   message: string;
// }

// const Page: React.FC = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state: any) => state.contacts.contacts || []);
//   const loading = useSelector((state: any) => state.contacts.loading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const statusColors: Record<string, { backgroundColor: string; color: string }> = {
//     resolve: { backgroundColor: '#8ef5e6', color: '#00B69B' },
//     pending: { backgroundColor: '#a887f5', color: '#6226EF' },
//     close: { backgroundColor: '#f09b95', color: '#f44336' },
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [expandedRow, setExpandedRow] = useState<string | null>(null);
//   const itemsPerPage = 9;

//   const handleNextPage = () => {
//     if (currentPage * itemsPerPage < contacts.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleRowClick = (id: string) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, contacts.length);
//   const displayedRows = contacts.slice(startIndex, endIndex);

//   return (
//     <DashboadRootLayout>
//       <Box sx={{ fontFamily: 'Nunito Sans',bgcolor:'#F5F6FA',p:2 }}>
//         <Typography variant="h2">Contact Lists</Typography>
//         <FilterBox />
//         <Paper elevation={3} sx={{ backgroundColor: '#fff', color: '#000', borderRadius: '10px', mt: 2 }}>
//           <Box sx={{ width: '100%' }}>
//             <Table aria-label="contact table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       ID
//                     </Typography>
//                   </TableCell>
//                   <TableCell sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       NAME
//                     </Typography>
//                   </TableCell>
//                   <TableCell sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       E-MAIL
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center" sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       DATE
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center" sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       TYPE
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000" sx={{ ml: 7 }}>
//                       STATUS
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loading ? (
//                   <TableRow>
//                     <TableCell colSpan={6} align="center">
//                       <CircularProgress />
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   displayedRows.map(( contact: Contact) => (
//                     <React.Fragment key={contact.id}>
//                       <TableRow
//                         onClick={() => handleRowClick(contact.id)}
//                         style={{
//                           cursor: 'pointer',
//                           borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           boxShadow: expandedRow === contact.id ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
//                           borderCollapse: 'separate',
//                           borderSpacing: '0px',
//                         }}
//                       >
//                         <TableCell
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography sx={{ fontSize: '15px', fontWeight: '500' }} color="#000">
//                             {contact.id}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography variant="body2" color="#000">
//                             {contact.name}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography color="#000" variant="body2" fontWeight={400}>
//                             {contact.email}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography variant="body2" color="#000">
//                             {new Date(contact.date).toLocaleDateString()}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography variant="body2" color="#000">
//                             {contact.type}
//                           </Typography>
//                         </TableCell>
//                         <TableCell sx={{ borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc' }}>
//                           <Button
//                             sx={{
//                               px: '4px',
//                               backgroundColor: statusColors[contact.status]?.backgroundColor || '#666',
//                               color: statusColors[contact.status]?.color || '#fff',
//                               p: 2,
//                               '&:hover': {
//                                 backgroundColor: statusColors[contact.status]?.backgroundColor || '#666',
//                                 color: '#000',
//                               },
//                               borderRadius: '5px',
//                               width: '120px',
//                               height: '27px',
//                             }}
//                           >
//                             {contact.status}
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       {expandedRow === contact.id && (
//                         <TableRow>
//                           <TableCell colSpan={6} style={{ padding: 0 }}>
//                             <Box sx={{ padding: '16px' }}>
//                               <Typography variant="body2" color="#000">
//                                 Message: {contact.message}
//                               </Typography>
//                             </Box>
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </React.Fragment>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//             <Button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               sx={{ minWidth: '40px', minHeight: '40px', ml: 1 }}
//             >
//               <KeyboardArrowLeftIcon />
//             </Button>
//             <Button
//               onClick={handleNextPage}
//               disabled={endIndex >= contacts.length}
//               sx={{ minWidth: '40px', minHeight: '40px', ml: 1 }}
//             >
//               <KeyboardArrowRightIcon />
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </DashboadRootLayout>
//   );
// };

// export default Page;


// 'use client';
// import React, { useState, useEffect } from 'react';
// import DashboadRootLayout from '@/app/components/layout';
// import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, CircularProgress } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import FilterBox from './FilterBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '@/lib/features/contactSlice';
// import * as XLSX from 'xlsx'; // Importing the XLSX library

// interface Contact {
//   id: string;
//   name: string;
//   email: string;
//   date: string;
//   type: string;
//   status: string;
//   message: string;
// }

// const Page: React.FC = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state: any) => state.contacts.contacts || []);
//   const loading = useSelector((state: any) => state.contacts.loading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const statusColors: Record<string, { backgroundColor: string; color: string }> = {
//     resolve: { backgroundColor: '#8ef5e6', color: '#00B69B' },
//     pending: { backgroundColor: '#a887f5', color: '#6226EF' },
//     close: { backgroundColor: '#f09b95', color: '#f44336' },
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [expandedRow, setExpandedRow] = useState<string | null>(null);
//   const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);
//   const itemsPerPage = 9;

//   const handleNextPage = () => {
//     if (currentPage * itemsPerPage < contacts.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleRowClick = (id: string) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, contacts.length);
//   const displayedRows = contacts.slice(startIndex, endIndex);

//    // Callback to update the filtered contacts
//    const handleFilter = (filtered: Contact[]) => {
//     console.log(filtered);
//     setFilteredContacts(filtered);
//     setCurrentPage(1); // Reset to first page after filtering
//   };

//   return (
//     <DashboadRootLayout>
//       <Box sx={{ fontFamily: 'Nunito Sans', bgcolor: '#F5F6FA', p: 2 }}>
//         <Typography variant="h2">Contact Lists</Typography>
//         {/* <FilterBox contacts={contacts} /> */}
//         <FilterBox contacts={contacts} onFilter={handleFilter} />
//         <Paper elevation={3} sx={{ backgroundColor: '#fff', color: '#000', borderRadius: '10px', mt: 2 }}>
//           <Box sx={{ width: '100%' }}>
//             <Table aria-label="contact table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       ID
//                     </Typography>
//                   </TableCell>
//                   <TableCell sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       NAME
//                     </Typography>
//                   </TableCell>
//                   <TableCell sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       E-MAIL
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center" sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       DATE
//                     </Typography>
//                   </TableCell>
//                   <TableCell align="center" sx={{ borderRight: '1px solid #ccc' }}>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000">
//                       TYPE
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="subtitle2" fontWeight={600} color="#000" sx={{ ml: 7 }}>
//                       STATUS
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {loading ? (
//                   <TableRow>
//                     <TableCell colSpan={6} align="center">
//                       <CircularProgress />
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   displayedRows.map((contact: Contact) => (
//                     <React.Fragment key={contact.id}>
//                       <TableRow
//                         onClick={() => handleRowClick(contact.id)}
//                         style={{
//                           cursor: 'pointer',
//                           borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           boxShadow: expandedRow === contact.id ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
//                           borderCollapse: 'separate',
//                           borderSpacing: '0px',
//                         }}
//                       >
//                         <TableCell
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography sx={{ fontSize: '15px', fontWeight: '500' }} color="#000">
//                             {contact.id}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography variant="body2" color="#000">
//                             {contact.name}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography color="#000" variant="body2" fontWeight={400}>
//                             {contact.email}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography variant="body2" color="#000">
//                             {new Date(contact.date).toLocaleDateString()}
//                           </Typography>
//                         </TableCell>
//                         <TableCell
//                           align="center"
//                           sx={{
//                             borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                             borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
//                           }}
//                         >
//                           <Typography variant="body2" color="#000">
//                             {contact.type}
//                           </Typography>
//                         </TableCell>
//                         <TableCell sx={{ borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc' }}>
//                           <Button
//                             sx={{
//                               px: '4px',
//                               backgroundColor: statusColors[contact.status]?.backgroundColor || '#666',
//                               color: statusColors[contact.status]?.color || '#fff',
//                               p: 2,
//                               '&:hover': {
//                                 backgroundColor: statusColors[contact.status]?.backgroundColor || '#666',
//                                 color: '#000',
//                               },
//                               borderRadius: '5px',
//                               width: '120px',
//                               height: '27px',
//                             }}
//                           >
//                             {contact.status}
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       {expandedRow === contact.id && (
//                         <TableRow>
//                           <TableCell colSpan={6} style={{ padding: 0 }}>
//                             <Box sx={{ padding: '16px' }}>
//                               <Typography variant="body2" color="#000">
//                                 Message: {contact.message}
//                               </Typography>
//                             </Box>
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </React.Fragment>
//                   ))
//                 )}
//               </TableBody>
//             </Table>
//           </Box>

//           {/* Download Button */}
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//             {/* <Button onClick={handleDownloadExcel} variant="contained" color="primary" sx={{ mr: 2 }}>
//               Download Excel
//             </Button> */}
//             <Button onClick={handlePrevPage} disabled={currentPage === 1} sx={{ minWidth: '40px', minHeight: '40px', ml: 1 }}>
//               <KeyboardArrowLeftIcon />
//             </Button>
//             <Button onClick={handleNextPage} disabled={endIndex >= contacts.length} sx={{ minWidth: '40px', minHeight: '40px', ml: 1 }}>
//               <KeyboardArrowRightIcon />
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </DashboadRootLayout>
//   );
// };

// export default Page;
'use client';
import React, { useState, useEffect } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, CircularProgress } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterBox from './FilterBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '@/lib/features/contactSlice';
import * as XLSX from 'xlsx';

interface Contact {
  id: string;
  name: string;
  email: string;
  date: string;
  type: string;
  status: string;
  message: string;
}

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contacts.contacts || []);
  const loading = useSelector((state: any) => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const statusColors: Record<string, { backgroundColor: string; color: string }> = {
    resolve: { backgroundColor: '#8ef5e6', color: '#00B69B' },
    pending: { backgroundColor: '#a887f5', color: '#6226EF' },
    close: { backgroundColor: '#f09b95', color: '#f44336' },
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);
  const itemsPerPage = 9;

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < filteredContacts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowClick = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredContacts.length);
  const displayedRows = filteredContacts.slice(startIndex, endIndex);

  // Callback to update the filtered contacts
  const handleFilter = (filtered: Contact[]) => {
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const handleDownload = (filteredContactsToDownload: Contact[]) => {
    // Log to verify the correct filtered data
    console.log('Filtered data to download:', filteredContactsToDownload);

    // If filteredContactsToDownload is empty, return early
    if (!filteredContactsToDownload.length) {
        alert('No data available to download');
        return;
    }

    // Map over filtered contacts to create the required data format for the download
    const formattedData = filteredContactsToDownload.map(contact => ({
        ID: contact.id,
        Name: contact.name,
        Email: contact.email,
        Date: new Date(contact.date).toLocaleDateString(),
        Type: contact.type,
        Status: contact.status,
        Message: contact.message,
    }));

    // Create a worksheet and workbook for the download
    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Contacts');

    // Trigger download
    XLSX.writeFile(wb, 'filtered_contacts.xlsx');
};


  return (
    <DashboadRootLayout>
      <Box sx={{ fontFamily: 'Nunito Sans', bgcolor: '#F5F6FA', p: 2 }}>
        <Typography variant="h2">Contact Lists</Typography>
        {/* Pass contacts and handleFilter to FilterBox */}
        <FilterBox contacts={contacts} onFilter={handleFilter} onDownload={handleDownload} />
        <Paper elevation={3} sx={{ backgroundColor: '#fff', color: '#000', borderRadius: '10px', mt: 2 }}>
          <Box sx={{ width: '100%' }}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      NAME
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      E-MAIL
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ borderRight: '1px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      DATE
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ borderRight: '1px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      TYPE
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600} color="#000" sx={{ ml: 7 }}>
                      STATUS
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                  displayedRows.map((contact: Contact) => (
                    <React.Fragment key={contact.id}>
                      <TableRow
                        onClick={() => handleRowClick(contact.id)}
                        style={{
                          cursor: 'pointer',
                          borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                          boxShadow: expandedRow === contact.id ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                          borderCollapse: 'separate',
                          borderSpacing: '0px',
                        }}
                      >
                        <TableCell
                          sx={{
                            borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                            borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                          }}
                        >
                          <Typography sx={{ fontSize: '15px', fontWeight: '500' }} color="#000">
                            {contact.id}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                            borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                          }}
                        >
                          <Typography variant="body2" color="#000">
                            {contact.name}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                            borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                          }}
                        >
                          <Typography color="#000" variant="body2" fontWeight={400}>
                            {contact.email}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                            borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                          }}
                        >
                          <Typography variant="body2" color="#000">
                            {new Date(contact.date).toLocaleDateString()}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                            borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc',
                          }}
                        >
                          <Typography variant="body2" color="#000">
                            {contact.type}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: expandedRow === contact.id ? 'none' : '1px solid #ccc' }}>
                          <Button
                            sx={{
                              px: '4px',
                              backgroundColor: statusColors[contact.status]?.backgroundColor || '#666',
                              color: statusColors[contact.status]?.color || '#fff',
                              p: 2,
                              '&:hover': {
                                backgroundColor: statusColors[contact.status]?.backgroundColor || '#666',
                                color: '#000',
                              },
                              borderRadius: '5px',
                              width: '120px',
                              height: '27px',
                            }}
                          >
                            {contact.status}
                          </Button>
                        </TableCell>
                      </TableRow>
                      {expandedRow === contact.id && (
                        <TableRow>
                          <TableCell colSpan={6} style={{ padding: 0 }}>
                            <Box sx={{ padding: '16px' }}>
                              <Typography variant="body2" color="#000">
                                Message: {contact.message}
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))
                )}
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              sx={{ minWidth: '40px', minHeight: '40px', ml: 1 }}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={endIndex >= filteredContacts.length}
              sx={{ minWidth: '40px', minHeight: '40px', ml: 1 }}
            >
              <KeyboardArrowRightIcon />
            </Button>
          </Box>
        </Paper>
      </Box>
    </DashboadRootLayout>
  );
};

export default Page;
