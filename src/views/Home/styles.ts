import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.palette.primary};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.palette.common.white};
  font-family: ${({theme}) => theme.typography.title.family};
  font-size: ${({theme}) => theme.typography.title.size};
`;
