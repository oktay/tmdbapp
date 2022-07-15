import {
  AspectRatio,
  Box,
  Image,
  Skeleton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApi, useImage } from '../lib/tmdb';

function DetailView({ type }) {
  const { id } = useParams();
  const { error, loading, response } = useApi({ path: [type, id].join('/') });
  const [imgLoaded, setImgLoaded] = useState(false);
  const bgImageDesktop = useImage({ path: response?.backdrop_path });
  const bgImageMobile = useImage({ path: response?.poster_path });
  const bgImage = useBreakpointValue({
    base: bgImageMobile,
    md: bgImageDesktop,
  });

  return (
    <Box>
      <AspectRatio ratio={{ base: 2 / 3, lg: 3 / 2 }} maxH="80vh">
        <Skeleton isLoaded={!loading && imgLoaded}>
          {!error && (
            <Image
              w="full"
              h="full"
              objectFit="cover"
              src={bgImage}
              onLoad={() => setImgLoaded(true)}
            />
          )}
        </Skeleton>
      </AspectRatio>
    </Box>
  );
}

export default DetailView;
