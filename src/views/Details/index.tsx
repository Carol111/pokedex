import React from 'react';
import {StatusBar, Text} from 'react-native';
import {Button} from 'src/components';

import {DetailsProps} from 'src/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import * as S from './styles';

const Details = ({route, navigation}: DetailsProps) => {
  const {pokemonId} = route.params;

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <S.Container>
        <Text>Detalhes</Text>

        <Button
          title={'Voltar'}
          onPress={() => {
            console.log('Voltar', pokemonId);
            navigation.goBack();
          }}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default Details;
