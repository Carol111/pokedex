import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

import * as S from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ShimmerCard = () => {
  return (
    <S.Container>
      <S.Data>
        <ShimmerPlaceholder style={S.Shimmer.number}>
          <S.Item>#000</S.Item>
        </ShimmerPlaceholder>

        <ShimmerPlaceholder style={S.Shimmer.name}>
          <S.Item>Pokemon Nome</S.Item>
        </ShimmerPlaceholder>

        <S.Types>
          <ShimmerPlaceholder style={S.Shimmer.type}>
            <S.Item>Type 1</S.Item>
          </ShimmerPlaceholder>

          <ShimmerPlaceholder style={S.Shimmer.type}>
            <S.Item>Type 2</S.Item>
          </ShimmerPlaceholder>
        </S.Types>
      </S.Data>

      <S.Image>
        <ShimmerPlaceholder style={S.Shimmer.image}>
          <S.Item>Pokemon Image</S.Item>
        </ShimmerPlaceholder>
      </S.Image>
    </S.Container>
  );
};

export default ShimmerCard;
