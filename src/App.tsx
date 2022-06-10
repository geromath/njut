import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { createContext } from 'react';
import './App.css';
import { Container } from '@mui/system';
import { Navigation } from './Navigation';
import { LandingPage } from './LandingPage';



export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        spacing: 8,
        typography: {
          fontFamily: "'Inter', sans-serif",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '40px',
              },
              sizeLarge: {
                fontSize: '24px',
                padding: '20px 80px',
                maxWidth: '100%',
                textTransform: 'none',
                color: '#FFFFFF'
              },
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderRadius: '48px',
                backgroundColor: '#F7F8FF',
                padding: '28px',
                color: '#000000'
              }
            }
          },
          MuiIcon: {
            styleOverrides: {
              root: {
                color: 'primary'
              }
            }
          },
        },
        palette: {
          mode,
          primary: {
            main: '#758FFA',
            light: '#758FFA',
            dark: '#758FFA'
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{height: '100vh', bgcolor: 'background.default'}}>
          <Navigation />
          <LandingPage />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
