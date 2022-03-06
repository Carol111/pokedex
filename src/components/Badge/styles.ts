import styled from 'styled-components/native';

type ContainterProps = {
  type: string;
};

export const Container = styled.View<ContainterProps>`
  background-color: ${({theme, type}) => theme.colors.backgroundType[type]};
`;
