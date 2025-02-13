'use client';
import React, { useState, ChangeEvent, useEffect } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Box, Button, Paper, Typography, Grid, TextField, IconButton } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
// import { data as initialData, TestimonialData } from './TestimonialData'; // Import from the correct path
import Replace from '@/public/images/Replace.png';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { createClientTestomonial, deleteClientTestomonial, getClientTestomonials, updateClientTestomonial } from '@/app/api/clientTestomonial/pageApi';

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
export interface TestimonialData {
  id:string;
  image: string; // Change the type to string
  name: string;
  destination: string;
  message: string;
}

const Testimonial: React.FC = () => {
  const [data, setData] = useState<TestimonialData[]>([]);
  const [editIndex, setEditIndex] = useState<string | null>(null);
  const [formData, setFormData] = useState<TestimonialData>({
    id:'',
    image: '',
    name: '',
    destination: '',
    message: '',
  });

  const [image, setImage] = useState<string | null>(null); // To store the selected image
  const [imageFile, setImageFile] = useState<File | null>(null); // To store the selected image

  const [name, setName] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClientTestomonials();

        setData(data);

      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])
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

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const newImageData = reader.result as string;
  //       const newData = [...data];
  //       newData[index] = { ...newData[index], image: newImageData };
  //       setData(newData);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

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

  // const handleEdit = (id: string) => {
  //   console.log("index Id",id);
  //   setEditIndex(id);
  //  setFormData(data[id]);
  // };
  // const handleEdit = (id: string) => {
  //   console.log("index Id", id);
  //   setEditIndex(id);
  //   const client = data.find(client => client.id === id);  // Find the specific client by id
  //   if (client) {
  //     setFormData(client);  // Set form data to the client
  //   }
  // };
  
  const handleEdit = (id: string) => {
    console.log("Editing client with id:", id);
    setEditIndex(id);
    
    const clientToEdit = data.find(client => client.id.toString() === id);
    if (clientToEdit) {
      setFormData({
        id:clientToEdit.id,
        image:clientToEdit.image,
        name: clientToEdit.name,
        destination: clientToEdit.destination,
        message: clientToEdit.message,
      });
    }
  };
  

  // const handleSave = (index: number) => {
  //   const newData = [...data];
  //   newData[index] = formData;
  //   setData(newData);
  //   setEditIndex(null);
  // };

  // const handleDelete = (index: number) => {
  //   const newData = data.filter((_, i) => i !== index);
  //   setData(newData);
  // };

   const handleDelete = async (id:string)=>{
      console.log("id",id);
      if(id)
      {
        const response = await deleteClientTestomonial(id);
  alert("Deleted");
  window.location.reload();
        
      }
    }
  
    const handleSaveClick = async (id: string) => {
      // Find the row that matches the clicked id

      console.log(id);
      const rowToUpdate = data.find(row => row.id.toString() === id);
    
      if (rowToUpdate) {
        const updatedData = {
          id:formData.id,
          image:formData.image,
          name: formData.name, // from form data
          destination: formData.destination, // from form data
          message: formData.message, // from form data
        };
        console.log("name111", updatedData.name); 
        const formDataToSubmit = new FormData();
        
        // Append the updated values from the row
        formDataToSubmit.append("name", updatedData.name);
        formDataToSubmit.append("destination", updatedData.destination);
        formDataToSubmit.append("message", updatedData.message);
        
        
        // Append the image if it's available
        if (imageFile) {
          formDataToSubmit.append("image", imageFile); // Append the image file to formDataToSubmit
        }
    
        try {
          const response = await updateClientTestomonial(id, formDataToSubmit);
          alert("Achievement updated successfully!");
          window.location.reload();
          // Clear form data and image
          // setEditIdx(null); // Exit edit mode
        } catch (error) {
          console.error("Error updating achievement:", error);
          alert("Failed to update achievement.");
        }
      }
    };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log({name,value});
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  // Popup box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("destination", destination);
      formData.append("message", message);

      if (imageFile) {
        formData.append("image", imageFile); // Append the image file to formData
      }
      const response = await createClientTestomonial(formData);
      alert("inserted");
      window.location.reload();
    }
    catch (err) {
      console.log("erroir");
      throw err;
    }
  }

  const [hovered, setHovered] = useState(false);

  return (
    <DashboadRootLayout>
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

            {data.map((client,index) => (

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
                    <Image src={client.image} alt={client.name} width={100} height={60} />
                    {editIndex === client.id && hovered && (
                      <Tooltip title="Upload Image">
                        <IconButton
                          style={{ position: 'absolute', top: 0, left: 0 }}
                          component="label"
                          htmlFor={`fileInput-${client.id}`}
                        >
                          <CloudUploadOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                  {/* <input
                    type="file"
                    accept="image/*"
                    id={`fileInput-${id}`}
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageChange(e, id)}
                  /> */}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', color: '#000' }}>
                  {editIndex === client.id ? (
                    <ThemeProvider theme={theme}>
                      <TextField name="name" value={formData.name || ''} onChange={handleChange} fullWidth />
                    </ThemeProvider>
                  ) : (
                    client.name
                  )}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', color: '#000' }}>
                  {editIndex === client.id ? (
                    <ThemeProvider theme={theme}>
                      <TextField name="destination" value={formData.destination || ''} onChange={handleChange} fullWidth />
                    </ThemeProvider>
                  ) : (
                    client.destination
                  )}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', color: '#000' }}>
                  {editIndex === client.id ? (
                    <ThemeProvider theme={theme}>
                      <TextField
                        name="message"
                        value={formData.message || ''}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </ThemeProvider>
                  ) : (
                    client.message
                  )}
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                  {editIndex === client.id ? (
                    <IconButton onClick={() => handleSaveClick(client.id)}>
                      <Button variant="contained">Save</Button>
                    </IconButton>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(client.id)}>
                        <EditIcon sx={{ color: '#000' }} />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(client.id)}>
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
      {/* <Grid>
        {open && (
          <Box
            sx={{
              destination: 'fixed',
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
              destination: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 999,
            }}
            onClick={handleClose}
          />
        )}
      </Grid> */}

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
                    placeholder="Client Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    placeholder="Position"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
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
                </Box>
              </Box>
              <TextField
                placeholder="Client Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
    </DashboadRootLayout>
  );
};

export default Testimonial;
