import React, {useContext, useEffect, useCallback} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {ThemeContext} from 'styled-components';
import {DefaultTheme} from 'styled-components/native';

import {HomeProps} from 'src/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Badge, ShimmerCard} from 'src/components';
import {getPokemonList} from 'src/services/pokemons';
import * as S from './styles';

LogBox.ignoreAllLogs();

const Home = ({navigation}: HomeProps) => {
  const theme: DefaultTheme = useContext(ThemeContext);

  // const loadPokemons = useCallback(async () => {
  //   const response = await getPokemonList();
  //   console.log('response', response);
  // }, []);

  // useEffect(() => {
  //   loadPokemons();
  // }, [loadPokemons]);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background.black}
      />

      <S.Container>
        <S.Header>
          <S.Title>Pokedex</S.Title>
        </S.Header>

        <S.Content>
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />

          <Badge type={'water'} size={15} />

          <Button
            title={'Detalhes'}
            onPress={async () => {
              navigation.navigate('Details', {pokemonId: '123'});
            }}
          />
        </S.Content>
      </S.Container>
    </SafeAreaView>
  );
};

export default Home;
