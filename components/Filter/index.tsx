import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { FilterWrapper } from '../../styles';

export const Filter = ({ valueOfSort, handleChangeSorting }) => {
	return (
		<FilterWrapper>
			<span>Sorting rating by:</span>
			<ToggleButtonGroup
				color="primary"
				value={valueOfSort}
				exclusive
				onChange={handleChangeSorting}
			>
				<ToggleButton value="ascending">ASCENDING</ToggleButton>
				<ToggleButton value="descending">DESCENDING</ToggleButton>
			</ToggleButtonGroup>
		</FilterWrapper>
	);
};
