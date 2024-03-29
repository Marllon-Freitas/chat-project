import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      backgroundSecondary: string;
      text: string;
      primary: string;
      secondary: string;
    };
  }
}
