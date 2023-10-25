import styled from 'styled-components';

export const StyledLayout = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: var(--space-2xl-3xl) 0;
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
	overflow-y: scroll;

`;
