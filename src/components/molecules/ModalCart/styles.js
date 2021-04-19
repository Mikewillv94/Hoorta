import styled from "styled-components";
import theme from "../../../styles/theme";

const {color, shadow, radius} = theme;

export const StyledModal = styled.div`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	width: 79%;

	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 20px;
	padding-top: 25px;
	outline: none;

	background-color: ${color.white};
	box-shadow: ${shadow};
	border-radius: ${radius};

	.headerContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 10px;
	}

	@media screen and (min-width: 800px) {
		max-width: 600px;
	}
`;

export const EditButton = styled.button`
	background: none;
	display: flex;
`;

export const GroupButton = styled.div`
	display: flex;
	margin: 0 auto;

	button {
		margin: 20px 25px 0px 25px;
		max-width: 200px;
	}
`;
