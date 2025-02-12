// 'use client';
// import React, { useState,useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, List, ListItem, ListItemText, IconButton, InputAdornment, styled, Divider, Box } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import { getCategory } from '@/app/api/category/page';

// const CustomDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialog-paper': {
//     backgroundColor: 'white',
//     color: 'black',
//     width: '20%', 
//     right: 10, 
//     height:'50%',
//     boxShadow: '0px 4px 20px rgba(10, 0, 0, 0.1)',
//     marginLeft: 'auto', // Align to the right side
//   },
// }));

// interface CategoryDialogProps {
//   open: boolean;
//   onClose: () => void;
// }

// // const categories = [
// //   'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5',
// //   'Category 6', 'Category 7', 'Category 8', 'Category 9'
// // ];

// const [categories, setCategory] = useState<[]>([])

//   useEffect(() => {
//     const fetchCategory = async () => {
//         try {
//             const response = await getCategory();
//             console.log("API Response:", response);
//             setCategory(response || []); // Ensure a default empty array
//         } catch (error) {
//             console.error('Error fetching jobs:', error);
//             setCategory([]); // Handle errors gracefully
//         }
//     };
//     fetchCategory();
// }, []);



// const CategoryDialog: React.FC<CategoryDialogProps> = ({ open, onClose }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredCategories = categories.filter(category =>
//     category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <CustomDialog open={open} onClose={onClose}>
//       {/* <DialogTitle>Search</DialogTitle> */}
//       <DialogContent sx={{border:'1px solid #ccc',m:2,borderRadius:'10px'}}>
//         <TextField
//           autoFocus
//           type="text"
//           fullWidth
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Enter your search term"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end" variant="outlined">
//                 <SearchIcon sx={{color:'#000'}} />
//               </InputAdornment>
//             ),
//             sx: { border: '1px solid #ccc', borderRadius: '5px' }, 
//           }}
//         />
//         <Divider sx={{borderColor:'#ccc'}} />
//         <Box>
//           {filteredCategories.map((category, index) => (
//             <ListItem key={index} button>
//               <ListItemText primary={category} />
//               <IconButton edge="end">
//                 <OpenInNewIcon sx={{color:'#000'}}  />
//               </IconButton>
//             </ListItem>
//           ))}
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} variant='contained'>
//           Cancel
//         </Button>
//         <Button onClick={onClose} variant='contained'>
//           Save
//         </Button>
//       </DialogActions>
//     </CustomDialog>
//   );
// };

// export default CategoryDialog;
'use client';
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  ListItem,
  ListItemText,
  IconButton,
  InputAdornment,
  styled,
  Divider,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { getCategory } from '@/app/api/category/pageApi';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'white',
    color: 'black',
    width: '20%',
    right: 10,
    height: '50%',
    boxShadow: '0px 4px 20px rgba(10, 0, 0, 0.1)',
    marginLeft: 'auto', // Align to the right side
  },
}));

interface Category {
  id: string;
  name: string; // Adjust this field based on the actual API response
}

interface CategoryDialogProps {
  open: boolean;
  onClose: () => void;
}

const CategoryDialog: React.FC<CategoryDialogProps> = ({ open, onClose }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategory();
        console.log('API Response:', response);
        setCategories(response || []); // Assume API returns an array of category objects
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]); // Handle errors gracefully
      }
    };
    fetchCategories();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CustomDialog open={open} onClose={onClose}>
      <DialogContent sx={{ border: '1px solid #ccc', m: 2, borderRadius: '10px' }}>
        <TextField
          autoFocus
          type="text"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter your search term"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: '#000' }} />
              </InputAdornment>
            ),
            sx: { border: '1px solid #ccc', borderRadius: '5px' },
          }}
        />
        <Divider sx={{ borderColor: '#ccc', my: 2 }} />
        <Box>
          {filteredCategories.map((category) => (
            <ListItem key={category.id} button>
              <ListItemText primary={category.name} />
              <IconButton edge="end">
                <OpenInNewIcon sx={{ color: '#000' }} />
              </IconButton>
            </ListItem>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Cancel
        </Button>
        <Button onClick={onClose} variant="contained">
          Save
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default CategoryDialog;
