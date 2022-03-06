import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background.white};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.black};
  font-family: ${({theme}) => theme.typography.title.family};
  font-size: ${({theme}) => theme.typography.title.size};
`;
