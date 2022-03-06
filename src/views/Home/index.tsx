import React from 'react';
import {StatusBar} from 'react-native';

import {HomeProps} from 'src/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Badge} from 'src/components';
import {getPokemonList} from 'src/services/pokemons';
import * as S from './styles';

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <S.Container>
        <S.Title>Home</S.Title>
        <Badge type={'bug'} />
        <Button
          title={'Detalhes'}
          onPress={async () => {
            console.log('Detalhes');

            const response = await getPokemonList();
            console.log('response', response);

            navigation.navigate('Details', {pokemonId: '123'});
          }}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default Home;
