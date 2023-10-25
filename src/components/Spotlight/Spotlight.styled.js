import styled from 'styled-components';

export const StyledImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: clamp(25rem, 21.479rem + 15.023vw, 35rem);
	max-width: 1200px;
`;

export const StyledWrapper = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;


	h2 {
		font-weight: var(--weight-regular);
		padding: 1rem 0;
	}

	h3 {
		font-weight: var(--weight-regular);
		padding-top: 1rem;
	}
`;
