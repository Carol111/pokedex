import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
    };
  }
}
