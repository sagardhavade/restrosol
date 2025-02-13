'use client';
import { ReactNode } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { usePathname } from 'next/navigation';
import Footer from './shared/components/footer/page';
import Header from './shared/components/header/page';

type Props = {
  children: ReactNode;
};

export const UiLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith('/dashboard');
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#141516', // default background color
      },
      primary: {
        main: '#333',
        light: '#AF0C04',
        dark: '#DE3F43',
      },
      secondary: {
        main: '#262626',
        light: '#eeeeee',
        dark: '#000',
        contrastText: '#fff',
      },
      error: {
        main: '#ed1c24',
        light: 'rgba(225, 37, 27, 0.2)',
        dark: '',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'inherit',
      h1: {
        fontSize: '2.5rem',
        fontWeight: '700',
      },
      h2: {
        fontSize: 'min(max(1.9rem, calc(1rem + ((1vw - 7.68px) * 0.6944))), 2.2rem)',
        fontWeight: '700',
      },
      h3: {
        fontSize: 'min(max(1.5rem, calc(1rem + ((1vw - 7.68px) * 0.6944))), 2rem)',
        fontWeight: '500',
      },
      h4: {
        fontSize: 'min(max(.9rem, calc(1rem + ((1vw - 7.68px) * 0.6944))), 1.2rem)',
        fontWeight: '600',
      },
      h5: {
        fontSize: 'min(max(.8rem, calc(0.9rem + ((1vw - 7.68px) * 0.6944))), 1rem)',
        fontWeight: '700',
        marginBottom: '15px',
      },
      h6: {
        fontSize: 'min(max(.7rem, calc(0.9rem + ((1vw - 7.68px) * 0.6944))), 1rem)',
        fontWeight: '500',
      },
      body1: {
        fontSize: '0.9rem',
      },
      body2: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            height: 48,
            backgroundColor: '#E5BB45', // Set button background color
            color: '#fff', // Set button text color
            '&:hover': {
              backgroundColor: '#edd028',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
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
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
          },
        },
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {' '}
        <div style={{ backgroundColor: theme?.palette?.background?.default }}>
          {!hideHeaderFooter && (
            <div className="section1400" style={{ background: '#141516' }}>
              <Header />
            </div>
          )}
          {/* {!hideHeaderFooter && ( */}
            <div>{children}</div>
          {/* )} */}
          
          {!hideHeaderFooter && (
            <div className="section1400" style={{ background: '#141516' }}>
              <Footer />
            </div>
          )}
        </div>
      </ThemeProvider>
      <CssBaseline />
    </>
  );
};
