import {DefaultTheme} from 'styled-components/native';

const theme: DefaultTheme = {
  colors: {
    type: {
      bug: '#8CB230',
      dark: '#58575F',
      dragon: '#0F6AC0',
      electric: '#EED535',
      fairy: '#ED6EC7',
      fighting: '#D04164',
      fire: '#FD7D24',
      flying: '#748FC9',
      ghost: '#556AAE',
      grass: '#62B957',
      ground: '#DD7748',
      ice: '#61CEC0',
      normal: '#9DA0AA',
      poison: '#A552CC',
      psychic: '#EA5D60',
      rock: '#BAAB82',
      steel: '#417D9A',
      water: '#4A90DA',
    },
    backgroundType: {
      bug: '#8BD674',
      dark: '#6F6E78',
      dragon: '#7383B9',
      electric: '#F2CB55',
      fairy: '#EBA8C3',
      fighting: '#EB4971',
      fire: '#FFA756',
      flying: '#83A2E3',
      ghost: '#8571BE',
      grass: '#8BBE8A',
      ground: '#F78551',
      ice: '#91D8DF',
      normal: '#B5B9C4',
      poison: '#9F6E97',
      psychic: '#FF6568',
      rock: '#D4C294',
      steel: '#4C91B2',
      water: '#58ABF6',
    },
    background: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#E2E2E2',
      defaultInput: '#F2F2F2',
      pressedInput: '#E2E2E2',
      highlight: '#EA5D60',
      modal: {
        color: '#000000',
        opacity: '0.25',
      },
    },
    text: {
      white: '#FFFFFF',
      black: '#17171B',
      gray: '#747476',
      number: {
        color: '#17171B',
        opacity: '0.6',
      },
    },
    height: {
      short: '#FFC5E6',
      medium: '#AEBFD7',
      tall: '#AAACB8',
    },
    weight: {
      light: '#99CD7C',
      normal: '#57B2DC',
      heavy: '#5A92A5',
    },
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
      size: '14px',
      family: 'Roboto-Bold',
    },
    pokemonType: {
      size: '12px',
      family: 'Roboto-Medium',
    },
  },
};

export default theme;
