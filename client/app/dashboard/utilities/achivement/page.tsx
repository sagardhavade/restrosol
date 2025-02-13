'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';
import DashboardLayout from '@/app/components/layout';
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

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { addAchievement, deleteAchievement, getAchievement, updateAchievement } from '@/app/api/achievement/pageApi';

interface Row {
  id:string;
  image: string;
  title: string;
  publisher: string;
  dateCreated: string;
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
  const [rows, setRows] = useState<Row[]>([]);
  const [editIdx, setEditIdx] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [image, setImage] = useState<string | null>(null); // To store the selected image
  const [imageFile, setImageFile] = useState<File | null>(null); // To store the selected image

  const [title, setTitle] = useState<string>("");
  const [publisher,setPublisher] = useState<string>("");
  const [link,setLink] = useState<string>("");
  const [description,setDescription] = useState<string>("");
  
  
  const handleEditClick = async(index: string) => {
    console.log("index",index);

    setEditIdx(index);

  };

  const handleDelete = async (id:string)=>{
    console.log("id",id);
    if(id)
    {
      const response = await deleteAchievement(id);
alert("Deleted");
window.location.reload();
      
    }
  }

  const handleSaveClick = async (id: string) => {
    // Find the row that matches the clicked id
    const rowToUpdate = rows.find(row => row.id.toString() === id);
  
    if (rowToUpdate) {
      console.log("title",rowToUpdate.title);
      const formData = new FormData();
      
      // Append the updated values from the row
      formData.append("title", rowToUpdate.title);
      formData.append("description", rowToUpdate.description);
      formData.append("publisher", rowToUpdate.publisher);
      formData.append("link", rowToUpdate.link);
      
      // Append the image if it's available
      if (imageFile) {
        formData.append("image", imageFile); // Append the image file to formData
      }
  
      try {
        const response = await updateAchievement(id, formData);
        alert("Achievement updated successfully!");
  
        // Clear form data and image
        setTitle("");
        setDescription("");
        setPublisher("");
        setLink("");
        setImage(null);
        setImageFile(null);
        
        setEditIdx(null); // Exit edit mode
      } catch (error) {
        console.error("Error updating achievement:", error);
        alert("Failed to update achievement.");
      }
    }
  };
  

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string, field: keyof Row) => {
  //   const updatedRows = [...rows];
  //   updatedRows[id][field] = e.target.value;
  //   setRows(updatedRows);
  // };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string, // Keep `id` as string if it's the Row's `id`
    field: keyof Row
  ) => {
    const updatedRows = [...rows];
    
    // Find the row by its `id`
    const rowIndex = updatedRows.findIndex((row) => row.id.toString() === id);  // Convert `id` to string for comparison
  
    if (rowIndex !== -1) {
      updatedRows[rowIndex][field] = e.target.value; // Update the specific field
      setRows(updatedRows); // Set the updated rows in state
    } else {
      console.error("Row not found");
    }
  };
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the selected file as a Data URL
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

useEffect(() =>{
const fetchData = async() =>{
  try{
    const response = await getAchievement();
    console.log(response.data);
    setRows(response);

  }catch(err){
    console.log("Fetch Error");
  }
}
fetchData();
  },[]);

  const handleSubmit = async() =>{

    const formData = new FormData();
    formData.append("title",title);
    formData.append("description",description);
    formData.append("publisher",publisher);
    formData.append("link",link);
    if (imageFile) {
      formData.append("image", imageFile); // Append the image file to formData
    }
    const response = await addAchievement(formData);
    alert('Achievement insert successfully!');
    setTitle("");
    setDescription("");
    setPublisher("");
    setLink("");
    setImage(null);
    setImageFile(null);

  }

  return (
    <>
      <DashboardLayout>
        <Box sx={{ fontFamily: 'Nunito Sans' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4">Achievement</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
              sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}
            >
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
                {rows.map((row, index) => (
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
                        {editIdx === row.id && (
                          <>
                            {/* <input
                              accept="image/*"
                              style={{ display: 'none' }}
                              id={`icon-button-file-${index}`}
                              type="file"
                              onChange={(e) => handleImageChange(e, index)}
                            /> */}
                            <label htmlFor={`icon-button-file-${row.id}`}>
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
                      {editIdx === row.id ? (
                        <>
                          <ThemeProvider theme={theme}>
                            <TextField
                              variant="standard"
                              value={row.title}
                              onChange={(e) => handleChange(e, row.id, 'title')}
                              fullWidth
                            />
                          </ThemeProvider>
                          <Box sx={{ display: 'flex', gap: '20px', mt: 2, mb: 2 }}>
                            <ThemeProvider theme={theme}>
                              <TextField
                                variant="standard"
                                value={row.publisher}
                                onChange={(e) => handleChange(e, row.id, 'publisher')}
                                sx={{ flex: 1 }}
                              />
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                              <TextField
                                variant="standard"
                                value={row.dateCreated}
                                onChange={(e) => handleChange(e, row.id, 'dateCreated')}
                                sx={{ flex: 1 }}
                              />
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                              <TextField
                                variant="standard"
                                value={row.link}
                                onChange={(e) => handleChange(e, row.id, 'link')}
                                sx={{ flex: 1 }}
                              />
                            </ThemeProvider>
                          </Box>
                          <ThemeProvider theme={theme}>
                            <TextField
                              variant="standard"
                              value={row.description}
                              onChange={(e) => handleChange(e, row.id, 'description')}
                              fullWidth
                            />
                          </ThemeProvider>
                        </>
                      ) : (
                        <>
                          <Typography variant="h3" sx={{ color: '#000', fontSize: '18px', fontWeight: 800 }}>
                            {row.title}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: '20px', mt: 2, mb: 2 }}>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: '12px' }}>
                              Publisher: {row.publisher}
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#000', fontSize: '12px' }}>
                              Date: {row.dateCreated}
                            </Typography>
                            <Link
                              href={row.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontSize: '12px', color: '#000', textDecoration: 'none' }}
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
                      {editIdx === row.id ? (
                        <Button variant="contained" onClick={()=>handleSaveClick(row.id)}>
                          Save
                        </Button>
                      ) : (
                        <>
                          <IconButton color="primary" aria-label="edit" onClick={() => handleEditClick(row.id)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" aria-label="delete">
                            <DeleteIcon onClick={() => handleDelete(row.id)} />
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
                  {/* <Image src={Replace} alt="Popup box image" width={100} height={100} /> */}
                  <Box sx={{ textAlign: 'center', padding: 2 }}>
                    {/* <Typography variant="h6">Upload and Preview Image</Typography> */}

                    {/* If an image is selected, show the preview */}
                    {image ? (
                      <Box sx={{ marginBottom: 2 }}>
                        <Image
                          src={image}
                          alt="Preview"
                          width={100}
                          height={100}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '200px',
                            objectFit: 'cover',
                            marginBottom: '20px',
                          }}
                        />
                      </Box>
                    ) : (
                      <Box sx={{ marginBottom: 2 }}>
                        <Image
                          src=""
                          alt="Placeholder"
                          width={100}
                          height={100}
                          style={{ marginBottom: '20px' }}
                        />
                      </Box>
                    )}

                    {/* Button to open file browser */}
                    <Button variant="contained" component="label" sx={{ marginBottom: 2 }}>
                       Select Image
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange} // Only pass the event
                      />
                    </Button>

                    {/* Option to reset (replace) the image */}
                    <Button variant="contained" color="secondary" onClick={() => setImage(null)}>
                      Remove Image
                    </Button>
                  </Box>

                  <Box sx={{ ml: 2 }}>
                    <TextField
                      placeholder="Tittle"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      sx={{
                        mt: 2,
                        border: 'none',
                        color: '#6B7280',
                        width: '250px',
                        background: '#F9FAFB',
                        borderRadius: '4px',
                        '& .MuiInputBase-input': {
                          height: '44px',
                          fontSize: '16px',
                          padding: '0 14px',
                          color: '#000',
                          textAlign: 'center',
                        },
                      }}
                    ></TextField>

                    <TextField
                      placeholder="publisher"
                      value={publisher}
                      onChange={(e) => setPublisher(e.target.value)}
                      sx={{
                        mt: 2,
                        border: 'none',
                        color: '#6B7280',
                        width: '250px',
                        background: '#F9FAFB',
                        borderRadius: '4px',
                        '& .MuiInputBase-input': {
                          height: '44px',
                          fontSize: '16px',
                          padding: '0 14px',
                          color: '#000',
                          textAlign: 'center',
                        },
                      }}
                    ></TextField>
                    <TextField
                      placeholder="Link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      sx={{
                        mt: 2,
                        border: 'none',
                        color: '#6B7280',
                        width: '250px',
                        background: '#F9FAFB',
                        borderRadius: '4px',
                        '& .MuiInputBase-input': {
                          height: '44px',
                          fontSize: '16px',
                          padding: '0 14px',
                          color: '#000',
                          textAlign: 'center',
                        },
                      }}
                    ></TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        name='Select Date'
                        onChange={(newValue: Dayjs | null) => setSelectedDate(newValue)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            sx: {
                              // padding: '0 14px',
                              marginTop:'20px',
                              color:'#000' // Apply styles to TextField here
                            },
                          },
                        }} // Correct way to pass props to TextField
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <TextField
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{
                    mt: 2,
                    border: 'none',
                    color: '#6B7280',
                    width: '400px',
                    background: '#F9FAFB',
                    borderRadius: '4px',
                    '& .MuiInputBase-input': {
                      height: '44px',
                      fontSize: '16px',
                      padding: '0 14px',
                      color: '#000',
                      textAlign: 'center',
                    },
                  }}
                ></TextField>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button onClick={handleSubmit} variant="contained" sx={{ width: '200px' }}>
                  Save
                </Button>
                <Button onClick={handleClose} variant="contained" sx={{ width: '200px' }}>
                  Cancel
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
      </DashboardLayout>
    </>
  );
};

export default Page;