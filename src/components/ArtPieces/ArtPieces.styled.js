import styled from 'styled-components';

export const StyledList = styled.ul`
	margin: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;

	li {
		width: var(--image-size);
		height: var(--image-size);
	}

	h2 {
		font-weight: var(--weight-regular);
		padding-top: 1rem;
	}
`;
