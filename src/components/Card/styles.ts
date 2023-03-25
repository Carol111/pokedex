import styled from 'styled-components/native';

type ContainterProps = {
  type: string;
};

export const Container = styled.TouchableOpacity<ContainterProps>`
  flex-direction: row;
  padding: 15px;
  background-color: ${({theme, type}) => theme.colors.backgroundType[type]};
  border-radius: 10px;
  margin: 15px 0;
`;

export const Number = styled.Text`
  color: ${({theme}) => theme.colors.text.number};
  font-size: ${({theme}) => theme.typography.pokemonNumber.size};
  font-family: ${({theme}) => theme.typography.pokemonNumber.family};
  text-transform: capitalize;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.text.white};
  font-size: ${({theme}) => theme.typography.pokemonName.size};
  font-family: ${({theme}) => theme.typography.pokemonName.family};
  text-transform: capitalize;
  margin-bottom: 5px;
  margin-top: -5px;
`;

export const Data = styled.View`
  flex: 1;
`;

export const Types = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  position: absolute;
  right: 0;
`;

export const Image = styled.Image`
  height: 130px;
  width: 130px;
  margin-top: -30px;
  position: absolute;
  right: 0;
`;

export const Pokeball = styled.Image`
  height: 145px;
  width: 145px;
  position: absolute;
  right: -15px;
  top: -15px;
`;

export const Pattern = styled.Image`
  height: 35px;
  width: 80px;
  position: absolute;
  left: 25%;
  top: 0;
`;
