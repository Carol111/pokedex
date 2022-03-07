import React from 'react';
import {Image, StyleSheet} from 'react-native';

type TypeIcons = {
  [index: string]: Element;
};

export default function useTypeIcons(
  type: string,
  size: number,
  color: string,
) {
  const styles = StyleSheet.create({
    image: {
      tintColor: color,
      width: size,
      height: size,
    },
  });

  const icon: TypeIcons = {
    bug: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/bug.png')}
      />
    ),
    dark: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/dark.png')}
      />
    ),
    dragon: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/dragon.png')}
      />
    ),
    electric: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/electric.png')}
      />
    ),
    fairy: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/fairy.png')}
      />
    ),
    fighting: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/fighting.png')}
      />
    ),
    fire: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/fire.png')}
      />
    ),
    flying: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/flying.png')}
      />
    ),
    ghost: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/ghost.png')}
      />
    ),
    grass: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/grass.png')}
      />
    ),
    ground: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/ground.png')}
      />
    ),
    ice: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/ice.png')}
      />
    ),
    normal: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/normal.png')}
      />
    ),
    poison: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/poison.png')}
      />
    ),
    psychic: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/psychic.png')}
      />
    ),
    rock: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/rock.png')}
      />
    ),
    steel: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/steel.png')}
      />
    ),
    water: (
      <Image
        style={styles.image}
        source={require('src/assets/images/types/water.png')}
      />
    ),
  };

  return icon[type];
}
