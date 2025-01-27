'use client';
import React, { useState, ChangeEvent } from 'react';
import RootLayout from '../../page';
import { Box, Button, Paper, Typography, Grid, TextField, IconButton } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import { data as initialData, TestimonialData } from './TestimonialData'; // Import from the correct path
import Replace from '@/public/images/Replace.png';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

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

const Testimonial: React.FC = () => {
  const [data, setData] = useState<TestimonialData[]>(initialData);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<TestimonialData>({
    image: initialData[0].image,
    clientName: '',
    position: '',
    clientMessage: '',
  });

  // Image change
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImageData = reader.result as string;
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: newImageData,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImageData = reader.result as string;
        const newData = [...data];
        newData[index] = { ...newData[index], image: newImageData };
        setData(newData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(data[index]);
  };

  const handleSave = (index: number) => {
    const newData = [...data];
    newData[index] = formData;
    setData(newData);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Popup box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hovered, setHovered] = useState(false);

  return (
    <RootLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Client Testimonial</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ borderRadius: '20px', height: '46px', width: '202px', backgroundColor: '#CBBC87', border: '1px' }}>
          + Add Testimonial
        </Button>
      </Box>
      <TableContainer component={Paper} style={{ background: '#fff' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: '#000',
                  borderRight: '1px solid #ccc',
                  borderBottom: '1px solid #ccc',
                  textAlign: 'center',
                }}
              >
                Image
              </TableCell>
              <TableCell
                style={{
                  borderRight: '1px solid #ccc',
                  borderBottom: '1px solid #ccc',
                  color: '#000',
                  width: '150px',
                  textAlign: 'center',
                }}
              >
                Client Name
              </TableCell>
              <TableCell
                style={{
                  borderRight: '1px solid #ccc',
                  borderBottom: '1px solid #ccc',
                  color: '#000',
                  textAlign: 'center',
                }}
              >
                Position
              </TableCell>
              <TableCell
                style={{
                  borderRight: '1px solid #ccc',
                  borderBottom: '1px solid #ccc',
                  color: '#000',
                  textAlign: 'center',
                }}
              >
                Client Message
              </TableCell>
              <TableCell sx={{ color: '#000', width: '150px', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((client, index) => (
              <TableRow key={index}>
                <TableCell style={{ borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', position: 'relative' }}>
                  <Box
                    style={{
                      position: 'relative',
                      width: 50, // Adjust according to your image size
                      height: 60, // Adjust according to your image size
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Image src={client.image} alt={client.clientName} width={50} height={60} />
                    {editIndex === index && hovered && (
                      <Tooltip title="Upload Image">
                        <IconButton
                          style={{ position: 'absolute', top: 0, left: 0 }}
                          component="label"
                          htmlFor={`fileInput-${index}`}
                        >
                          <CloudUploadOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                  <input
                    type="file"
                    accept="image/*"
                    id={`fileInput-${index}`}
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', color: '#000' }}>
                  {editIndex === index ? (
                    <ThemeProvider theme={theme}>
                      <TextField name="clientName" value={formData.clientName} onChange={handleChange} fullWidth />
                    </ThemeProvider>
                  ) : (
                    client.clientName
                  )}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', color: '#000' }}>
                  {editIndex === index ? (
                    <ThemeProvider theme={theme}>
                      <TextField name="position" value={formData.position} onChange={handleChange} fullWidth />
                    </ThemeProvider>
                  ) : (
                    client.position
                  )}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', color: '#000' }}>
                  {editIndex === index ? (
                    <ThemeProvider theme={theme}>
                      <TextField
                        name="clientMessage"
                        value={formData.clientMessage}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </ThemeProvider>
                  ) : (
                    client.clientMessage
                  )}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                  {editIndex === index ? (
                    <IconButton onClick={() => handleSave(index)}>
                      <Button variant="contained">Save</Button>
                    </IconButton>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(index)}>
                        <EditIcon sx={{ color: '#000' }} />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(index)}>
                        <DeleteIcon sx={{ color: 'red' }} />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
  );
};

export default Testimonial;
