import React, { useState } from 'react';
import { AppBar, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import { NavDrawer } from './Drawer';

export const NavBar = () => {
	const [drawerOpened, setDrawerOpened] = useState(false);

	const toggleDrawer = (booleanValue) => () => {
		setDrawerOpened(booleanValue);
	};

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer(true)}
					>
						<Menu open={false} />
					</IconButton>
					<Typography variant="h6">Todo List App</Typography>
				</Toolbar>
			</AppBar>
			<NavDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
		</div>
	);
};
