import React from 'react';
import {Text} from 'react-native';

import Bug from 'src/assets/svg/vectors/types/bug.svg';

import * as S from './styles';

type Props = {
  type: string;
};

const Badge = ({type}: Props) => {
  return (
    <S.Container type={type}>
      <Bug width={40} height={40} />
      <Text>{type}</Text>
    </S.Container>
  );
};

export default Badge;
