import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import theme from './lib/theme';
import Navigation from './components/layout/navigation';
import HomeView from './views/home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
