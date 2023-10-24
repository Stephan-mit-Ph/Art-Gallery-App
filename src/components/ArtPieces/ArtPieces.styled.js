import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--space-xl-2xl) 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

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
