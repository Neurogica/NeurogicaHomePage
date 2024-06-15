import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#2C2C2C' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '20px',
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/images/neurogica_logo.png`} alt="Neurogica logo" style={{ marginRight: 10, height: '50px' }} />
          <img src={`${process.env.PUBLIC_URL}/images/neurogica_logo_white.png`} alt="Neurogica Name" style={{ marginRight: 10, marginTop: 20, height: '30px' }} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ color: '#fff' }} href="/about-us">ABOUT US</Button>
          <Button sx={{ color: '#fff' }} href="/academic-relations">ACADEMIC RELATIONS</Button>
          <Button sx={{ color: '#fff' }} href="/people">PEOPLE</Button>
          <Button sx={{ color: '#fff' }} href="/publications">PUBLICATIONS</Button>
          <Button sx={{ color: '#fff' }} href="/careers">CAREERS</Button>
          <Button sx={{ color: '#fff' }} href="/blog">BLOG</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton sx={{ color: '#fff' }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
