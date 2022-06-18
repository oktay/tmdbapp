import { Heading, Stack } from "@chakra-ui/react";
import Carousel from "../components/hero/carousel";
import ContentGrid from "../components/list/grid";
import { useApi } from "../lib/tmdb";

function HomeView() {
  const { response, loading, error } = useApi({ path: 'trending/movie/week' });

  return (
    <Stack spacing="0" color="white">
      <Carousel />
      <Stack pl="14" spacing="0">
        <Heading pl="8" my="8" size="md">Trending Movies</Heading>
        <ContentGrid loading={loading} error={error} results={response?.results ?? []} />
      </Stack>
    </Stack>
  )
}

export default HomeView