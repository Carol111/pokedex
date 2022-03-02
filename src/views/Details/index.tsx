import React from 'react';
import {Text} from 'react-native';
import {Button} from 'src/components';

import {DetailsProps} from 'src/routes';

import * as S from './styles';

const Details = ({route, navigation}: DetailsProps) => {
  const {pokemonId} = route.params;

  return (
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
  );
};

export default Details;
