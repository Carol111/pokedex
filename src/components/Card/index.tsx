import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {DefaultTheme} from 'styled-components/native';

import useTypeIcons from 'src/hooks/useTypeIcons';

import {Badge} from 'src/components';

import * as T from 'src/types/pokemon';
import * as S from './styles';

type Props = {
  pokemon: T.PokemonDetailsListItem;
  click: () => void;
};

const Card = ({pokemon, click}: Props) => {
  const theme: DefaultTheme = useContext(ThemeContext);
  // const icon = useTypeIcons(type, size, theme.colors.text.white);

  return (
    <S.Container type={pokemon.types[0].type.name} onPress={click}>
      <S.Data>
        <S.Number>#{('00' + pokemon.order).slice(-3)}</S.Number>
        <S.Name>{pokemon.name}</S.Name>

        <S.Types>
          {pokemon.types.map(item => (
            <Badge type={item.type.name} size={15} />
          ))}
        </S.Types>
      </S.Data>

      <S.Pattern
        source={require('src/assets/images/patterns/pattern_card.png')}
      />

      <S.Pokeball source={require('src/assets/images/patterns/pokeball.png')} />

      <S.Image
        source={{
          uri: pokemon.image,
        }}
      />
      <S.ImageContainer />
    </S.Container>
  );
};

export default Card;
