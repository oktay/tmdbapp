import { useState } from 'react';
import {
  AspectRatio,
  Box,
  Button,
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
import Poster from '../card/poster';
import { Link } from 'react-router-dom';

function Slide({ id, image, imageDesktop, title, description, rate }) {
  const [imgDesktop] = useImage({ path: imageDesktop });
  const [imgMobile] = useImage({ path: image, size: '780' });
  const [bgLoaded, setBgLoaded] = useState(false);
  const background = useBreakpointValue({ base: imgMobile, md: imgDesktop });
  const type = title ? 'movie' : 'tv';

  return (
    <Box position="relative">
      <AspectRatio ratio={{ base: 2 / 3, lg: 3 / 2 }} maxH="80vh">
        <Skeleton isLoaded={bgLoaded}>
          <Image
            src={background}
            onLoad={() => setBgLoaded(true)}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
          />
        </Skeleton>
      </AspectRatio>
      <Flex
        as={Link}
        to={['detail', type, id].join('/')}
        bg="blackAlpha.700"
        color="white"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        px={{ base: '10', md: '32', lg: '48' }}
        py={{ base: '2', lg: '16' }}
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <Box
          w="250px"
          mr={{ md: '4', lg: '16' }}
          mb={{ md: '8' }}
          display={{ base: 'none', md: 'block' }}
          flexShrink="0"
        >
          <Poster path={image} />
        </Box>
        <Stack spacing="6" alignItems="flex-start">
          <Rating rate={rate} />
          <Heading fontSize={{ md: 'xl', lg: '4xl' }} fontWeight="medium">
            {title}
          </Heading>
          <Text maxW="md" noOfLines={4}>
            {description}
          </Text>
          <Button size="lg" px="24">
            See Details
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Slide;
