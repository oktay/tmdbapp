import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import theme from './lib/theme';
import Navigation from './components/layout/navigation';
import HomeView from './views/home';
import ListView from './views/list';
import SearchView from './views/search';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movie" element={<ListView title="Movies" />} />
        <Route path="/tv" element={<ListView title="TV Shows" />} />
        <Route path="/search/movie" element={<SearchView title="Search" />} />
        <Route path="/search/tv" element={<SearchView title="Search" />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
