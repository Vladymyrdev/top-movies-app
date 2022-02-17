import styled from '@emotion/styled';

export const FavouritesIcon = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 20px;
	padding: 10px;
	margin: 40px;
	position: absolute;
	top: 120px;
	right: 35px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
	& > .MuiSvgIcon-root {
		fill: rgb(255, 211, 66);
		cursor: pointer;
		width: 50px;
		height: 50px;
		animation: rotation 2s linear infinite;

		@-webkit-keyframes rotation {
			from {
				-webkit-transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(360deg);
			}
		}
	}
	@media screen and (max-width: 750px) {
		position: inherit;
		font-size: 30px;
		margin-bottom: 20px;
	}
`;

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

export const FilterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > span {
		font-size: 20px;
		margin-bottom: 15px;
		color: rgba(0, 0, 0, 0.5);
	}
	& > .MuiToggleButtonGroup-root {
		& > button {
			font-family: 'Akaya Telivigala', cursive;
		}
	}
`;
