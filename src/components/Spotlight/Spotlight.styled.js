import styled from 'styled-components';

export const StyledImageContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
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
	margin-top: var(--space-xl-2xl);

	h2 {
		font-weight: var(--weight-regular);
		padding: 1rem 0;
	}

	h3 {
		font-weight: var(--weight-regular);
		padding-top: 1rem;
	}
`;
