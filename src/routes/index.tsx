import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Home, Details} from 'src/views';

type RootStackParamList = {
  Home: undefined;
  Details: {pokemonId: string};
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Details"
            component={Details}
            initialParams={{pokemonId: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Routes;
