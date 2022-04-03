import { useState } from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useImage } from '../../lib/tmdb';
import Rating from '../card/rating';

function Slide({ image, imageDesktop, title, description, rate }) {
  const [img] = useImage({ path: image });
  const [imgDesktop] = useImage({ path: imageDesktop });
  const [bgLoaded, setBgLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const src = useBreakpointValue({ base: img, md: imgDesktop });

  return (
    <Box position="relative">
      <AspectRatio ratio={{ base: 2 / 3, lg: 3 / 2 }} maxH="80vh">
        <Skeleton isLoaded={bgLoaded}>
          <Image
            src={src}
            onLoad={() => setBgLoaded(true)}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
          />
        </Skeleton>
      </AspectRatio>
      <Flex
        as="a"
        href="/detail"
        bg="blackAlpha.700"
        color="white"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        alignItems="center"
        px={{ base: '10', lg: '48' }}
        py={{ base: '2', lg: '16' }}
      >
        <AspectRatio ratio={2/3} w="250px" mr="16" display={{ base: 'none', md: 'block' }}>
          <Skeleton isLoaded={posterLoaded}>
            <Image src={img} onLoad={() => setPosterLoaded(true)} width="full" height="full" />
          </Skeleton>
        </AspectRatio>
        <Stack spacing="6">
          <Rating rate={rate} />
          <Heading size="2xl" fontWeight="medium">{title}</Heading>
          <Text maxW="md" noOfLines={4}>
            {description}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Slide;
