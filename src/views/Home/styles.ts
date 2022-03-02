import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.palette.primary};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.palette.common.white};
  font-family: 'Roboto-Bold';
  font-size: 24px;
`;
