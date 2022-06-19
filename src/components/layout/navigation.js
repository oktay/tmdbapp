import { Link } from 'react-router-dom';
import { Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { Home, Movie, StarStroke, Tv } from '../icons';

function Navigation() {
  const links = [
    {
      label: 'Home',
      link: '/',
      icon: <Home />,
    },
    {
      label: 'Movies',
      link: '/movie',
      icon: <Movie />,
    },
    {
      label: 'TV Shows',
      link: '/tv',
      icon: <Tv />,
    },
    {
      label: 'Starred',
      link: '/starred',
      icon: <StarStroke />,
    },
  ];

  return (
    <Flex
      as="header"
      w={{ base: 'full', md: '14' }}
      position="fixed"
      top="0"
      left="0"
      h={{ base: '14', md: 'full' }}
      zIndex="sticky"
      bg="blackAlpha.500"
      alignItems={{ base: 'center', md: 'flex-start' }}
      justifyContent={{ base: 'flex-start', md: 'center' }}
    >
      <Stack
        alignItems="center"
        as="nav"
        spacing={{ base: '4', md: '16' }}
        px={{ base: '2', md: '0' }}
        py={{ base: '0', md: '8' }}
        direction={{ base: 'row', md: 'column' }}
      >
        {links.map(({ label, link, icon }) => (
          <IconButton
            as={Link}
            to={link}
            key={link}
            icon={icon}
            variant="ghost"
            colorScheme="whiteAlpha"
            w="auto"
            rounded="full"
          >
            <Text srOnly>{label}</Text>
          </IconButton>
        ))}
      </Stack>
    </Flex>
  );
}

export default Navigation;
