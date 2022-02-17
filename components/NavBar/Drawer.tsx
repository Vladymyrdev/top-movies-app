import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Filter } from '../Filter';

export const NavDrawer = (props) => {
	return (
		<Drawer
			anchor="left"
			open={props.drawerOpened}
			onClose={props.toggleDrawer(false)}
		>
			<div
				onClick={props.toggleDrawer(false)}
				onKeyDown={props.toggleDrawer(false)}
			>
				<List>
					<ListItem>
						<ListItemText primary="Menu" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem>
						<Filter valueOfSort={undefined} handleChangeSorting={undefined} />
					</ListItem>
				</List>
				<Divider />
			</div>
		</Drawer>
	);
};
