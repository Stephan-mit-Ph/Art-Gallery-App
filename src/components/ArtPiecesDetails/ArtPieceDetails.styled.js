import styled from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
	object-fit: contain;
`;

export const StyledWrapper = styled.section`
	display: flex;
	padding: 2rem 0;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;


	h2 {
		font-weight: var(--weight-regular);
		width: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
		font-size: var(--step-1);
		margin: 1rem 0;
		text-align: center;
	}

	p {
		margin: 0.5rem 0;
	}
`;

export const StyledImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: clamp(20rem, 16.489rem + 15.023vw, 30rem);
	margin: 3rem 0;
`;

export const StyledList = styled.ul`
	list-style: none;
	display: flex;
	width: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
	flex-wrap: wrap;
	margin: 1rem 0;
	justify-content: space-between;
	margin: 2rem 0; 
	li {
		margin: 1rem;
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

export const StyledColor = styled.li`
	width: 2rem;
	height: 2rem;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;
