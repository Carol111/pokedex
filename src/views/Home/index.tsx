import React, {useContext, useEffect, useCallback, useState} from 'react';
import {StatusBar, LogBox, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ThemeContext} from 'styled-components';
import {DefaultTheme} from 'styled-components/native';

import {getPokemonList} from 'src/services/pokemons';
import {Button, ShimmerCard, SearchInput, Card} from 'src/components';
import {HomeProps} from 'src/routes';

import SvgPokeball from 'src/assets/svg/patterns/pokeball_home.svg';
import SvgGeneration from 'src/assets/svg/icons/generation.svg';
import SvgFilter from 'src/assets/svg/icons/filter.svg';
import SvgSort from 'src/assets/svg/icons/sort.svg';

import * as T from 'src/types/pokemon';

import * as S from './styles';

LogBox.ignoreAllLogs();

const Home = ({navigation}: HomeProps) => {
  const theme: DefaultTheme = useContext(ThemeContext);
  const [loadingShimmer, setLoadingShimmer] = useState(true);
  const [pokemonList, setPokemonList] = useState(
    [] as T.PokemonDetailsListItem[],
  );

  const loadPokemons = useCallback(async () => {
    setLoadingShimmer(true);
    const response = await getPokemonList();
    setLoadingShimmer(false);

    console.log('response', response);
    setPokemonList(response.data.list);
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background.black}
      />

      <ScrollView>
        <S.Header>
          <S.Pokeball>
            <SvgPokeball
              width={Dimensions.get('window').width}
              fill={theme.colors.background.gray}
            />
          </S.Pokeball>

          <S.FilterContainer>
            <S.FilterButtons>
              <SvgGeneration fill={theme.colors.background.black} />
            </S.FilterButtons>

            <S.FilterButtons>
              <SvgSort fill={theme.colors.background.black} />
            </S.FilterButtons>

            <S.FilterButtons>
              <SvgFilter fill={theme.colors.background.black} />
            </S.FilterButtons>
          </S.FilterContainer>

          <S.Title>Pokedex</S.Title>

          <S.Description>
            Search for Pokemon by name or using the National Pokedex number.
          </S.Description>

          <SearchInput
            search={termo => {
              console.log(termo);
              return [];
            }}
          />
        </S.Header>

        <S.Container>
          {loadingShimmer ? (
            <S.Content>
              <ShimmerCard />
              <ShimmerCard />
              <ShimmerCard />
              <ShimmerCard />
            </S.Content>
          ) : (
            <S.Content>
              {pokemonList.map(pokemon => (
                <Card
                  pokemon={pokemon}
                  click={() => {
                    navigation.navigate('Details', {pokemonId: '123'});
                  }}
                />
              ))}

              <Button
                title={'Detalhes'}
                onPress={() => {
                  navigation.navigate('Details', {pokemonId: '123'});
                }}
              />
            </S.Content>
          )}
        </S.Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
