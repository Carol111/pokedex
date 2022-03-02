import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from 'src/theme/theme';

import {StatusBar, useColorScheme} from 'react-native';
import Routes from 'src/routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
