import { createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { overrideThemeConfig } from './override';

export const materialLight = '#1976d2';

export const materialDark = '#90caf9';

export const materialTheme = createTheme(
  {
    colorSchemes: {
      light: {
        palette: {
          background: {
            default: blueGrey[50],
          },
          text: {
            primary: grey[900],
          },
        },
      },
      dark: {
        palette: {
          background: {
            paper: '#1e1e1e',
            default: '#121212',
          },
          text: {
            primary: grey[100],
          },
        },
      },
    },
    components: {
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiTableCell-root': {
              backgroundColor: theme.palette.mode === 'dark' ? '#171717' : grey[100],
            },
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.mode === 'dark' ? grey[800] : theme.palette.divider,
          }),
        },
      },
    },
  },
  overrideThemeConfig,
);
