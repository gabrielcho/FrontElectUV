import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function PageBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: "#CD1F32"}} >
        <Toolbar>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ElectUV
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}