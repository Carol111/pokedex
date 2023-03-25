import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background.white};
  padding: 0 30px;
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.background.white};
  padding: 30px;
`;

export const Pokeball = styled.View`
  position: absolute;
  top: 0;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

export const FilterButtons = styled.TouchableOpacity`
  padding: 5px 0 5px 5px;
  margin-left: 5px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.black};
  font-family: ${({theme}) => theme.typography.applicationTitle.family};
  font-size: ${({theme}) => theme.typography.applicationTitle.size};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text.gray};
  font-family: ${({theme}) => theme.typography.description.family};
  font-size: ${({theme}) => theme.typography.description.size};
`;

export const Content = styled.View``;
