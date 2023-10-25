import styled from 'styled-components';

export const StyledImageContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 25rem;
	height: 25rem;
`;

export const StyledWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	justify-content: center;

	h2 {
		font-size: var(--step-3);
		margin-bottom: 1rem;
		font-weight: var(--weight-regular);
	}

	h3 {
		font-size: var(--step-0);
		font-weight: var(--weight-regular);
		padding-top: 1rem;

	}
`;
