import styled from 'styled-components';
import Image from 'next/image';

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledWrapper = styled.section`
	display: flex;
	margin-top: 5rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h2 {
		font-weight: var(--weight-regular);
		text-align: center;
		font-size: var(--step-1);
		margin: 1rem 0 0 0;
	}

	p {
		margin: 0.5rem 0;
	}
`;

export const StyledImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	max-width: 400px;
	min-height: 400px;
	overflow: hidden;
`;

export const StyledList = styled.ul`
	list-style: none;
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	justify-content: center;
	padding-left: 0;
`;

export const StyledBackButton = styled.button`
	background-color: transparent;
	text-decoration: none;
	color: var(--text-primary);
	display: flex;
	font-size: var(--step-0);
	align-items: center;
	justify-content: center;
	padding-bottom: 0.5rem;

	svg {
		font-size: 2.8rem;
	}
`;
