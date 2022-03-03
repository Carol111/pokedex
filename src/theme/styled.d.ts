import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      type: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      backgroundType: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      background: {
        white: string;
        defaultInput: string;
        pressedInput: string;
        highlight: string;
        modal: {
          color: string;
          opacity: string;
        };
      };
      text: {
        white: string;
        black: string;
        gray: string;
        number: {
          color: string;
          opacity: string;
        };
      };
      height: {
        short: string;
        medium: string;
        tall: string;
      };
      weight: {
        light: string;
        normal: string;
        heavy: string;
      };
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
