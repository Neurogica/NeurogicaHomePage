import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" gutterBottom>About Us</Typography>
      <Typography variant="body1">
        Information about the company, mission, and vision.
      </Typography>
    </Box>
  );
}

export default AboutUs;