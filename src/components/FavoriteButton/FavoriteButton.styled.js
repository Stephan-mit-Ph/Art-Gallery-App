import styled from 'styled-components';

export const StyledButton = styled.button`
	position: ${({ $positionAbsolute }) => ($positionAbsolute ? 'absolute' : 'static')};
	right: 1rem;
	top: 1.5rem;
	z-index: 19;
	background-color: ${({ $isFavorite }) =>
		$isFavorite ? 'rgba(24, 28, 43, 0.8)' : 'rgba(24, 28, 43, 0.3)'};
	border-radius: 50%;
	display: grid;
	place-items: center;
	width: 50px;
	height: 50px;
	padding: 0.2rem 0 0;

	svg {
		color: ${(props) => (props.$isFavorite ? 'var(--primary-500)' : 'var(--primary-900)')};
		font-size: 2.5rem;
	}
`;
