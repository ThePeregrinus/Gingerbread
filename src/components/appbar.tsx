
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Logout } from './logout';

export function AppBarMenu() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent:'flex-end'}}>
          <Logout/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}