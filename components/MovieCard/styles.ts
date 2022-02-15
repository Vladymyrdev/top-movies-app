import styled from '@emotion/styled';

export const StarIcon = styled.div`
	position: absolute;
	z-index: 999;
	top: 0;
	right: 0;
	margin: 10px;

	& > .MuiSvgIcon-root {
		fill: rgb(255, 211, 66);
		cursor: pointer;
		width: 36px;
		height: 36px;
		transition: all 0.2s ease-in-out;

		&:active {
			width: 40px;
			height: 40px;
		}
	}
`;
