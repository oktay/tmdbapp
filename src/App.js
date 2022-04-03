import React from 'react';
import {
  ChakraProvider, Heading,
} from '@chakra-ui/react';
import theme from './lib/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading>Hello World</Heading>
    </ChakraProvider>
  );
}

export default App;
