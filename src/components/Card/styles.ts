import styled from 'styled-components/native';

type ContainterProps = {
  type: string;
};

// export const Container = styled.View<ContainterProps>`
//   background-color: ${({theme, type}) => theme.colors.type[type]};
//   flex-direction: row;
//   padding: 5px 5px;
//   border-radius: 3px;
// `;

export const Container = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.black};
  font-size: ${({theme}) => theme.typography.pokemonType.size};
  font-family: ${({theme}) => theme.typography.pokemonType.family};
  text-transform: capitalize;
  margin-left: 5px;
`;
