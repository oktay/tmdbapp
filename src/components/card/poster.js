import { AspectRatio, Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { useImage } from "../../lib/tmdb";

function Poster({ path, size }) {
  const [url] = useImage({ path, size: size || "500" })
  const [loaded, setLoaded] = useState(false);

  return (
    <AspectRatio ratio={2/3}>
      <Skeleton isLoaded={loaded}>
        <Image src={url} onLoad={() => setLoaded(true)} />
      </Skeleton>
    </AspectRatio>
  )
}

export default Poster