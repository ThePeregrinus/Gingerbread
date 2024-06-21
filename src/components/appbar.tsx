import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { AddRow } from './addrow';
import { Logout } from './logout';

export function AppBarMenu() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent:'space-between'}}>
        <AddRow/>
          <Logout/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}