import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
	return (
		<Box sx={{ display: 'flex', marginBottom: '30px' }}>
			<CircularProgress />
		</Box>
	);
};
