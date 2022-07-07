import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Pagination({
  pages,
  page,
}) {
  const navigate = useNavigate();

  function handlePagination(dir) {
    const url = new URL(window.location.href);

    if (dir === 'prev') {
      url.searchParams.set('page', page - 1);
    }

    if (dir === 'next') {
      url.searchParams.set('page', page + 1);
    }

    navigate(url.pathname + url.search);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Flex justifyContent="center" alignItems="center">
      <Button isDisabled={page === 1} onClick={() => handlePagination('prev')}>Previous</Button>
      <Text mx="6" color="GrayText">{page} / {pages}</Text>
      <Button isDisabled={page === pages} onClick={() => handlePagination('next')}>Next</Button>
    </Flex>
  )
}

export default Pagination;