import styled from 'styled-components';

export const StyledList = styled.ul`
	list-style: none;
	width: 100%;
	padding: 0;
	margin: var(--space-l-xl) 0;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

  h2 {
    font-weight: var(--weight-regular);
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
