import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './lib/theme';
import Carousel from './components/hero/carousel';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Carousel />
    </ChakraProvider>
  );
}

export default App;
