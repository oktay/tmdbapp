import { Box, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useApi, useParams } from '../lib/tmdb';
import ContentGrid from '../components/list/grid';
import Pagination from '../components/list/pagination';
import SearchBox from '../components/search/searchbox';

function SearchView({ title, bigCards }) {
  const { pathname, search } = useLocation();
  const page = new URLSearchParams(search).get('page') || 1;
  const query = new URLSearchParams(search).get('query') || '';
  const adult = new URLSearchParams(search).get('adult') || false;
  const [params] = useParams({ page, query, include_adult: adult });
  const { loading, response } = useApi({
    path: query
      ? pathname.replace('/', '')
      : [pathname.split('/')[2], 'popular'].join('/'),
    params,
  });

  return (
    <Box ml={{ md: '14' }} px={{ md: '14' }} py={{ base: '0', md: '8' }}>
      <Heading
        size="md"
        my="8"
        mx={{ base: '8', md: '0' }}
        pt={{ base: '12', md: '0' }}
      >
        {title}
      </Heading>
      <Box my="8" px={{ base: '8', md: '0' }}>
        <SearchBox />
      </Box>
      <ContentGrid
        results={response?.results ?? []}
        loading={loading}
        bigCards={bigCards}
        gap={{ base: '0', md: '8' }}
      />
      <Box my="8">
        <Pagination pages={response?.total_pages} page={response?.page} />
      </Box>
    </Box>
  );
}

export default SearchView;
