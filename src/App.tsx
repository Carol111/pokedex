import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from 'src/theme/theme';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Home from 'src/views/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? theme.palette.common.black
      : theme.palette.common.white,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
