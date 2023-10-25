import styled from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
	object-fit: cover;
`;

export const StyledWrapper = styled.section`
	display: flex;
	width: 100%;
	padding-top: 3rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		font-weight: var(--weight-regular);
		width: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
		font-size: var(--step-1);
		margin: 0.4rem 0 0 0;
	}

	p {
		margin: 0.5rem 0;
	}
`;

export const StyledImageContainer = styled.div`
	position: relative;
	width: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
	height: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
`;

export const StyledList = styled.ul`
	list-style: none;
	display: flex;
	width: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
	flex-wrap: wrap;
	justify-content: space-between;

	li {
		margin-bottom: 0.5rem;
	}
`;

export const StyledBackButton = styled.button`
	background-color: transparent;
	text-decoration: none;
	color: var(--text-primary);
	display: flex;
	font-size: var(--step-0);

	svg {
		font-size: 2rem;
	}
`;

export const StyledActionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 12rem;
`;
