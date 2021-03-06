import { AspectRatio, Image, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import { useImage } from '../../lib/tmdb';

function Poster({ path, size }) {
  const [url] = useImage({ path, size: size || '500' });
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(url)

  return (
    <AspectRatio ratio={2 / 3}>
      <Skeleton isLoaded={loaded}>
        <Image src={src} onLoad={() => setLoaded(true)} onError={() => setSrc('/fallback-poster.png')} />
      </Skeleton>
    </AspectRatio>
  );
}

export default Poster;
