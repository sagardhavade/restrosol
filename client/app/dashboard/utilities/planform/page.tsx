'use client';
import React, { useState } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Chip, Paper, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterBox from './components/FilterBox';
import { formLists } from './components/data';

const Page: React.FC = () => {
  const statusColors: Record<string, { backgroundColor: string; color: string }> = {
    Completed: { backgroundColor: '#8ef5e6', color: '#00B69B' },
    Pending: { backgroundColor: '#a887f5', color: '#6226EF' },
    NA: { backgroundColor: '#f09b95', color: 'rgba(245, 0, 0, 1)' },
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < formLists.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, formLists.length);
  const displayedRows = formLists.slice(startIndex, endIndex);

  return (
    <DashboadRootLayout>
      <Box sx={{fontFamily: 'Nunito Sans'}}>
        <Typography variant="h2">Plan Form</Typography>
        <FilterBox />
        <Paper elevation={1} sx={{ backgroundColor: '#fff', color: '#000', borderRadius: '0.3px',width:'1141px' }}>
          <Box sx={{ width: '100%'}}>
            <Table aria-label="plan form table" sx={{ whiteSpace: 'nowrap', mt: 2 }}>
              <TableHead>
                <TableRow sx={{
                  width: '1141px',
                  height: '52px',
                  top:' 866px',
                  left:' 269px',
                  gap: '0px',
                  opacity: '0px',
                  
                }}>
                  <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      NAME
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      Phone
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      E-MAIL
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ borderRight: '2px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      DATE
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ borderRight: '2px solid #ccc' }}>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      Plan
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600} color="#000">
                      STATUS
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((formList) => (
                  <TableRow key={formList.id} sx={{ 
                    borderRight: '2px solid #ccc',
                    width: '1141px',
                  height: '52px',
                  top:' 866px',
                  left:' 269px',
                  gap: '0px',
                  opacity: '0px',
                    }}>
                    <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                      <Typography sx={{ fontSize: '14px', }} color="#000">
                        {formList.id}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="body2" color="#000" fontSize='14px'>
                            {formList.name}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                      <Typography color="#000" variant="body2" fontSize='14px'>
                        {formList.phone}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: '2px solid #ccc' }}>
                      <Typography color="#000" variant="body2"fontSize='14px'>
                        {formList.email}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ borderRight: '2px solid #ccc' }}>
                      <Typography variant="body2" color="#000" fontSize='14px'>
                        {formList.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ borderRight: '2px solid #ccc' }}>
                      <Typography variant="body2" color="#000">
                        {formList.type}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button sx={{
                          px: '4px',
                          backgroundColor: statusColors[formList.status]?.backgroundColor || '#666',
                          color: statusColors[formList.status]?.color || '#fff',
                          p: 2,
                          borderRadius: '5px',
                          width: '93px',
                          height: '27px',
                          opacity: '60%',
                          fontSize:'14px',
                          left:'20px'
                        }}>
                       
                        <Typography sx={{fontFamily:'Nunito Sans', fontSize: '12px',lineHeight:'15.06px',
                        fontWeight:600 }}>{formList.status}</Typography>
                      </Button>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: -10 }}>
          <Typography variant="body2">
            Showing {startIndex + 1} to {endIndex} of {formLists.length}
          </Typography>
          <Box
            sx={{
              p: '5px',
              backgroundColor: '#FAFBFD',
              borderRadius: '10px',
              height:'30px',
              width:'86px',
              border:'0.6px solid #979797',
              display:'flex',
              justifyContent:'space-between'
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ cursor: 'pointer',borderRight:'1px solid #979797',width:'40px' }}
              onClick={handlePrevPage}
              aria-label="Previous page"
            />
            <KeyboardArrowRightIcon
              sx={{ cursor: 'pointer',borderLeft:'1px solid #979797',width:'40px'}}
              onClick={handleNextPage}
              aria-label="Next page"
            />
          </Box>
        </Box>
      </Box>
    </DashboadRootLayout>
  );
};

export default Page;
