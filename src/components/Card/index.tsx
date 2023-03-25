import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {DefaultTheme} from 'styled-components/native';

import useTypeIcons from 'src/hooks/useTypeIcons';

import * as T from 'src/types/pokemon';
import * as S from './styles';

type Props = {
  pokemon: T.PokemonDetailsListItem;
  click: () => void;
};

const Card = ({pokemon, click}: Props) => {
  // const theme: DefaultTheme = useContext(ThemeContext);
  // const icon = useTypeIcons(type, size, theme.colors.text.white);

  return (
    <S.Container onPress={click}>
      <S.Title>{pokemon.name}</S.Title>
    </S.Container>
  );
};

export default Card;
