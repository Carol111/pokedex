import React, {useContext} from 'react';
import SvgSearch from 'src/assets/svg/icons/search.svg';

import {ThemeContext} from 'styled-components';
import {DefaultTheme} from 'styled-components/native';

import * as S from './styles';

type Props = {
  search: (termo: string) => [];
};

const SearchInput = ({search}: Props) => {
  const theme: DefaultTheme = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Button>
        <SvgSearch fill={theme.colors.text.gray} />
      </S.Button>

      <S.Input
        placeholder="Ex: Pikachu, 25"
        placeholderTextColor={theme.colors.text.gray}
      />
    </S.Container>
  );
};

export default SearchInput;
