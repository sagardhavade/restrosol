import { Roboto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { UiLayout } from './ui-layout';
import StoreProvider from './storeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}


export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Restrosol',
  description: 'Restaturant Consulting',
};
// export default function RootLayout({ children }: { children: React.ReactNode }) {
  export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <Script
          id="googletagmanager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MDHG8Q3');`,
          }}
        ></Script>
        <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
      </head>
      <body className={roboto.className}>
        
        <StoreProvider>
          <UiLayout>{children}</UiLayout>
        </StoreProvider>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </body>
    </html>
  );
}
