import {
  Badge,
  Box,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from '../icons';

function SearchBox() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const type = pathname.split('/')[2];
  const [query, setQuery] = useState(
    new URLSearchParams(search).get('query') || ''
  );
  const [adult, setAdult] = useState(
    new URLSearchParams(search).get('adult') === 'true' ? true : false
  );

  function handleSubmit(e) {
    e.preventDefault();

    const url = new URL(window.location.href);

    url.searchParams.set('query', query);
    url.searchParams.set('adult', adult);
    url.searchParams.set('page', 1);

    navigate(url.pathname + url.search);
  }

  function handleChange(e) {
    navigate(['/search', e.target.value].join('/'));
  }

  useEffect(() => {
    setQuery(new URLSearchParams(search).get('query') || '');
  }, [search]);

  function handleSwitch(e) {
    const url = new URL(window.location.href);

    url.searchParams.set('adult', e.target.checked);

    setAdult(e.target.checked);
    navigate(url.pathname + url.search);
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex alignItems="center">
        <FormControl w="36" mr="4">
          <Select
            value={type}
            onChange={handleChange}
            variant="filled"
            rounded="full"
          >
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement>
              <Icon boxSize="6" as={Search} />
            </InputLeftElement>
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              variant="filled"
              rounded="full"
              placeholder="Search"
            />
          </InputGroup>
        </FormControl>
        <Stack alignItems="center" ml="4">
          <Badge fontSize="xs">ADULT</Badge>
          <Switch isChecked={adult} onChange={handleSwitch} />
        </Stack>
      </Flex>
    </Box>
  );
}

export default SearchBox;
