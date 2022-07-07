import { Heading, Stack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useApi, useParams } from '../lib/tmdb';
import ContentGrid from '../components/list/grid';
import Pagination from '../components/list/pagination';

function ListView({ title, bigCards }) {
  const { pathname, search } = useLocation();
  const page = new URLSearchParams(search).get('page') || 1;
  const [params] = useParams({ page });
  const { loading, response } = useApi({
    path: [pathname.split('/')[1], 'popular'].join('/'),
    params,
  });

  return (
    <Stack
      ml={{ md: '14' }}
      px={{ md: '14' }}
      py={{ base: '0', md: '8' }}
      spacing={{ base: '0', md: '8' }}
    >
      <Heading
        size="md"
        mx={{ base: '8', md: '0' }}
        my={{ base: '8', md: '0' }}
        pt={{ base: '12', md: '0' }}
      >
        {title}
      </Heading>
      <ContentGrid
        results={response?.results ?? []}
        loading={loading}
        bigCards={bigCards}
        gap={{ base: '0', md: '8' }}
      />
      <Pagination pages={response?.total_pages} page={response?.page} />
    </Stack>
  );
}

export default ListView;
