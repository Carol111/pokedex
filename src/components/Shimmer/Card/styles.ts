import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Shimmer = StyleSheet.create({
  number: {
    borderRadius: 4,
    marginBottom: 5,
    width: '20%',
  },
  name: {
    height: 30,
    borderRadius: 4,
    marginBottom: 10,
    width: '85%',
  },
  type: {
    height: 25,
    borderRadius: 4,
    marginRight: 5,
    width: '35%',
  },
  image: {
    flexGrow: 1,
    borderRadius: 8,
    width: '100%',
    marginTop: -30,
  },
});

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.background.gray};
  border-radius: 10px;
  margin: 15px 0;
`;

export const Data = styled.View`
  width: 60%;
`;

export const Types = styled.View`
  flex-direction: row;
`;

export const Image = styled.View`
  width: 40%;
`;

export const Item = styled.Text``;
