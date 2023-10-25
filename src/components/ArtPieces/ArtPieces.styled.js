import styled from 'styled-components';

export const StyledList = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	

  h2 {
    font-weight: var(--weight-regular);
	padding: 1rem 0;

  }

	li {
		width: var(--image-size);
		min-width: 10rem;
		height: var(--image-size);
		display: flex;
		margin: 2.5rem 0;
		justify-content: center;
		align-items: center;
	}
`;
