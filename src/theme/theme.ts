import {DefaultTheme} from 'styled-components/native';

const theme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
    },
    primary: 'red',
  },
  typography: {
    title: {
      size: '100px',
      family: 'Roboto-Bold',
    },
    applicationTitle: {
      size: '32px',
      family: 'Roboto-Bold',
    },
    pokemonName: {
      size: '26px',
      family: 'Roboto-Bold',
    },
    filterTitle: {
      size: '16px',
      family: 'Roboto-Bold',
    },
    description: {
      size: '16px',
      family: 'Roboto-Regular',
    },
    pokemonNumber: {
      size: '12px',
      family: 'Roboto-Bold',
    },
    pokemonType: {
      size: '12px',
      family: 'Roboto-Medium',
    },
  },
};

export default theme;
