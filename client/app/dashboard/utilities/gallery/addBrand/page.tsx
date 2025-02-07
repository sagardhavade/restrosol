'use client';
import React, { useState, useRef, useEffect } from 'react';
import RootLayout from '@/app/dashboard/page';
import { Box, Button, Grid, TextField, Typography, MenuItem, Select, Divider, IconButton } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Replace from '@/public/images/Replace.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Image from 'next/image';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { addGallary } from '@/app/api/gallary/page';

interface Client {
  name: string;
  image: string;
}
interface client {
  clientName: string[];
  // clientImage: string;
  // clientImage: string[] | null; // Allow clientImage to be null
  clientDescription: string;
}
interface brandSection {
  category: string;
  brandName: string;
  brandDescription: string;

}
interface section {
  description: string;
  points: string[];
}
// interface ClientSection {
//   clientImages: string[];
// }

const AddBrand: React.FC = () => {
  const [sectionData, setSectionData] = useState<section | null>(null); // Can be null or a single object
  const [brandSectionData, setBrandSectionData] = useState<brandSection | null>(null); // Can be null or a single object
  const [clientSectionData, setClientSectionData] = useState<client | null>(null);

  const [gallery, setGallery] = useState<string>('');
  const [points, setPoints] = useState<string[]>(['']);
  const [clients, setClients] = useState<Client[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [brandName, setBrandName] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [description, setDescription] = useState('');

  const [clientName, setClientName] = useState<string[]>(['']);
  const [clientDescription, setClientDescription] = useState('');
  // const [clientImages, setClientImages] = useState<string[]>(['']); // Initial empty string for client images (URL or placeholder)

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]); // State to store file names
  // Handle image upload
  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  //   const file = e.target.files?.[0]; // Get the first file selected
  //   if (file) {
  //     const newClientImages = [...clientImages]; // Copy the clientImages array
  //     newClientImages[index] = URL.createObjectURL(file); // Set the new image for the specific client
  //     setClientImages(newClientImages); // Update the state with the new image
  //   }
  // };

  // Load Section Data from LocalStorage on Page Load
  useEffect(() => {
    const savedSection = localStorage.getItem("sectionData");
    const brandSection = localStorage.getItem("brandSectionData")
    const clientSectionData = localStorage.getItem("clientSectionData");
    console.log(brandSection);
    if (savedSection) {
      setSectionData(JSON.parse(savedSection)); // Now sectionData is an object, not an array
    }
    if (brandSection) {
      setBrandSectionData(JSON.parse(brandSection));
      // if (brandSectionData?.brandName) {
      //   setBrandName(brandSectionData.brandName);
      // }
      console.log("brandsectionData", brandSectionData);
    }
    if (clientSectionData) {
      setClientSectionData(JSON.parse(clientSectionData));
      console.log("clientSectionData", clientSectionData);
    }
  }, []);
  useEffect(() => {
    if (brandSectionData?.brandDescription) {
      setBrandDescription(brandSectionData.brandDescription)
    }
    if (brandSectionData?.brandName) {
      setBrandName(brandSectionData.brandName);
    }
    if (brandSectionData?.category) {
      setGallery(brandSectionData.category)
    }

  }, [brandSectionData]);
  useEffect(() => {
    if (sectionData?.description) {
      setDescription(sectionData.description)
    }
    if (sectionData?.points) {
      setPoints(sectionData.points);
    }


  }, [sectionData]);
  useEffect(() => {
    if (clientSectionData?.clientDescription) {
      setClientDescription(clientSectionData.clientDescription)
    }
    if (clientSectionData?.clientName) {
      setClientName(clientSectionData.clientName);
    }
    if (clientSectionData?.clientDescription) {
      setClientDescription(clientSectionData.clientDescription);
    }
    // if (clientSectionData?.clientImage) {
    //   setClientImages(clientSectionData.clientImage);
    // }
  }, [clientSectionData]);

  // Save Section to LocalStorage
  const handleSaveSection = () => {

    const section: section = {

      description,
      points,

    };
    // Ensure prevState is always an array
    setSectionData(section);

    localStorage.setItem("sectionData", JSON.stringify(section));
    alert("Section data saved temporarily!");
  };
  const handleBrandSaveSection = () => {
    const category = gallery;
    const section: brandSection = {
      category,
      brandName,
      brandDescription
    };
    // Ensure prevState is always an array
    setBrandSectionData(section);

    localStorage.setItem("brandSectionData", JSON.stringify(section));
    alert("Brand Section data saved!");
  };

  const handleClientSaveSection = () => {
    const clientSection: client = {
      clientName,
      clientDescription,
      // clientImage: clientImages, // Store the image URL or null
    };

    setClientSectionData(clientSection);
    localStorage.setItem("clientSectionData", JSON.stringify(clientSection));
    alert("Client Section Data Saved !");
  }
  const handleAddGallary = async () => {
    // Retrieve stored data from localStorage
    const sectionData = localStorage.getItem("sectionData");
    const brandSectionData = localStorage.getItem("brandSectionData");
    const clientSectionData = localStorage.getItem("clientSectionData");

    // Parse JSON data
    const section = sectionData ? JSON.parse(sectionData) : null;
    const brandSection = brandSectionData ? JSON.parse(brandSectionData) : null;
    const clientSection = clientSectionData ? JSON.parse(clientSectionData) : null;

    // Combine all data into one object
    const combinedData = {
      ...section,
      ...brandSection,
      ...clientSection,
    };

    const formData = new FormData();
    console.log(combinedData);
    // Append form data (combinedData) as a string
    // formData.append("data", JSON.stringify(combinedData));
    formData.append("category", brandSection.category);
    formData.append("brandName", brandSection.brandName);
    formData.append("brandDescription", brandSection.brandDescription);
    formData.append("description", section.description);
    formData.append("points", section.points);
    formData.append("clientName", clientSection.clientName);
    formData.append("clientDescription", clientSection.clientDescription);


    // Append files to form data
    if (selectedFiles.length > 0) {
      selectedFiles.forEach(file => {
        formData.append("images", file); // Append each image/video to "images" field
      });
    } else {
      // If no images, you can choose to append null or empty array
      formData.append("images", JSON.stringify([])); // Append an empty array if no images
    }

    // Log FormData contents for debugging
    formData.forEach((value, key) => {
      console.log(key + ": " + value); // Log all FormData entries for debugging
    });
    // Handle client images (multiple)
    // if (clientSection?.clientImage && clientSection.clientImage.length > 0) {
    //   clientSection.clientImage.forEach((clientImage: string) => {
    //     formData.append("clientImage", clientImage); // Append each client image
    //   });
    // }
    // else {
    //   formData.append("clientImage", ""); // If no client images, append an empty string
    // }

    // Log the FormData contents
    formData.forEach((value, key) => {
      console.log(key + ": " + value); // This logs all the FormData entries
    });
    try {
      // Call the API with the formData
      const result = await addGallary(formData);
      alert('Gallery uploaded successfully!');

      // Optionally clear selected files or localStorage here
      setSelectedFiles([]);  // Clear selected files
      localStorage.removeItem("sectionData");
      localStorage.removeItem("brandSectionData");
      localStorage.removeItem("clientSectionData");
    } catch (error) {
      console.error("Error uploading gallery:", error);
      alert("Failed to upload gallery.");
    }
  };


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
  // const handleClientChange = (index: number, value: string) => {
  //   const newClient = [...clientName];
  //   newClient[index] = value;
  //   setclientName(newClient);
  // };

  const handleClientChange = (index: number, value: string) => {
    const newClientNames = [...clientName];
    newClientNames[index] = value;
    setClientName(newClientNames);
  };
  const addClients = () => {
    setClientName([...clientName, '']); // Add an empty client name
    // setClientImages([...clientImages, '/placeholder.png']); // Add a placeholder image
  };

  // Add client button handler
  // const addClients = () => {
  //   if (clientName.length < 2) {
  //     setclientName([...clientName, '']); // Add an empty client name for the next input
  //   } else {
  //     alert('Maximum 2 clients allowed!');
  //   }
  // };
  const addClient = () => {
    setClients([...clients, { name: '', image: Replace.src }]);
  };

  const handleClientNameChange = (index: number, value: string) => {
    const newClients = [...clients];
    newClients[index].name = value;
    setClients(newClients);
  };

  // const handleImageUpload = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     // Handle the uploaded files
  //     console.log(files);
  //   }
  // };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    // Limit file selection to a max of 10
    if (selectedFiles.length + fileArray.length > 10) {
      alert("You can only upload a maximum of 10 images/videos.");
      return;
    }

    setSelectedFiles((prevFiles) => [...prevFiles, ...fileArray]);
    setFileNames((prevNames) => [
      ...prevNames,
      ...fileArray.map((file) => file.name),
    ]);

  };

  return (
    <>
      <RootLayout>
        <Grid container justifyContent="center">
          <Box>
            {/* <Button
              variant="contained"
              onClick={handleAddBrand}
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
            </Button> */}
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
                value={brandName}  // Directly access brandName from the object
                onChange={(e) => setBrandName(e.target.value)}

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
                value={brandDescription}
                onChange={(e) => setBrandDescription(e.target.value)}
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
                onClick={handleBrandSaveSection}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                onClick={handleSaveSection}
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
                {/* <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} /> */}
                <input
                  type="file"
                  ref={fileInputRef}
                  hidden
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                />

              </Button>
              <Divider sx={{ border: '.5px solid #ccc ', m: 2 }} />
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                *Add Maximum 10 Images/Videos*
              </Typography>
              {/* Display file names */}
              {fileNames.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <Typography variant="body2">Selected Files:</Typography>
                  <ul>
                    {fileNames.map((fileName, index) => (
                      <li key={index}>{fileName}</li>
                    ))}
                  </ul>
                </div>
              )}
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
                    value={clientDescription}
                    onChange={(e) => setClientDescription(e.target.value)}
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
                  {clientName.map((client, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: '50px', mt: 5 }}>
                      {/* <Image
                        src={clientImage}
                        alt="Client Image"
                        width={76}
                        height={76}
                        objectFit="cover"
                        style={{ borderRadius: '50px' }}
                      /> */}

                      {/* Image upload input */}
                      {/* <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, index)} // Call image handler
                        style={{ display: 'none' }}
                        id={`upload-image-${index}`} // Unique ID for each client
                      />
                      <label htmlFor={`upload-image-${index}`} style={{ cursor: 'pointer' }}>
                        
                        <Image
                          src={clientImages[index] && clientImages[index].startsWith("http")
                            ? clientImages[index]
                            : "/placeholder.png"}
                          alt={`Client Image ${index + 1}`}
                          width={76}
                          height={76}
                          objectFit="cover"
                          style={{ borderRadius: "50px" }}
                        />
                      </label> */}
                      <TextField
                        placeholder="Client Name"
                        value={client}
                        onChange={(e) => handleClientChange(index, e.target.value)}
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
                    onClick={addClients}
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
                onClick={handleClientSaveSection}
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
            onClick={handleAddGallary}
            style={{
              width: '202px',
              height: '46px',
              top: '43px',

              borderRadius: '50px',
            }}
          >
            Save Gallary
          </Button>
        </Grid>
      </RootLayout>
    </>
  );
};

export default AddBrand;
