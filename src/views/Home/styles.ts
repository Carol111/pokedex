import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.background.white};
  padding: 30px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.black};
  font-family: ${({theme}) => theme.typography.applicationTitle.family};
  font-size: ${({theme}) => theme.typography.applicationTitle.size};
`;

export const Content = styled.View``;
