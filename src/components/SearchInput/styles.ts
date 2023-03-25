import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background.defaultInput};
  flex-direction: row;
  padding: 0 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity``;

export const Input = styled.TextInput`
  color: ${({theme}) => theme.colors.text.gray};
  font-size: ${({theme}) => theme.typography.description.size};
  font-family: ${({theme}) => theme.typography.description.family};
  margin-left: 5px;
  flex: 1;
`;
