import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';
import {DefaultTheme} from 'styled-components/native';

import {HomeProps} from 'src/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button, Badge} from 'src/components';
import {getPokemonList} from 'src/services/pokemons';
import * as S from './styles';

const Home = ({navigation}: HomeProps) => {
  const theme: DefaultTheme = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.white}
      />
      <S.Container>
        <S.Title>Home</S.Title>

        <Badge type={'water'} size={15} />

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
