import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const Filter = () => {
	const [alignment, setAlignment] = React.useState('');

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string
	) => {
		setAlignment(newAlignment);
	};

	return (
		<ToggleButtonGroup
			color="primary"
			value={alignment}
			exclusive
			onChange={handleChange}
		>
			<ToggleButton value="ascending">ASCENDING</ToggleButton>
			<ToggleButton value="descending">DESCENDING</ToggleButton>
		</ToggleButtonGroup>
	);
};
