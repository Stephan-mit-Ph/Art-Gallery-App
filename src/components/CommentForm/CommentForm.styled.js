import styled from 'styled-components';

export const StyledForm = styled.form`
	display: grid;
	gap: 10px;
	width: clamp(21.875rem, 9.39vw + 19.674rem, 28.125rem);
`;

export const StyledLabel = styled.label`
	font-weight: var(--weight-regular);

`;

export const StyledTextarea = styled.textarea`
	font-family: inherit;
    background-color: var(--primary-50);
	padding: 0.2rem;
	border-radius: 0.5rem;
`;

export const StyledButton = styled.button`
	background-color: rgba(238, 152, 204, 0.6);
	border-radius: 0.5rem;
	padding: 0.5rem; 
	font-weight: var(--weight-medium);
`;
