'use client';
import React, { useState, useEffect } from 'react';
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
  CircularProgress,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { registerUsersStart, registerUsersFailure, registerUsersSuccess } from '@/lib/features/userSlice';
import { register } from '@/app/api/users/pageApi';


const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state: any) => state.users.status);
  console.log(loading);

  useEffect(() => {
    setFormValid(email !== '' && username !== '' && password !== '' && termsAccepted);
  }, [email, username, password, termsAccepted]);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     const payload = { email, username, password };
    //   try{
        const registerapi = await register(payload);
        router.push('/dashboard/authentication/login');
    //   }catch(err)
    //   {
    //     console.log(err);
    //   }
    // }
    // dispatch(
    //   registerUsersStart({
    //     payload,
    //     onSuccess: (data: any) => {
    //       console.log('Success callback:', data);
    //       router.push('/dashboard/authentication/login');
    //     },
    //     onFailure: (error: any) => {
    //       console.error('Error callback:', error);
    //       dispatch(registerUsersFailure(error));
    //     },
    //   }),
    // );
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
      <Card
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          width: '438.33px',
          borderRadius: 2,
          height: '574px',
        }}
      >
        <CardContent
          sx={{ m: 3 }}
          style={{
            height: '481px',
          }}
        >
          <Typography
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '36.57px',
              color: '#202224',
            }}
          >
            Create an Account
          </Typography>
          <Typography
            align="center"
            mb={4}
            sx={{
              fontFamily: 'Mulish',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '15.06px',
              color: '#202224',
              opacity: '80%',
            }}
          >
            Some instructions to create an account
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '15px',
                    lineHeight: '18.15px',
                    color: '#202224',
                    // opacity: '',
                    mb: 1,
                  }}
                >
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'black',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'black',
                      },
                      '& .MuiInputBase-input': {
                        color: 'black',
                        height: '0.96px',
                        backgroundColor: '#F1F4F9',
                        borderRadius: '10px',
                      },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      height: '38.96px',
                      borderRadius: '10px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '15px',
                    lineHeight: '18.15px',
                    color: '#202224',
                    // opacity: '80%',
                    mb: 1,
                  }}
                >
                  Username
                </Typography>
                <TextField
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  sx={{
                    backgroundColor: '#F1F4F9',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'black',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'black',
                      },
                      '& .MuiInputBase-input': {
                        color: 'black',
                        height: '0.96px',
                        backgroundColor: '#F1F4F9',
                        borderRadius: '10px',
                      },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '10px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      fontSize: '15px',
                      lineHeight: '18.15px',
                      color: '#202224',
                      opacity: '80%',
                      mb: 1,
                    }}
                  >
                    Password
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    backgroundColor: '#F1F4F9',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'black',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'black',
                      },
                      '& .MuiInputBase-input': {
                        color: 'black',
                        height: '0.96px',
                        backgroundColor: '#F1F4F9',
                        borderRadius: '10px',
                      },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderRadius: '10px',
                    },
                  }}
                />
              </Grid>
            </Grid>
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  // color="error"
                  sx={{
                    color: '#000',
                    '&.MuiCheckbox-root': {
                      borderRadius: '50%',
                    },
                    
                  }}
                />
              }
              label="I accept terms and conditions"
              sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '16.15px',
                color: '#202224',
                opacity: '80%',
                mt: 1,
              }}
            />
            {error && (
              <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                {error}
              </Typography>
            )}
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                // fullWidth
                sx={{
                  width:'290.83px',
                  height:'38.96px',
                  left:'30px',
                  backgroundColor: '#CBBC87',
                  '&.Mui-disabled': {
                    backgroundColor: '#CBBC87',
                    color: '#00000042',
                  },
                }}
                disabled={loading === 'loading' || !formValid}
              >
                {loading === 'loading' ? <CircularProgress size={24} /> : 'Sign Up'}
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '16.15px',
                  color: '#202224',
                  opacity: '80%',
                  mb: 1,
                }}
              >
                Already have an account?{' '}
                <Link href="/dashboard/authentication/login" underline="none" sx={{ color: '#5A8CFF' }}>
                  Login
                </Link>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
