import React from 'react';
import {Text} from 'react-native';

import {HomeProps} from 'src/routes';

import {Button} from 'src/components';
import * as S from './styles';

const Home = ({navigation}: HomeProps) => {
  return (
    <S.Container>
      <Text>Home</Text>
      <Button
        title={'Detalhes'}
        onPress={() => {
          console.log('Detalhes');
          navigation.navigate('Details', {pokemonId: '123'});
        }}
      />
    </S.Container>
  );
};

export default Home;
