import { Box } from "@chakra-ui/react"
import Poster from "./poster"

function Card({ id, title, overview, poster_path, release_date, vote_average, }) {
  return (
    <Box>
      <Poster path={poster_path} />
    </Box>
  )
}

export default Card