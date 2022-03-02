import React from 'react';
import {StatusBar} from 'react-native';

import {HomeProps} from 'src/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button} from 'src/components';
import * as S from './styles';

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <S.Container>
        <S.Title>Home</S.Title>
        <Button
          title={'Detalhes'}
          onPress={() => {
            console.log('Detalhes');
            navigation.navigate('Details', {pokemonId: '123'});
          }}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default Home;
