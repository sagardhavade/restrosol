'use client';
import React, { useState, useRef, useEffect,Suspense } from 'react';
import DashboadRootLayout from '@/app/components/layout';
import { Box, Button, Grid, TextField, Typography, MenuItem, Select, Divider, IconButton } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Replace from '@/public/images/Replace.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Image from 'next/image';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { addGallary, getGallary, updateGallary } from '@/app/api/gallary/pageApi';
// import { useSearchParams } from 'next/navigation';

import { AddBusinessOutlined } from '@mui/icons-material';
import { addBlog, getBlog, updateBlog } from '@/app/api/blog/pageApi';

interface brandSection {
  category: string;
  title: string;
  description: string;
}
interface section {
  sectionDecription: string;
  points: string[];
  sectionImage: string[];
}
interface section1 {
  section1Title: string;
  section1Decription: string;
  section2Title: string;
  section2Decription: string;
  section3Title: string;
  section3Decription: string;
  section4Title: string;
  section4Decription: string;
}


const AddBrand: React.FC = () => {
  const [error, setError] = useState<string | null>(null); // Updated error state to ha
  const [sectionData, setSectionData] = useState<section | null>(null); // Can be null or a single object
  const [brandSectionData, setBrandSectionData] = useState<brandSection | null>(null); // Can be null or a single object
  const [section1Data, setSection1Data] = useState<section1 | null>(null); // Can be null or a single object

  const [category, setCategory] = useState<string>('');
  const [points, setPoints] = useState<string[]>(['']);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [sectionTitle, setSectionTitle] = useState<string>('');
  const [sectionDecription, setSectionDescription] = useState<string>('');
  const [section1Title, setSection1Title] = useState<string>('');
  const [section1Decription, setSection1Description] = useState<string>('');

  const [section2Title, setSection2Title] = useState<string>('');
  const [section2Decription, setSection2Description] = useState<string>('');

  const [section3Title, setSection3Title] = useState<string>('');
  const [section3Decription, setSection3Description] = useState<string>('');

  const [section4Title, setSection4Title] = useState<string>('');
  const [section4Decription, setSection4Description] = useState<string>('');

  const [sectionImageFile, setSectionImageFile] = useState<File[]>([]);
  const [sectionImage, setSectionImage] = useState<string[]>([]);
  // const searchParams = useSearchParams()
  // const id = searchParams.get('id'); // Retrieve the 'id' query parameter from the URL
  // console.log('Product ID:', id);  // Lo
  const [isEditing, setIsEditing] = useState(false);

  // Load Section Data from LocalStorage on Page Load
  useEffect(() => {
    const savedSection = localStorage.getItem("sectionData");
    const brandSection = localStorage.getItem("brandSectionData")
    const section1Data = localStorage.getItem("section1Data");
    console.log(brandSection);
    if (savedSection) {
      setSectionData(JSON.parse(savedSection)); // Now sectionData is an object, not an array
    }
    if (brandSection) {
      setBrandSectionData(JSON.parse(brandSection));
      console.log("brandsectionData", brandSectionData);
    }
    if (section1Data) {
      setSection1Data(JSON.parse(section1Data));
      console.log("section1Data", section1Data);
    }


  }, []);

  //if (id) {
    
      // useEffect with an empty dependency array to ensure the fetchGallary function runs only once
      // useEffect(() => {
      //   if (id) {
      //   const fetchBlog = async () => {
      //     try {
      //       const fetchData = await getBlog(); // Replace with your actual fetch function
      //       console.log(fetchData);
    
            
      //         const matchedItem = fetchData.find((item: any) => item.id === id); // Find the item by id
      //         console.log("didsf", matchedItem);
      //         if (matchedItem) {
      //           setCategory(matchedItem.category || '')
      //           setTitle(matchedItem.title || '');
      //           setDescription(matchedItem.decription || '');
      //           setSectionDescription(matchedItem.sectionDecription || '');
      //           setSection1Title(matchedItem.section1Title || '');
      //           setSection1Description(matchedItem.section1Decription || '');
      //           setSection2Title(matchedItem.section2Title || '');
      //           setSection2Description(matchedItem.section2Decription || '');
      //           setSection3Title(matchedItem.section3Title || '');
      //           setSection3Description(matchedItem.section3Decription || '');
      //           setSection4Title(matchedItem.section4Title || '');
      //           setSection4Description(matchedItem.section4Decription || '');
      //           setPoints(matchedItem.points || []);
      //           setSectionImage(matchedItem.sectionImage);
      //         }
            
      //     } catch (err) {
      //       console.log("err");
      //       throw err;
      //     }
      //   }
      //   fetchBlog(); // Call the fetch function once on mount
      // }
        
      // }, [id]); 

    useEffect(() => {
      if (brandSectionData?.description) {
        setDescription(brandSectionData.description)
      }
      if (brandSectionData?.title) {
        setTitle(brandSectionData.title);
      }
      if (brandSectionData?.category) {
        setCategory(brandSectionData.category)
      }

    }, [brandSectionData]);
    useEffect(() => {
      if (sectionData?.sectionDecription) {
        setSectionDescription(sectionData.sectionDecription)
      }
      if (sectionData?.points) {
        setPoints(sectionData.points);
      }
      if (sectionData?.sectionImage) {
        setSectionImage(sectionData.sectionImage);
      }
    }, [sectionData]);

    useEffect(() => {

      console.log("title", section1Data)
      if (section1Data?.section1Title) {
        setSection1Title(section1Data.section1Title)
      }
      if (section1Data?.section1Decription) {
        setSection1Description(section1Data.section1Decription);
      }
      if (section1Data?.section2Title) {
        setSection2Title(section1Data.section2Title)
      }
      if (section1Data?.section2Decription) {
        setSection2Description(section1Data.section2Decription);
      }
      if (section1Data?.section3Title) {
        setSection3Title(section1Data.section3Title)
      }
      if (section1Data?.section3Decription) {
        setSection3Description(section1Data.section3Decription);
      }
      if (section1Data?.section4Title) {
        setSection4Title(section1Data.section4Title)
      }
      if (section1Data?.section4Decription) {
        setSection4Description(section1Data.section4Decription);
      }
      console.log("section Data", section1Data);

    }, [section1Data]);


    const handleSaveSection = () => {
      // Check if sectionImage is not an array or if it's an empty array
      if (!sectionImage || (Array.isArray(sectionImage) && sectionImage.length === 0)) {
        alert("Image is required");
        return; // Prevent submission if no image
      }
      const section: section = {
        sectionDecription,
        points,
        sectionImage

      };
      console.log("sectionData",section);
      // Ensure prevState is always an array
      setSectionData(section);
      localStorage.setItem("sectionData", JSON.stringify(section));
      alert("Section data saved temporarily!");
    };
    // Save Section to LocalStorage
    const handleSaveSection1 = () => {
      const section1: section1 = {
        section1Title,
        section1Decription,
        section2Title,
        section2Decription,
        section3Title,
        section3Decription,
        section4Title,
        section4Decription,
      };
      // Ensure prevState is always an array
      setSection1Data(section1);
      localStorage.setItem("section1Data", JSON.stringify(section1));
      alert("Section data saved temporarily!");
    };

    const handleBrandSaveSection = () => {

      const section: brandSection = {
        category,
        title,
        description
      };
      // Ensure prevState is always an array
      setBrandSectionData(section);

      localStorage.setItem("brandSectionData", JSON.stringify(section));
      alert("Brand Section data saved!");
    };

    const handleSaveBlog = async () => {
      // Retrieve stored data from localStorage
      const sectionData = localStorage.getItem("sectionData");
      const brandSectionData = localStorage.getItem("brandSectionData");
      const section1Data = localStorage.getItem("section1Data");

      // Parse JSON data
      const section = sectionData ? JSON.parse(sectionData) : null;
      const brandSection = brandSectionData ? JSON.parse(brandSectionData) : null;
      const section1 = section1Data ? JSON.parse(section1Data) : null;

      // Combine all data into one object
      const combinedData = {
        ...section,
        ...brandSection,
        ...section1,
      };

      const formData = new FormData();
      console.log(combinedData);
      // Append form data (combinedData) as a string
      // formData.append("data", JSON.stringify(combinedData));
      formData.append("category", brandSection.category);
      formData.append("title", brandSection.title);
      formData.append("description", brandSection.description);
      formData.append("sectionDecription", section.sectionDecription);
      formData.append("points", section.points);
      formData.append("section1Title", section1.section1Title);
      formData.append("section1Decription", section1.section1Decription);
      formData.append("section2Title", section1.section2Title);
      formData.append("section2Decription", section1.section2Decription);
      formData.append("section3Title", section1.section3Title);
      formData.append("section3Decription", section1.section3Decription);
      formData.append("section4Title", section1.section4Title);
      formData.append("section4Decription", section1.section4Decription);

      console.log("sectionImage", sectionImageFile.length)
      // Append files to form data
      if (sectionImageFile.length > 0) {
        sectionImageFile.forEach(file => {
          formData.append("sectionImage", file); // Append each image/video to "images" field
        });
      } else {
        // If no images, you can choose to append null or empty array
        formData.append("sectionImage", JSON.stringify([])); // Append an empty array if no images
      }

      // Log FormData contents for debugging
      formData.forEach((value, key) => {
        console.log(key + ": " + value); // Log all FormData entries for debugging
      });

      try {
        // if (id) {
        //   const result = await updateBlog(id, formData);
        //   alert('Blog Updated successfully!');

        //   // Optionally clear selected files or localStorage here
        //   // setSelectedFiles([]);  // Clear selected files
        //   localStorage.removeItem("sectionData");
        //   localStorage.removeItem("brandSectionData");
        //   localStorage.removeItem("clientSectionData");
        //   window.location.reload();
        // }
        // else {
          // Call the API with the formData
          const result = await addBlog(formData);
          alert('Blog insert successfully!');

          // Optionally clear selected files or localStorage here
          // setSelectedFiles([]);  // Clear selected files
          localStorage.removeItem("sectionData");
          localStorage.removeItem("brandSectionData");
          localStorage.removeItem("section1Data");
          window.location.reload();
        // }

      } catch (error) {
        console.error("Error uploading Blog:", error);
        alert("Failed to upload Blog.");
      }
    };

    const handleClearBlog = async () =>{
      localStorage.removeItem("sectionData");
      localStorage.removeItem("brandSectionData");
      localStorage.removeItem("section1Data");
      window.location.reload();
    }
    const handleChange = (event: SelectChangeEvent<string>) => {
      setCategory(event.target.value as string);

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


    const handleSectionImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      
      if (file) {
        const imageUrl = URL.createObjectURL(file); // Generate a valid URL
        setSectionImageFile([file]); // Store the file in an array
        setSectionImage([imageUrl]); // Store the preview in an array
        setError(null); // Clear any previous errors when a new image is selected
      }
    };
    return (
      <>
        <DashboadRootLayout>
          <Grid container justifyContent="center" mb={10}>
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
                  value={category}
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
                  placeholder="Title"
                  value={title}  // Directly access brandName from the object
                  onChange={(e) => setTitle(e.target.value)}

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
                  placeholder="Title Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                      We Create Your Dream
                    </Typography>
                    <TextField
                      placeholder={`Add  Description and key values we solved`}
                      multiline
                      rows={2}
                      value={sectionDecription}
                      onChange={(e) => setSectionDescription(e.target.value)}
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
                        src={Array.isArray(sectionImage) ? sectionImage[0] : sectionImage} // This will always be a valid blob URL
                        alt="Selected Preview"
                        width={466}
                        height={366}
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                      />
                    ) : (
                      <p>No image selected</p>
                    )}

                    {/* File Input */}
                    <input type="file" accept="image/*" required onChange={handleSectionImageChange} />

                    {/* Show File Details */}
                    {sectionImageFile.length > 0 && <p>Selected File: {sectionImageFile[0].name}</p>}
                  </div>


                </Box>

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
                  width: '1139px',
                  padding: '30px',
                  gap: '27px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                  borderRadius: '6px',
                  backgroundColor: '#FFFFFF',
                  textAlign: 'center',
                  height: '850px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box>
                  <div>
                    <Typography sx={{ fontSize: '42px', fontWeight: 700, color: '#1C2448' }}>
                      Section 1
                    </Typography>

                    <TextField
                      placeholder=" Title"
                      value={section1Title}
                      onChange={(e) => setSection1Title(e.target.value)}
                      sx={{
                        mt: 2,
                        border: 'none',
                        color: '#6B7280',
                        width: '500px',
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

                    {/* Adding margin top to the second TextField to create the gap */}
                    <TextField
                      placeholder="Section 1 Description"
                      value={section1Decription}
                      onChange={(e) => setSection1Description(e.target.value)}
                      multiline
                      rows={4}
                      fullWidth
                      sx={{
                        mt: 2,  // Adding margin-top to create space between the fields
                      }}
                    />
                  </div>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >

                  <Box>


                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <Typography sx={{ fontSize: '42px', fontWeight: 700, color: '#1C2448' }}>
                        Section 2
                      </Typography>
                      <TextField
                        placeholder="Title"
                        value={section2Title}
                        onChange={(e) => setSection2Title(e.target.value)}
                        sx={{
                          mt: 2,
                          border: 'none',
                          color: '#6B7280',
                          width: '500px',
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

                      <TextField
                        //label="Your Message"
                        placeholder='Section 2 Description'
                        value={section2Decription}
                        onChange={(e) => setSection2Description(e.target.value)}
                        multiline
                        rows={4} // number of rows to display by default
                        fullWidth
                      // value={value}
                      // onChange={handleChange}
                      />
                    </div>



                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <Typography sx={{ fontSize: '42px', fontWeight: 700, color: '#1C2448' }}>
                        Section 3
                      </Typography>
                      <TextField
                        placeholder="Title"
                        value={section3Title}
                        onChange={(e) => setSection3Title(e.target.value)}
                        sx={{
                          mt: 2,
                          border: 'none',
                          color: '#6B7280',
                          width: '500px',
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
                      <TextField
                        //label="Your Message"
                        placeholder='Section 3 Description'
                        value={section3Decription}
                        onChange={(e) => setSection3Description(e.target.value)}
                        multiline
                        rows={4} // number of rows to display by default
                        fullWidth
                      // value={value}
                      // onChange={handleChange}
                      />
                    </div>


                  </Box>
                </Box>{' '}
                <Box>
                  <div>
                    <Typography sx={{ fontSize: '42px', fontWeight: 700, color: '#1C2448' }}>
                      Section 4
                    </Typography>

                    <TextField
                      placeholder="Title"
                      value={section4Title}
                      onChange={(e) => setSection4Title(e.target.value)}
                      sx={{
                        mt: 2,
                        border: 'none',
                        color: '#6B7280',
                        width: '500px',
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

                    {/* Adding margin top to the second TextField to create the gap */}
                    <TextField
                      placeholder="Section 4 Description"
                      multiline
                      value={section4Decription}
                      onChange={(e) => setSection4Description(e.target.value)}
                      rows={4}
                      fullWidth
                      sx={{
                        mt: 2,  // Adding margin-top to create space between the fields
                      }}
                    />
                  </div>
                </Box>
                <Divider sx={{ border: '.5px solid #ccc ' }} />
                <Button
                  variant="outlined"
                  onClick={handleSaveSection1}
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
            onClick={handleClearBlog}
            style={{
              width: '202px',
              height: '46px',
              top: '130px',
              right: '20px',
              backgroundColor:'lightblue',

              borderRadius: '50px',
            }}
          >

            Clear Blog
          </Button>
            <Button
              variant="contained"
              onClick={handleSaveBlog}
              style={{
                width: '202px',
                height: '46px',
                top: '130px',

                borderRadius: '50px',
              }}
            >
Save Blog
              {/* {id ? 'Update Blog' : 'Save Blog'}  */}
            </Button>
           
          </Grid>
        </DashboadRootLayout>
      </>
    );
  };

  export default AddBrand;
