import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from 'src/theme/theme';

import SplashScreen from 'react-native-splash-screen';

import {StatusBar} from 'react-native';
import Routes from 'src/routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
