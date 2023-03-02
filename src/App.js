
import './App.css';

import Button from '@mui/material/Button';
import { SettingsRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='warning'>Contained</Button>
      <Button variant="outlined" startIcon={<SettingsRounded />}>Outlined</Button>
      <Typography variant='h6' sx={{
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'blue'
        },
        width: {
          md: '10px',
          lg: '1px',
        },
        margin: 5,
      }}>This is Typo Test</Typography>
    </div>

  );
}

export default App;
