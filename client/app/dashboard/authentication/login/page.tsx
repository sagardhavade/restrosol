// 'use client';
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import Image from 'next/image';
// import logo from '../../../../public/images/logo.png';
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Typography,
//   Link,
//   Grid,
// } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { loginUsersStart, loginUsersSuccess, loginUsersFailure } from '@/lib/features/userSlice';

// const Login: React.FC = () => {
//   // State variables using useState hook
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [rememberMe, setRememberMe] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');

//   const dispatch = useDispatch();
//   const router = useRouter();

//   const loading = useSelector((state: any) => state.users.status);
//   console.log(loading);

//   // Clear input fields on component mount
//   useEffect(() => {
//     setEmail('');
//     setPassword('');
//     setRememberMe(false);
//   }, []);

//   // Function to handle form submission
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     const payload = { email, password };

//     dispatch(
//       loginUsersStart({
//         payload,
//         onSuccess: (data: any) => {
//           console.log('Success callback:', data);
//           setEmail('');
//           setPassword('');
//           setRememberMe(false);
//           router.push('/dashboard/utilities/ContactList');
//         },
//       }),
//     );
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//       bgcolor="#191a19"
//       fontFamily="Nunito Sans"
//     >
//       <Card sx={{ backgroundColor: '#fff', color: '#000', width: 500, borderRadius: 2 }}>
//         <CardContent>
//           <Box display="flex" justifyContent="center" mb={4}>
//             <Image src={logo} alt="Restrosol Logo" width={241} height={113} objectFit="cover" />
//           </Box>
//           <Typography
//             align="center"
//             gutterBottom
//             sx={{
//               fontSize: '32px',
//               fontWeight: 700,
//               font: 'Nunito Sans',
//               lineHeight: '43.65px',
//               letterSpacing: '-0.11px',
//             }}
//           >
//             Admin Login
//           </Typography>
//           <Typography
//             align="center"
//             mb={4}
//             sx={{ fontSize: '14px', font: 'Nunito Sans', lineHeight: '24.55px', color: '#202224' }}
//           >
//             Please enter your email and password to continue
//           </Typography>

//           {/* Display error message if there's an error */}
//           {error && (
//             <Typography variant="body2" color="error" align="center" mb={2}>
//               {error}
//             </Typography>
//           )}
//           <Grid container spacing={2} alignItems="center" justifyContent="center">
//             {/* Email address input field */}
//             <Grid item xs={12}>
//               <Typography
//                 sx={{
//                   fontSize: '14px',
//                   font: 'Nunito Sans',
//                   lineHeight: '24.55px',
//                   color: '#202224',
//                   opacity: '80%',
//                 }}
//               >
//                 Email address:
//               </Typography>
//               <TextField
//                 value={email}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//                 autoComplete='off'
//                 fullWidth
//                 variant="outlined"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 inputProps={{
//                   style: {
//                     color: '#000',
//                     backgroundColor: 'rgba(241, 244, 249, 1)',
//                     borderRadius: '10px',
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderRadius: '10px',
//                     },
//                   },
//                 }}
//               />
//             </Grid>

//             {/* Password input field */}
//             <Grid item xs={12}>
//               <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//                 <Typography
//                   sx={{
//                     fontSize: '14px',
//                     font: 'Nunito Sans',
//                     lineHeight: '24.55px',
//                     color: '#202224',
//                     opacity: '80%',
//                   }}
//                 >
//                   Password
//                 </Typography>
//                 <Link
//                   href="#"
//                   underline="none"
//                   sx={{
//                     fontSize: '14px',
//                     font: 'Nunito Sans',
//                     lineHeight: '24.55px',
//                     color: '#202224',
//                     opacity: '80%',
//                   }}
//                 >
//                   Forgot Password?
//                 </Link>
//               </Box>
//               <TextField
//                 type="password"
//                 value={password}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                
//                 fullWidth
//                 variant="outlined"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 inputProps={{
//                   style: {
//                     color: '#000',
//                     backgroundColor: 'rgba(241, 244, 249, 1)',
//                     borderRadius: '10px',
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': {
//                       borderRadius: '10px',
//                     },
//                   },
//                 }}
//               />
//             </Grid>
//           </Grid>
//           {/* Checkbox for Remember Me option */}
//           <FormControlLabel
//             control={
//               <Checkbox
//                 color="error"
//                 checked={rememberMe}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
//                 sx={{ color: '#000' }}
//               />
//             }
//             label="I accept terms and conditions"
//             sx={{ m: 2 }}
//           />
//           {/* Submit button for login */}
//           <Button
//             type="submit"
//             variant="contained"
//             onClick={handleSubmit}
//             sx={{
//               backgroundColor: '#CBBC87',
//               width: '418px',
//               height: '56px',
//               left: '25px',
//               color: '#fff',
//               '&.Mui-disabled': {
//                 backgroundColor: '#CBBC87',
//                 color: '#00000042',
//               },
//             }}
//             disabled={!email || !password || !rememberMe}
//           >
//             Sign In
//           </Button>
//           {/* Link to create account */}
//           <Box display="flex" justifyContent="center" mt={2}>
//             <Typography sx={{ fontSize: '14px', font: 'Nunito Sans', lineHeight: '24.55px', color: '#202224' }}>
//               Don`t have an account?{' '}
//               <Link
//                 href="/dashboard/authentication/register"
//                 variant="body2"
//                 sx={{ fontSize: '14px', font: 'Nunito Sans', lineHeight: '24.55px', color: '#5A8CFF' }}
//               >
//                 Create Account
//               </Link>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Login;


'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';
import {
  Box,
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
  Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { loginUsersStart, loginUsersSuccess, loginUsersFailure } from '@/lib/features/userSlice';
import { login } from '@/app/api/users/pageApi';

const Login: React.FC = () => {
  // State variables using useState hook
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: any) => state.users.status);
  console.log(loading);

  // Clear input fields on component mount
  useEffect(() => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
  }, []);

  // Function to handle form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const payload = { email, password };

    // dispatch(loginUsersStart());

    try {
      // Make the login request to the backend API
//      const response = await axios.post('/api/login', payload); // Replace with your actual login API endpoint
    const response = await login(payload); // Replace with your actual login API endpoint
      console.log(response);
      const { token } = response; // Assuming the JWT token is in the response data
      
      // Store the JWT token in localStorage or sessionStorage
      if (rememberMe) {
        localStorage.setItem('token', token); // Store in localStorage
      } else {
        sessionStorage.setItem('token', token); // Store in sessionStorage
      }

      // Dispatch the success action
      // dispatch(loginUsersSuccess());
      
      // Redirect to the dashboard
      router.push('/dashboard/utilities/ContactList');
    } catch (error: any) {
      // Handle error case
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
      // dispatch(loginUsersFailure());
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#191a19"
      fontFamily="Nunito Sans"
    >
      <Card sx={{ backgroundColor: '#fff', color: '#000', width: 500, borderRadius: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={4}>
            <Image src={logo} alt="Restrosol Logo" width={241} height={113} objectFit="cover" />
          </Box>
          <Typography
            align="center"
            gutterBottom
            sx={{
              fontSize: '32px',
              fontWeight: 700,
              font: 'Nunito Sans',
              lineHeight: '43.65px',
              letterSpacing: '-0.11px',
            }}
          >
            Admin Login
          </Typography>
          <Typography
            align="center"
            mb={4}
            sx={{ fontSize: '14px', font: 'Nunito Sans', lineHeight: '24.55px', color: '#202224' }}
          >
            Please enter your email and password to continue
          </Typography>

          {/* Display error message if there's an error */}
          {error && (
            <Typography variant="body2" color="error" align="center" mb={2}>
              {error}
            </Typography>
          )}
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            {/* Email address input field */}
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: '14px',
                  font: 'Nunito Sans',
                  lineHeight: '24.55px',
                  color: '#202224',
                  opacity: '80%',
                }}
              >
                Email address:
              </Typography>
              <TextField
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                autoComplete='off'
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  style: {
                    color: '#000',
                    backgroundColor: 'rgba(241, 244, 249, 1)',
                    borderRadius: '10px',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: '10px',
                    },
                  },
                }}
              />
            </Grid>

            {/* Password input field */}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    font: 'Nunito Sans',
                    lineHeight: '24.55px',
                    color: '#202224',
                    opacity: '80%',
                  }}
                >
                  Password
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: '14px',
                    font: 'Nunito Sans',
                    lineHeight: '24.55px',
                    color: '#202224',
                    opacity: '80%',
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <TextField
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  style: {
                    color: '#000',
                    backgroundColor: 'rgba(241, 244, 249, 1)',
                    borderRadius: '10px',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: '10px',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
          {/* Checkbox for Remember Me option */}
          <FormControlLabel
            control={
              <Checkbox
                color="error"
                checked={rememberMe}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                sx={{ color: '#000' }}
              />
            }
            label="I accept terms and conditions"
            sx={{ m: 2 }}
          />
          {/* Submit button for login */}
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#CBBC87',
              width: '418px',
              height: '56px',
              left: '25px',
              color: '#fff',
              '&.Mui-disabled': {
                backgroundColor: '#CBBC87',
                color: '#00000042',
              },
            }}
            disabled={!email || !password || !rememberMe}
          >
            Sign In
          </Button>
          {/* Link to create account */}
          <Box display="flex" justifyContent="center" mt={2}>
            <Typography sx={{ fontSize: '14px', font: 'Nunito Sans', lineHeight: '24.55px', color: '#202224' }}>
              Don`t have an account?{' '}
              <Link
                href="/dashboard/authentication/register"
                variant="body2"
                sx={{ fontSize: '14px', font: 'Nunito Sans', lineHeight: '24.55px', color: '#5A8CFF' }}
              >
                Create Account
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
