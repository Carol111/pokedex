import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import useTypeIcons from 'src/hooks/useTypeIcons';

import * as S from './styles';
import {DefaultTheme} from 'styled-components/native';

type Props = {
  type: string;
  size: number;
};

const Badge = ({type, size}: Props) => {
  const theme: DefaultTheme = useContext(ThemeContext);
  const icon = useTypeIcons(type, size, theme.colors.text.white);

  return (
    <S.Container type={type}>
      {icon}
      <S.Title>{type}</S.Title>
    </S.Container>
  );
};

export default Badge;
