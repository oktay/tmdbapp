import {
  AspectRatio,
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { useApi } from '../../lib/tmdb';
import Slide from './slide';
import { ChevronLeft, ChevronRight, ExclamationCircle } from '../icons';
import { useState } from 'react';

function Carousel() {
  const { loading, error, response } = useApi({ path: 'movie/now_playing' });
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(1)

  return (
    <Box position="relative">
      {(error || loading) && (
        <AspectRatio ratio={{ base: 2 / 3, lg: 3 / 2 }} maxH="80vh">
          <Flex
            h="full"
            w="full"
            justifyContent="center"
            alignItems="center"
            bg="gray.200"
          >
            {error ? (
              <Stack alignItems="center" color="gray.500">
                <Icon as={ExclamationCircle} boxSize="8" />
                <Text>{error.status_message}</Text>
              </Stack>
            ) : (
              <Spinner color="gray.500" size="xl" />
            )}
          </Flex>
        </AspectRatio>
      )}
      {!loading && !error && response && (
        <Box position="relative">
          <Swiper
            modules={[EffectFade, Navigation, Pagination]}
            effect="fade"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              type: 'progressbar',
              currentClass: 'swiper-pagination-current',
              totalClass: 'swiper-pagination-total',
            }}
            onSwiper={swiper => {
              setCurrent(swiper.activeIndex + 1);
              setTotal(swiper.slides.length);
            }}
            onSlideChange={swiper => {
              setCurrent(swiper.activeIndex + 1);
            }}
          >
            {response.results.map(result => (
              <SwiperSlide key={result.id}>
                <Slide
                  image={result.poster_path}
                  imageDesktop={result.backdrop_path}
                  title={result.title}
                  description={result.overview}
                  rate={result.vote_average}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <ButtonGroup variant="ghost" colorScheme="whiteAlpha" display="flex">
            <IconButton
              className="swiper-button-prev"
              position="absolute"
              left={{ md:"14" }}
              top="0"
              h="full"
              size="lg"
              fontSize="4xl"
              zIndex="docked"
              rounded="none"
              icon={<ChevronLeft />}
            />
            <IconButton
              className="swiper-button-next"
              position="absolute"
              right="0"
              top="0"
              h="full"
              size="lg"
              fontSize="4xl"
              zIndex="docked"
              rounded="none"
              icon={<ChevronRight />}
            />
          </ButtonGroup>
          <HStack
            position="absolute"
            bottom="4"
            left="50%!important"
            transform="translateX(-50%)"
            zIndex="overlay"
            color="white"
          >
            <Text>{current < 10 ? current.toString().padStart(2, '0') : current}</Text>
            <Box>
              <Box className="swiper-pagination" />
            </Box>
            <Text>{total < 10 ? total.toString().padStart(2, '0') : total}</Text>
          </HStack>
        </Box>
      )}
    </Box>
  );
}

export default Carousel;
