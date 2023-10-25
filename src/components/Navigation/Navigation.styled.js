import styled from 'styled-components';
import Link from 'next/link';

export const StyledNavigation = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: var(--surface-secondary);
	padding: var(--space-xs-s) 0;
`;

export const StyledList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	height: 100%;
	margin: 0;
	gap: 3rem;

	li {
		font-size: 2.5rem;
	}
`;

export const StyledLink = styled(Link)`
	color: ${({ $isActive }) => ($isActive ? 'red' : 'green')};
	&:hover {
		color: var(--primary-500);
	}
	&:active {
		color: var(--secondary-500);
	}
`;
