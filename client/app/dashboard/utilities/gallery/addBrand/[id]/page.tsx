"use client";
import React, { useState, useRef, useEffect } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Box, Button, Grid, TextField, Typography, MenuItem, Select, Divider, IconButton } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Replace from '@/public/images/Replace.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Image from 'next/image';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { addGallary, getGallary, updateGallary } from '@/app/api/gallary/pageApi';
import { useSearchParams } from 'next/navigation'
import { useParams } from 'next/navigation';
import { setConfig } from 'next/config';
interface Client {
  name: string;
  image: string;
}
interface client {
  clientName: string[];
  // clientImage: string;
  clientImage: string[] | null; // Allow clientImage to be null
  clientDescription: string;
  clientSectionImage: string[];
}
interface brandSection {
  category: string;
  brandName: string;
  brandDescription: string;

}
interface section {
  description: string;
  points: string[];
  sectionImage: string[];
}
// interface ClientSection {
//   clientImages: string[];
// }

const AddBrand: React.FC = () => {
  const [sectionData, setSectionData] = useState<section | null>(null); // Can be null or a single object
  const [brandSectionData, setBrandSectionData] = useState<brandSection | null>(null); // Can be null or a single object
  const [clientSectionData, setClientSectionData] = useState<client | null>(null);

  const [clientSectionImage, setClientSectionImage] = useState<string[]>([]);
  const [clientSectionImageFile, setClientSectionImageFile] = useState<File[]>([]);

  const [gallery, setGallery] = useState<string>('');
  const [points, setPoints] = useState<string[]>(['']);
  const [clients, setClients] = useState<Client[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [brandName, setBrandName] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [description, setDescription] = useState('');

  const [sectionImageFile, setSectionImageFile] = useState<File[]>([]);
  const [sectionImage, setSectionImage] = useState<string[]>([]);

  const [clientName, setClientName] = useState<string[]>(['']);
  const [clientDescription, setClientDescription] = useState('');

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [clientFileList, setClientFileList] = useState<File[]>([]); // Initialize as an empty array for file storage
  const [clientImage, setClientImage] = useState<string[]>([]);

  // This function will be triggered when the file field changes
  // This function will be triggered when the "Remove This Image" button is clicked
  // const removeSelectedImage = () => {
  //   setSelectedImage(null);
  //   setClientImage([]);
  // };
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]); // State to store file names

  // const searchParams = useSearchParams()
  // const id = searchParams.get('id'); // Retrieve the 'id' query parameter from the URL
  // console.log('Product ID:', id);  // Lo
  const params = useParams(); // This gets params from the URL (e.g., /addBrand/123)

  const idString = params.id; // Access the dynamic id from URL
  // Ensure `id` is a string, even if it's an array or undefined
  const id = Array.isArray(idString) ? idString[0] : idString ?? ''; // Fallback to empty string if id is undefined

  console.log('Product ID:', id);  // Lo
  const [isEditing, setIsEditing] = useState(false);

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
      console.log("brandsectionData", brandSectionData);
    }
    if (clientSectionData) {
      setClientSectionData(JSON.parse(clientSectionData));
      console.log("clientSectionData", clientSectionData);
    }


  }, []);
  // if (id) {

    
    // useEffect with an empty dependency array to ensure the fetchGallary function runs only once
    useEffect(() => {
      const fetchGallary = async () => {
        try {
          const fetchData = await getGallary(); // Replace with your actual fetch function
          console.log(fetchData);
  
          if (id) {
            const matchedItem = fetchData.find((item: any) => item.id === id); // Find the item by id
            console.log("didsf", matchedItem);
            if (matchedItem) {
              setGallery(matchedItem.category || '')
              setBrandDescription(matchedItem.brandDescription || '');
              setBrandName(matchedItem.brandName || '');
              setDescription(matchedItem.description || '');
              setClientDescription(matchedItem.clientDescription || '');
              setPoints(matchedItem.points || []);
              //setFileImages(matchedItem.images || []);
              setClientName(matchedItem.clientName || []);
              setClientImage(matchedItem.clientImage || []);
              setFileNames(matchedItem.images);
              setClientSectionImage(matchedItem.clientSectionImage);
              setSectionImage(matchedItem.sectionImage);
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchGallary(); // Call the fetch function once on mount
    }, []); // Empty array ensures it runs only once when the component mounts
  //}

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
    if (sectionData?.sectionImage) {
      setSectionImage(sectionData.sectionImage);
    }


  }, [sectionData]);

  useEffect(() => {
    if (clientSectionData?.clientDescription) {
      setClientDescription(clientSectionData.clientDescription)
    }
    if (clientSectionData?.clientName) {
      setClientName(clientSectionData.clientName);
    }
    if (clientSectionData?.clientImage) {
      setClientImage(clientSectionData.clientImage);
    }
    if (clientSectionData?.clientSectionImage) {
      setClientSectionImage(clientSectionData.clientSectionImage);
    }
  }, [clientSectionData]);

  // Save Section to LocalStorage
  const handleSaveSection = () => {

    const section: section = {

      description,
      points,
      sectionImage

    };
console.log(section);
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
      clientImage,
      clientSectionImage
      // clientImage: clientImages, // Store the image URL or null
    };
    console.log(clientSection, "dddddd");
    setClientSectionData(clientSection);
    localStorage.setItem("clientSectionData", JSON.stringify(clientSection));
    alert("Client Section Data Saved !");
  }
  const handleAddGallary = async () => {
     // Retrieve stored data from localStorage
  const sectionData = localStorage.getItem("sectionData");
  const brandSectionData = localStorage.getItem("brandSectionData");
  const clientSectionData = localStorage.getItem("clientSectionData");

  // Parse JSON data with fallback to null if parsing fails
  const section = sectionData ? JSON.parse(sectionData) : null;
  const brandSection = brandSectionData ? JSON.parse(brandSectionData) : null;
  const clientSection = clientSectionData ? JSON.parse(clientSectionData) : null;
console.log(sectionData);
  // Check if any of the sections are missing
  if (!section || !brandSection || !clientSection) {
    alert("One or more sections are missing. Please Save All Section");
    return; // Prevent submission if data is incomplete
  }

  // Create FormData instance
  const formData = new FormData();

  // Append fields to formData
  formData.append("category", brandSection.category || ""); // Default empty string if null
  formData.append("brandName", brandSection.brandName || "");
  formData.append("brandDescription", brandSection.brandDescription || "");
  formData.append("description", section.description || "");
//  formData.append("points", section.points ? JSON.stringify(section.points) : "[]");
formData.append("points", section.points || "");
  formData.append("clientName", clientSection.clientName || "");
  formData.append("clientDescription", clientSection.clientDescription || "");

  // Append files to formData (ensure to check if arrays are empty)
  appendFilesToFormData(formData, selectedFiles, "images");
  appendFilesToFormData(formData, clientFileList, "clientImage");
  appendFilesToFormData(formData, clientSectionImageFile, "clientSectionImage");
  appendFilesToFormData(formData, sectionImageFile, "sectionImage");

  // Function to append files or empty array to formData
  function appendFilesToFormData(formData: FormData, files: File[], fieldName: string) {
    if (files.length > 0) {
      files.forEach(file => formData.append(fieldName, file)); // Append each file
    } else {
      formData.append(fieldName, JSON.stringify([])); // Append empty array if no files
    }
  }

    // Log FormData contents for debugging
    formData.forEach((value, key) => {
      console.log(key + ": " + value); // Log all FormData entries for debugging
    });
    // Log the FormData contents
    formData.forEach((value, key) => {
      console.log(key + ": " + value); // This logs all the FormData entries
    });
    try {
      if (id) {
        const result = await updateGallary(id, formData);
        alert('Gallery Updated successfully!');

        // Optionally clear selected files or localStorage here
        setSelectedFiles([]);  // Clear selected files
        localStorage.removeItem("sectionData");
        localStorage.removeItem("brandSectionData");
        localStorage.removeItem("clientSectionData");
        window.location.reload();
      }
      else {
        // Call the API with the formData
        const result = await addGallary(formData);
        alert('Gallery insert successfully!');

        // Optionally clear selected files or localStorage here
        setSelectedFiles([]);  // Clear selected files
        localStorage.removeItem("sectionData");
        localStorage.removeItem("brandSectionData");
        localStorage.removeItem("clientSectionData");
        window.location.reload();
      }

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

  const handleClientChange = (index: number, value: string) => {
    const newClientNames = [...clientName];
    newClientNames[index] = value;
    setClientName(newClientNames);
  };
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFile = e.target.files[0];
      // Create a FileReader to convert file to a data URL

      // If you want to store the File object instead of the Data URL
      const updatedFileList = [...clientFileList];
      updatedFileList[index] = imageFile; // Store the file at the specific index
      setClientFileList(updatedFileList); // Update the file list in the state

      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the specific client's image
        const updatedImages = [...clientImage];
        updatedImages[index] = reader.result as string;
        setClientImage(updatedImages); // Set the updated image array
      };
      reader.readAsDataURL(imageFile); // Read the file as a data URL
    }
  };

  const handleImageChange = (index: number, value: string) => {
    const newClientImage = [...clientImage];
    newClientImage[index] = value;
    setClientImage(newClientImage);
  };

  // const handleSectionImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]; // Get the selected file
  //   if (file) {
  //     setSectionImageFile(file); // Store the File object
  //     setSectionImage(URL.createObjectURL(file)); // Generate a preview URL
  //   }

  // };

  const handleSectionImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a valid URL
      setSectionImageFile([file]); // Store the file in an array
      setSectionImage([imageUrl]); // Store the preview in an array
    }
  };

  const handleClientImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a valid URL
      console.log("sss", imageUrl);
      setClientSectionImageFile([file]); // Store the file in an array
      setClientSectionImage([imageUrl]); // Store the preview in an array
    }
  };


  // const addClients = () => {
  //   setClientName([...clientName, '']); // Add an empty client name
  //   // setClientImages([...clientImages, '/placeholder.png']); // Add a placeholder image
  // };
  const addClients = () => {
    // Only add a new client if there are fewer than 2 clients
    console.log(clientImage);
    if (clientName.length < 2) {
      setClientName([...clientName, '']); // Add an empty client name
      setClientImage([...clientImage, '/placeholder.png']); // Add a placeholder image
    }
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
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    console.log(fileArray);
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
      <DashboadRootLayout>
        <Grid container justifyContent="center">
          <Box>
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
                {/* <Image
                  src={Replace}
                  alt="Replace"
                  width={466}
                  height={366}
                  objectFit="cover"
                  style={{ borderRadius: '8px' }}
                /> */}

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                  {/* Ensure a valid image preview URL exists */}
                  {sectionImage.length > 0 && sectionImage[0] ? (
                    <Image
                      src={sectionImage[0]} // This will always be a valid blob URL
                      alt="Selected Preview"
                      width={466}
                      height={366}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  ) : (
                    <p>No image selected</p>
                  )}

                  {/* File Input */}
                  <input type="file" accept="image/*" onChange={handleSectionImageChange} />

                  {/* Show File Details */}
                  {sectionImageFile.length > 0 && <p>Selected File: {sectionImageFile[0].name}</p>}
                </div>


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
              {/* {fileNames.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <Typography variant="body2">Selected Files:</Typography>
                  <ul>
                    {fileNames.map((fileName, index) => (
                      <li key={index}>{fileName}</li>
                    ))}
                  </ul>
                </div>
              )} */}
              {fileNames.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <Typography variant="body2">Selected Files:</Typography>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {fileNames.map((fileName, index) => (
                      <Button
                        key={index}
                        variant="contained"
                        style={{
                          textTransform: 'none',
                          borderRadius: '20px',
                          padding: '5px 15px',
                          fontSize: '14px',
                        }}
                        onClick={() => window.open(`${fileName}`, '_blank')}
                      >
                        {fileName}
                      </Button>
                    ))}
                  </div>
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
                height: '740px',
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


                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    {/* Ensure a valid image preview URL exists */}

                    {clientSectionImage.length > 0 && clientSectionImage[0] ? (
                      <Image
                        src={clientSectionImage[0]} // This will always be a valid blob URL
                        alt="Selected Preview"
                        width={466}
                        height={366}
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                      />
                    ) : (
                      <p>No image selected</p>
                    )}

                    {/* File Input */}
                    <input type="file" accept="image/*" onChange={handleClientImageChange} />

                    {/* Show File Details */}
                    {clientSectionImageFile.length > 0 && <p>Selected File: {clientSectionImageFile[0].name}</p>}
                  </div>



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

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: 5,
                        }}
                      >
                        {/* File input hidden */}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => imageChange(e, index)} // Pass index to handle image change for each client
                          style={{ display: "none" }}
                          id={`upload-image-${index}`} // Use unique ID for each client
                        />
                        <label htmlFor={`upload-image-${index}`}>
                          <Button variant="contained" component="span">
                            Select Image
                          </Button>
                        </label>

                        {clientImage[index] && (
                          <Box
                            sx={{
                              marginTop: 2,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            {/* Image preview */}
                            <Image
                              src={clientImage[index]} // Use the image for the specific client
                              alt="Client Image"
                              width={50}
                              height={50}
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                                borderRadius: "50%",
                                marginBottom: 2,
                              }}
                            />
                          </Box>
                        )}
                      </Box>
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

            {id ? 'Update Gallery' : 'Save Gallery'} {/* Conditionally render text */}
          </Button>
        </Grid>
      </DashboadRootLayout>
    </>
  );
};

export default AddBrand;
