'use client';
import React, { useState, ChangeEvent } from 'react';
import RootLayout from '../../page';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Image from 'next/image';
import { rows as initialRows } from './data'; // Import the rows from data.ts
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Replace from '@/public/images/Replace.png';
import { Margin } from '@mui/icons-material';

interface Row {
  image: string;
  title: string;
  publisher: string;
  date: string;
  link: string;
  description: string;
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: 'black', // Set text color to black
        },
      },
    },
  },
});

const Page: React.FC = () => {
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const handleEditClick = (index: number) => {
    setEditIdx(index);
  };

  const handleSaveClick = () => {
    setEditIdx(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, field: keyof Row) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = e.target.value;
    setRows(updatedRows);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const updatedRows = [...rows];
        updatedRows[index].image = event.target?.result as string;
        setRows(updatedRows);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleNextPage = () => {
    if ((currentPage - 1) * itemsPerPage + itemsPerPage < rows.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate displayed rows based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, rows.length);
  const displayedRows = rows.slice(startIndex, endIndex);

  // Popup box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <RootLayout>
        <Box sx={{fontFamily:'Nunito Sans'}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4">Achievement</Typography>
            <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}>
              + Add Achievement
            </Button>
          </Box>
          <TableContainer component={Paper} style={{ background: '#fff' }}>
            <Table aria-label="custom table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: '#000',
                      textAlign: 'center',
                      borderBottom: '1px solid #ccc',
                      borderRight: '1px solid #ccc',
                    }}
                  >
                    Image
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#000',
                      textAlign: 'center',
                      borderBottom: '1px solid #ccc',
                      borderRight: '1px solid #ccc',
                    }}
                  >
                    Details
                  </TableCell>
                  <TableCell
                    sx={{
                      color: '#000',
                      textAlign: 'center',
                      borderBottom: '1px solid #ccc',
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows.map((row, index) => (
                  <TableRow key={index} sx={{ borderBottom: '1px solid #ccc' }}>
                    <TableCell
                      style={{
                        position: 'relative',
                        borderBottom: '1px solid #ccc',
                        borderRight: '1px solid #ccc',
                      }}
                    >
                      <Box
                        style={{
                          position: 'relative',
                          width: 150,
                          height: 150,
                        }}
                      >
                        <Image src={row.image} alt="thumbnail" width={165} height={154} />
                        {editIdx === index && (
                          <>
                            <input
                              accept="image/*"
                              style={{ display: 'none' }}
                              id={`icon-button-file-${index}`}
                              type="file"
                              onChange={(e) => handleImageChange(e, index)}
                            />
                            <label htmlFor={`icon-button-file-${index}`}>
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                sx={{
                                  position: 'absolute',
                                  bottom: 0,
                                  right: 0,
                                }}
                              >
                                <PhotoCameraIcon />
                              </IconButton>
                            </label>
                          </>
                        )}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                      {editIdx === index ? (
                        <>
                          <ThemeProvider theme={theme}>
                            <TextField
                              variant="standard"
                              value={row.title}
                              onChange={(e) => handleChange(e, index, 'title')}
                              fullWidth
                            />
                          </ThemeProvider>
                          <Box sx={{ display: 'flex', gap: '20px', mt: 2, mb: 2 }}>
                            <ThemeProvider theme={theme}>
                              <TextField
                                variant="standard"
                                value={row.publisher}
                                onChange={(e) => handleChange(e, index, 'publisher')}
                                sx={{ flex: 1 }}
                              />
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                              <TextField
                                variant="standard"
                                value={row.date}
                                onChange={(e) => handleChange(e, index, 'date')}
                                sx={{ flex: 1 }}
                              />
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                              <TextField
                                variant="standard"
                                value={row.link}
                                onChange={(e) => handleChange(e, index, 'link')}
                                sx={{ flex: 1 }}
                              />
                            </ThemeProvider>
                          </Box>
                          <ThemeProvider theme={theme}>
                            <TextField
                              variant="standard"
                              value={row.description}
                              onChange={(e) => handleChange(e, index, 'description')}
                              fullWidth
                            />
                          </ThemeProvider>
                        </>
                      ) : (
                        <>
                          <Typography variant="h3" sx={{ color: '#000',fontSize:'18px',fontWeight:800 }}>
                            {row.title}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: '20px', mt: 2, mb: 2 }}>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: '12px' }}>
                              Publisher: {row.publisher}
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: '12px' }}>
                              Date: {row.date}
                            </Typography>
                            <Link
                              href={row.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontSize: '12px',color:'#000',textDecoration:'none' }}
                            >
                              Link: {row.link}
                            </Link>
                          </Box>
                          <Typography variant="body2" sx={{ color: '#000' }}>
                            {row.description}
                          </Typography>
                        </>
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: 'none',
                      }}
                    >
                      {editIdx === index ? (
                        <Button variant="contained" onClick={handleSaveClick}>
                          Save
                        </Button>
                      ) : (
                        <>
                          <IconButton color="primary" aria-label="edit" onClick={() => handleEditClick(index)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: -10 }}>
            <Typography variant="body2">
              Showing {currentPage} of {rows.length}
            </Typography>
            <Box
              sx={{
                p: '5px',
                backgroundColor: 'rgba(213, 213, 213, 1)',
                borderRadius: '10px',
              }}
            >
              <KeyboardArrowLeftIcon
                sx={{ borderRight: '1px solid red', cursor: 'pointer' }}
                onClick={handlePrevPage}
              />
              <KeyboardArrowRightIcon sx={{ cursor: 'pointer' }} onClick={handleNextPage} />
            </Box>
          </Box>
        </Box>
        {/* Popup */}
        <Grid>
        {open && (
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: '500px',
              bgcolor: '#fff',
              border: '1px solid #fff',
              boxShadow: 54,
              p: 4,
              zIndex: 1000,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}></Box>
            <Box
              sx={{
                border: '1px solid #ccc',
                borderRadius: '20px',
                p: 1,
                color: '#000',
                m: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Image src={Replace} alt="Popup box image" width={100} height={100} />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ backgroundColor: 'rgba(243, 244, 248, 1)', fontWeight: '600', fontSize: '30px' }}
                  >
                    Client Name
                  </Typography>
                  <Typography variant="subtitle1" sx={{ backgroundColor: 'rgba(243, 244, 248, 1)', fontSize: '20px' }}>
                    Position
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ backgroundColor: 'rgba(243, 244, 248, 1)' }}>
                Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar. Lorem ipsum dolor sit amet
                consectoli tur adipiscing elit semper dalar. Lorem ipsum dolor sit amet consectoli tur adipiscing elit
                semper dalar. Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar. Lorem ipsum dolor
                sit amet consectoli tur adipiscing elit semper dalar.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button onClick={handleClose} variant="contained" sx={{ width: '200px' }}>
                Save
              </Button>
              <Button onClick={handleClose} variant="contained" sx={{ width: '200px' }}>
                Delete
              </Button>
            </Box>
          </Box>
        )}
        {open && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 999,
            }}
            onClick={handleClose}
          />
        )}
      </Grid>
      </RootLayout>
    </>
  );
};

export default Page;
