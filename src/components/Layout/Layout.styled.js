import styled from 'styled-components';

export const StyledLayout = styled.div`
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--surface-secondary);
	margin-bottom: auto;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 100;

	h1 {
		font-size: var(--step-3);
		font-weight: 500;
		position: relative;
		padding: var(--space-xs-s);

		&::before {
			content: '';
			position: absolute;
			width: 0;
			height: 1px;
			bottom: 10px;
			left: 50%;
			background-color: var(--text-primary);
			transition: width 0.5s;
			transform: translateX(-50%);
		}

		&:hover::before {
			width: 100%;
		}
	}
`;

export const StyledMain = styled.main`
	display: flex;
	min-height: 100vh;
	justify-content: center;
	overflow: scroll;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: var(--space-2xl-3xl) 0 6rem 0;
`;

export const StyledNavigation = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 3rem;
	background-color: var(--surface-secondary);
	margin-top: auto;
	position: fixed;
	bottom: 0;
	z-index: 100;
	padding: var(--space-xs-s);

	svg {
		font-size: 2.5rem;
		margin: 5px 0;
	}
`;
