import React from 'react';
import { Box, Typography } from '@mui/material';

const People: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" gutterBottom>People</Typography>
      <Typography variant="body1">
        Information about the team members.
      </Typography>
    </Box>
  );
}

export default People;
