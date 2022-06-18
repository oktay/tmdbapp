import { Badge, Box } from "@chakra-ui/react"
import { useGenre } from "../../lib/tmdb"
import Poster from "./poster"

function Card({ id, title, overview, poster_path, release_date, vote_average, genre_ids }) {
  const genres = useGenre({ type: title ? 'movie' : 'tv', ids: genre_ids });

  return (
    <Box position="relative">
      <Poster path={poster_path} />
      <Box position="absolute" inset="0">
        <Badge>{genres[0]}</Badge>
      </Box>
    </Box>
  )
}

export default Card