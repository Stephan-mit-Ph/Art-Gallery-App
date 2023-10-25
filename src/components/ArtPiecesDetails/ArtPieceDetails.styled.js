import styled from 'styled-components';

export const StyledWrapper = styled.section`
	display: flex;

	flex-direction: column;
	h2 {
		font-weight: var(--weight-regular);
        text-align: center;
        margin: 1rem 0;
	}
    
    p {
        margin: 0.5rem 0;
    }
`;

export const StyledImageContainer = styled.div`
	position: relative;
	width: auto;
	height: 30rem;
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
	border: 1px solid red;
    padding-bottom: 2rem;

	svg {
		font-size: 2.8rem;
	}
`;
