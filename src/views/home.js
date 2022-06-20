import { Box, Heading, Stack } from '@chakra-ui/react';
import Carousel from '../components/hero/carousel';
import ContentGrid from '../components/list/grid';
import { useApi } from '../lib/tmdb';

function HomeView() {
  const { response, loading, error } = useApi({ path: 'trending/movie/week' });
  const { response: tvResponse, loading: tvLoading, error: tvError } = useApi({ path: 'trending/tv/week' });

  return (
    <Stack spacing="0" color="white">
      <Carousel />
      <Box pl={{ md: '14' }}>
        <Heading pl="8" my="8" size="md">
          Trending Movies
        </Heading>
        <ContentGrid
          loading={loading}
          error={error}
          results={response?.results ?? []}
          gap={{ base: '0', md: '8' }}
        />
        <Heading pl="8" my="8" size="md">
          Trending TV Shows
        </Heading>
        <ContentGrid
          loading={tvLoading}
          error={tvError}
          results={tvResponse?.results ?? []}
          gap="0"
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          bigCards={true}
        />
      </Box>
    </Stack>
  );
}

export default HomeView;
