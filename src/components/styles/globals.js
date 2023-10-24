import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";
import { reset } from "./reset";
import { colors } from "./colors";
import { spacing } from "./spacing";

const GlobalStyle = createGlobalStyle`

    :root {

        ${typography}
        ${reset}
        ${colors}
        ${spacing}

        // Colors

        --surface-primary: var(--background-800);
        --surface-secondary: var(--background-500);

        --text-primary: var(--gray-50);

        --weight-regular: 400;
    
        body {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            font-family: var(--font-family);
            background-color: var(--surface-primary);
            color: var(--text-primary);
            }        
        }
`;

export default GlobalStyle;
