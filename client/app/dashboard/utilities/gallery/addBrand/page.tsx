'use client';
import React, { useState, useRef } from 'react';
import RootLayout from '@/app/dashboard/page';
import { Box, Button, Grid, TextField, Typography, MenuItem, Select, Divider, IconButton } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Replace from '@/public/images/Replace.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Image from 'next/image';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

interface Client {
  name: string;
  image: string;
}

const AddBrand: React.FC = () => {
  const [gallery, setGallery] = useState<string>('');
  const [points, setPoints] = useState<string[]>(['']);
  const [clients, setClients] = useState<Client[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setGallery(event.target.value as string);
  };

  const handlePointChange = (index: number, value: string) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  const addPoint = () => {
    setPoints([...points, '']);
  };

  const removePoint = (index: number) => {
    const newPoints = points.filter((_, i) => i !== index);
    setPoints(newPoints);
  };

  const addClient = () => {
    setClients([...clients, { name: '', image: Replace.src }]);
  };

  const handleClientNameChange = (index: number, value: string) => {
    const newClients = [...clients];
    newClients[index].name = value;
    setClients(newClients);
  };

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Handle the uploaded files
      console.log(files);
    }
  };

  return (
    <>
      <RootLayout>
        <Grid container justifyContent="center">
          <Box>
            <Button
              variant="contained"
              style={{
                width: '165px',
                height: '46px',
                top: '33px',
                left: '999px',
                gap: '0px',
                backgroundColor: '#D4AF37',
              }}
            >
              Save Gallery
            </Button>
            <Box
              mt={5}
              p={3}
              sx={{
                width: '1140px',
                padding: '30px 250px 30px 250px',
                gap: '27px',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Select
                labelId="gallery-label"
                value={gallery}
                onChange={handleChange}
                displayEmpty
                IconComponent={ArrowDropDownRoundedIcon}
                sx={{
                  border: '1px solid #E5E7EB',
                  color: '#6B7280',
                  background: '#F9FAFB',
                  height: '44px',
                  width: '194px',
                  borderRadius: '4px',
                  left: '250px',
                  textAlign: 'center',
                  '& .MuiSelect-icon': {
                    color: 'black', // Set the color of the down arrow
                  },
                }}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  PaperProps: {
                    style: {
                      maxHeight: '200px', // Optional: Adjust the max height if needed
                      width: '200px', // Optional: Adjust the width if needed
                      marginTop: '8px', // Optional: Adjust the margin top if needed
                      borderRadius: '4px', // Optional: Add border radius
                    },
                  },
                  MenuListProps: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  },
                }}
              >
                <MenuItem value="Domestic">Domestic</MenuItem>
                <MenuItem value="international">International</MenuItem>
              </Select>

              <TextField
                placeholder="Brand Name..."
                sx={{
                  mt: 2,
                  border: 'none',
                  color: '#6B7280',
                  width: '683px',
                  background: '#F9FAFB',
                  '& .MuiInputBase-input': {
                    height: '71px',
                    fontSize: '42px',
                    padding: '0 14px',
                    color: '#000',
                    textAlign: 'center',
                    fontWeight: 700,
                  },
                }}
                InputProps={{
                  style: { height: '71px', fontSize: '42px' },
                }}
              />
              <TextField
                placeholder="Brand Description"
                sx={{
                  mt: 2,
                  border: 'none',
                  color: '#6B7280',
                  width: '639px',
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
                InputProps={{
                  style: { height: '44px', fontSize: '42px' },
                }}
              />
              <Divider sx={{ border: '.5px solid #ccc ', m: 2 }} />
              <Button
                variant="outlined"
                style={{
                  height: '46px',
                  marginTop: '24px',
                  left: '270px',
                }}
              >
                Save Section
              </Button>
            </Box>

            <Box
              mt={5}
              p={3}
              sx={{
                width: '1140px',
                padding: '30px',
                gap: '27px',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontSize: '30px', color: '#6D758F' }}>
                    Highly effective solutions
                  </Typography>
                  <TextField
                    placeholder={`Add Brand Description and key values we solved`}
                    multiline
                    rows={2}
                    sx={{
                      mt: 2,
                      border: 'none',
                      color: '#6B7280',
                      background: '#F9FAFB',
                      borderRadius: '4px',
                      width: '481px',
                      '& .MuiInputBase-input': {
                        height: 'auto',
                        padding: '10px',
                        color: '#000',
                      },
                    }}
                    InputProps={{
                      style: { height: 'auto', padding: '10px' },
                    }}
                  />
                  {points.map((point, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <CheckCircleIcon />
                      <TextField
                        placeholder={`Add Point ${index + 1}...`}
                        value={point}
                        onChange={(e) => handlePointChange(index, e.target.value)}
                        sx={{
                          border: 'none',
                          color: '#6B7280',
                          background: '#F9FAFB',
                          borderRadius: '4px',
                          flex: 1,
                          ml: 1,
                          '& .MuiInputBase-input': {
                            padding: '10px',
                            color: '#000',
                          },
                        }}
                        InputProps={{
                          style: { padding: '10px' },
                        }}
                      />
                      <IconButton onClick={() => removePoint(index)} sx={{ color: 'red', ml: 1 }}>
                        <CancelRoundedIcon />
                      </IconButton>
                    </Box>
                  ))}

                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      color: '#D4AF37',
                      borderColor: '#D4AF37',
                      width: '121px',
                      height: '28px',
                    }}
                    onClick={addPoint}
                  >
                    Add Point
                  </Button>
                </Box>
                <Image
                  src={Replace}
                  alt="Replace"
                  width={466}
                  height={366}
                  objectFit="cover"
                  style={{ borderRadius: '8px' }}
                />
              </Box>
              <Typography variant="caption" display="block" sx={{ mt: 1, textAlign: 'center' }}>
                *Add Maximum 10 Images/Videos*
              </Typography>
              <Divider sx={{ border: '.5px solid #ccc ', m: 2 }} />
              <Button
                variant="outlined"
                style={{
                  width: '202px',
                  height: '46px',
                  marginTop: '24px',
                  left: '440px',
                  color: '#CBBC87',
                  borderColor: '#CBBC87',
                  borderRadius: '50px',
                }}
              >
                Save Section
              </Button>
            </Box>

            <Box
              mt={5}
              p={3}
              sx={{
                width: '1140px',
                padding: '30px',
                gap: '27px',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: '#D4AF37',
                  borderColor: '#D4AF37',
                  width: '194px',
                  height: '44px',
                }}
                onClick={handleImageUpload}
              >
                Upload Images
                <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} />
              </Button>
              <Divider sx={{ border: '.5px solid #ccc ', m: 2 }} />
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                *Add Maximum 10 Images/Videos*
              </Typography>
            </Box>
            <Box
              mt={5}
              p={3}
              sx={{
                width: '1139px',
                padding: '30px',
                gap: '27px',
                border: '1px solid #E5E7EB',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
                height: '639px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Image src={Replace} alt="Replace" width={387} height={433} objectFit="cover" />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '42px', fontWeight: 700, color: '#1C2448' }}>
                    Client Testimonials
                  </Typography>
                  <TextField
                    placeholder="Brand Description"
                    sx={{
                      mt: 2,
                      border: 'none',
                      color: '#6B7280',
                      width: '549px',
                      background: '#F9FAFB',
                      borderRadius: '4px',
                      height: '41px',
                      '& .MuiInputBase-input': {
                        height: '41px',
                        fontSize: '16px',
                        padding: '0 14px',
                        color: '#000',
                      },
                    }}
                    InputProps={{
                      style: { height: '44px', fontSize: '42px' },
                    }}
                  />
                  {clients.map((client, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: '50px', mt: 5 }}>
                      <Image
                        src={client.image}
                        alt="Client Image"
                        width={76}
                        height={76}
                        objectFit="cover"
                        style={{ borderRadius: '50px' }}
                      />
                      <TextField
                        placeholder="Client Name"
                        value={client.name}
                        onChange={(e) => handleClientNameChange(index, e.target.value)}
                        sx={{
                          mt: 2,
                          border: 'none',
                          color: '#6B7280',
                          width: '120px',
                          background: '#F9FAFB',
                          borderRadius: '4px',
                          height: '44px',
                          '& .MuiInputBase-input': {
                            height: '44px',
                            fontSize: '16px',
                            padding: '0 14px',
                            color: '#000',
                            fontWeight: 5000,
                          },
                        }}
                        InputProps={{
                          style: { height: '44px', fontSize: '42px' },
                        }}
                      />
                    </Box>
                  ))}
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      width: '121px',
                      height: '28px',
                      color: '#CBBC87',
                      borderColor: '#CBBC87',
                      borderRadius: '50px',
                    }}
                    onClick={addClient}
                  >
                    Add Client
                  </Button>
                </Box>
              </Box>{' '}
              <Typography variant="caption" display="block" sx={{ mt: 1, fontSize: '14px' }}>
                *Add Maximum 2 Clients*
              </Typography>
              <Divider sx={{ border: '.5px solid #ccc ' }} />
              <Button
                variant="outlined"
                style={{
                  width: '202px',
                  height: '46px',
                  left: '440px',
                  color: '#CBBC87',
                  borderColor: '#CBBC87',
                  borderRadius: '50px',
                }}
              >
                Save Section
              </Button>
            </Box>
          </Box>
          <Button
            variant="contained"
            style={{
              width: '202px',
              height: '46px',
              top: '43px',

              borderRadius: '50px',
            }}
          >
            Save Section
          </Button>
        </Grid>
      </RootLayout>
    </>
  );
};

export default AddBrand;
