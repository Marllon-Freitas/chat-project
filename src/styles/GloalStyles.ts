import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  :root {
    --background: ${(props) => props.theme.colors.background};
    --background-secondary: ${(props) => props.theme.colors.backgroundSecondary};
    --primary: ${(props) => props.theme.colors.primary};
    --secondary: ${(props) => props.theme.colors.secondary};
  }
`;
