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
    typography: {
      title: {
        size: string;
        family: string;
      };
      applicationTitle: {
        size: string;
        family: string;
      };
      pokemonName: {
        size: string;
        family: string;
      };
      filterTitle: {
        size: string;
        family: string;
      };
      description: {
        size: string;
        family: string;
      };
      pokemonNumber: {
        size: string;
        family: string;
      };
      pokemonType: {
        size: string;
        family: string;
      };
    };
  }
}
