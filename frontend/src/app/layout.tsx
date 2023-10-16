import * as React from 'react';
import Box from '@mui/material/Box';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> 
          <Box
            component="main"
          >
            {children}
          </Box>
      </body>
    </html>
  );
}