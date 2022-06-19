import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import theme from './lib/theme';
import Navigation from './components/layout/navigation';
import HomeView from './views/home';
import ListView from './views/list';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movie" element={<ListView title="Movies" />} />
        <Route path="/tv" element={<ListView title="TV Shows" bigCards={true} />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
