import { Badge, Box, Flex, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useGenre } from '../../lib/tmdb';
import Poster from './poster';
import Rating from './rating';

function Card({
  id,
  title,
  name,
  overview,
  poster_path,
  release_date,
  vote_average,
  genre_ids,
  big
}) {
  const type = title ? 'movie' : 'tv'
  const genres = useGenre({ type, ids: genre_ids });

  return (
    <Box position="relative">
      <Poster path={poster_path} />
      <Flex
        as={Link}
        to={['/detail', type, id].join('/')}
        position="absolute"
        inset="0"
        alignItems="flex-end"
        p="8"
        bg="blackAlpha.600"
      >
        <Stack alignItems="flex-start" spacing="4">
          <Badge variant="subtle" colorScheme="blue">
            {genres[0]}
          </Badge>
          <Rating rate={vote_average} />
          <Heading size={big ? "lg" : "sm"}>{title || name}</Heading>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Card;
